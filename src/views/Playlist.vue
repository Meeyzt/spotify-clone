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

  async beforeRouteUpdate(to, from, next) {
    await this.$store.commit('pages/playlist/setPlaylist', null);

    await this.$store.dispatch('currentUser/getCurrentUsersLikedTracks');

    await this.$store.dispatch('pages/playlist/getPlaylist', to.params.id);

    await this.$store.commit('setIsLoading', false);

    if (!(to.params.id === from.params.id)) {
      next();
    }
  },

  async mounted() {
    await this.$store.commit('pages/playlist/setPlaylist', null);

    await this.$store.dispatch('pages/playlist/getPlaylist', this.$route.params.id);

    await this.$store.commit('setIsLoading', false);

    console.log(this.playlist);
  },
};
</script>
