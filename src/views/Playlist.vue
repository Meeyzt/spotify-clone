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
import { mapGetters } from 'vuex';

import Playlist from '@/components/Playlist.vue';

export default {

  components: {
    Playlist,
  },

  computed: {
    ...mapGetters([
      'playlist',
    ]),
  },

  beforeRouteUpdate(to, from, next) {
    this.$store.dispatch('getPlaylist', to.params.id);

    if (!(to.params.id === from.params.id)) {
      next();
    }
  },

  mounted() {
    this.$store.dispatch('getPlaylist', this.$route.params.id);
  },
};
</script>
