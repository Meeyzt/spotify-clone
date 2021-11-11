<template>
  <div class="flex flex-row h-full w-full text-white justify-center items-center">
    <Tracks
      type="playlist"
      playlist-author-profile-pic="sd"
      :playlist="playlist"
      v-if="playlist"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Tracks from '@/components/Playlist.vue';

export default {

  components: {
    Tracks,
  },

  computed: {
    ...mapGetters([
      'playlist',
    ]),
  },

  async beforeRouteUpdate(to) {
    await this.$store.dispatch('getPlaylist', to.params.id);
  },

  mounted() {
    this.$store.dispatch('getPlaylist', this.$route.params.id);
  },
};
</script>
