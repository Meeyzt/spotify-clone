<template>
    <div class="flex flex-col h-full w-full text-white overflow-auto" v-show="!isLoading">

        <playlist-header
            v-if="artist"
            type="artist"
            :name="artist.name"
            :picture="artist.images[0].url"
            :likeCount="artist.followers.total"
        />

        <artist-content
            v-if="artistTopTracks"
            :topTracks="artistTopTracks"
            :artistID="this.$route.params.id"
        />
    </div>
</template>

<script>
import { mapState } from 'vuex';

import PlaylistHeader from '@/components/PlaylistHeader.vue';
import ArtistContent from '@/components/artist/ArtistContent.vue';

export default {
components: {
    PlaylistHeader,
    ArtistContent,
},

computed: {
    ...mapState([
        'isLoading',
        'artist',
        'artistTopTracks',
    ]),
},

created() {
    const artistID = this.$route.params.id;

    this.$store.commit('setIsLoading', true);

    if (artistID) {
        this.$store.dispatch('pages/artist/getArtistsData', artistID);
        this.$store.dispatch('pages/artist/getArtistTopTracks', artistID).then(() => {
            this.$store.commit('setIsLoading', false, { root: true });
        });
    }
},
};
</script>
