<template>
    <div class="flex flex-col h-full w-full text-white overflow-auto" v-show="!isLoading" v-if="artistsData">

        <playlist-header
            v-if="artistsData"
            type="artist"
            :name="artistsData.name"
            :picture="artistsData.images[0].url"
            :likeCount="artistsData.followers.total"
        />

        <artist-content
          :artist-img="artistsData.images[0].url"
          :artist-name="artistsData.name"
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
      ...mapState('pages/artist', [
          'artistsData',
        ]),

        ...mapState([
            'isLoading',
        ]),

        ...mapState('auth', [
          'isAuthenticated',
        ]),
    },

    beforeRouteUpdate(to) {
      if (to.params.id) {
            this.$store.dispatch('pages/artist/getArtistsData', to.params.id, { root: true });
            this.$store.dispatch('pages/artist/getArtistTopTracks', to.params.id, { root: true }).then(() => {
              this.$store.dispatch('pages/artist/getArtistsAlbums', to.params.id, { root: true }).then(() => {
                this.$store.commit('setIsLoading', false, { root: true });
              });
            });
        }
    },

    created() {
        const artistID = this.$route.params.id;

        this.$store.commit('setIsLoading', true, { root: true });

        if (artistID) {
            this.$store.dispatch('pages/artist/getArtistsData', artistID, { root: true });
            this.$store.dispatch('pages/artist/getArtistTopTracks', artistID, { root: true }).then(() => {
              this.$store.dispatch('pages/artist/getArtistsAlbums', artistID, { root: true }).then(() => {
                this.$store.commit('setIsLoading', false, { root: true });
              });
            });
        }
    },
  };
</script>
