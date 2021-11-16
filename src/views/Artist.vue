<template>
    <div class="flex flex-col h-full w-full text-white overflow-auto" v-show="!isLoading">

        <playlist-header
            v-if="artistsData"
            type="artist"
            :name="artistsData.name"
            :picture="artistsData.images[0].url"
            :likeCount="artistsData.followers.total"
        />

        <artist-content
            v-if="artistsTopTracks"
            :topTracks="artistsTopTracks"
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
        ]),

        ...mapState('pages/artist', [
          'artistsData',
          'artistsTopTracks',
        ]),
    },

    beforeRouteUpdate(to) {
      if (to.params.id) {
            this.$store.dispatch('pages/artist/getArtistsData', to.params.id, { root: true });
            this.$store.dispatch('pages/artist/getArtistTopTracks', to.params.id, { root: true }).then(() => {
                this.$store.commit('setIsLoading', false, { root: true });
            });
        }
    },

    created() {
        const artistID = this.$route.params.id;

        this.$store.commit('setIsLoading', true, { root: true });

        if (artistID) {
            this.$store.dispatch('pages/artist/getArtistsData', artistID, { root: true });
            this.$store.dispatch('pages/artist/getArtistTopTracks', artistID, { root: true }).then(() => {
                this.$store.commit('setIsLoading', false, { root: true });
            });
        }
    },
  };
</script>
