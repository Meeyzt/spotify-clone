<template>
  <div v-if="playlist !== null" class="flex flex-row h-full w-full text-white justify-center items-center" :key="playlist.id">
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
      v-if="playlist.tracks.items.length > 0"
    />
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
      v-else
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

  beforeRouteUpdate(to) {
    this.$store.dispatch('getPlaylist', to.params.id);
  },

  created() {
    this.$store.dispatch('getPlaylist', this.$route.params.id);
  },
};
</script>
