<template>
  <div class="flex flex-row h-full w-full text-white justify-center items-center">
    <Tracks
      type="playlist"
      playlist-author-profile-pic="sd"
      :key="playlist.id"
      :playlist-data="playlist.tracks.items"
      :playlist-name="playlist.name"
      :playlist-pic="playlist.images[0].url"
      :playlist-author="playlist.owner.display_name"
      :playlist-song-count="playlist.tracks.total"
      :playlist-like-count="playlist.followers.total"
      :playlist-id="playlist.id"
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

  watch: {
    playlist() {
      console.log('rendered');
    },
  },

  mounted() {
    this.$store.commit('setIsLoading', false);
  },
};
</script>
