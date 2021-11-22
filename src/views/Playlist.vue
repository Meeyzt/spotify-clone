<template>
  <div
    class="flex flex-row h-full w-full text-white justify-center items-center"
    v-if="playlist"
  >
    <Playlist
      type="playlist"
      playlist-author-profile-pic=""
      :playlist="playlist"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Playlist from '@/components/Playlist.vue';

export default {

  components: {
    Playlist,
  },

  computed: {
    ...mapState('pages/playlist', [
      'playlist',
    ]),
  },

  beforeRouteUpdate(to, from, next) {
    this.$store.commit('pages/playlist/setPlaylist', null, { root: true });

    this.$store.dispatch('currentUser/getCurrentUsersLikedTracks', null, { root: true });

    this.$store.dispatch('pages/playlist/getPlaylist', to.params.id, { root: true }).then(() => {
      this.$store.commit('setIsLoading', false);
    });

    if (!(to.params.id === from.params.id)) {
      next();
    }
  },

  mounted() {
    this.$store.commit('pages/playlist/setPlaylist', null, { root: true });

    this.$store.dispatch('pages/playlist/getPlaylist', this.$route.params.id, { root: true }).then(() => {
      this.$store.commit('setIsLoading', false);
    });
  },
};
</script>
