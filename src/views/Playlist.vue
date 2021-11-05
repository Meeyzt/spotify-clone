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
import Tracks from '@/components/collection/Tracks.vue';

export default {

  components: {
    Tracks,
  },

  computed: {
    ...mapGetters([
      'playlist',
    ]),
  },

  mounted() {
    this.$store.commit('setIsLoading', false);
  },
};
</script>
