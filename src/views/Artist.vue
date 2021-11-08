<template>
    <div class="flex flex-col h-full w-full text-white overflow-auto" v-if="!isLoading">

        <artist-header
            v-if="artist"
            :artistName="artist.name"
            :bgImage="artist.images[0].url"
            :artistFollowerCount="artist.followers.total"
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

import ArtistHeader from '@/components/artist/ArtistHeader.vue';
import ArtistContent from '@/components/artist/ArtistContent.vue';

export default {
components: {
    ArtistHeader,
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
        this.$store.dispatch('getArtist', artistID);
        this.$store.dispatch('getArtistTopTracks', artistID).then(() => {
            this.$store.commit('setIsLoading', false);
        });
    }
},
};
</script>
