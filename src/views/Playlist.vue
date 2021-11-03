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
      v-if="playlist && isLoading === false"
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import Tracks from '@/components/collection/Tracks.vue';

export default {
  components: {
    Tracks,
  },
  computed: {
    ...mapState([
      'userPlaylists',
      'isLoading',
    ]),
    ...mapGetters([
      'playlist',
    ]),
  },
  created() {
    this.$store.commit('setIsLoading', true);
    this.$store.commit('setPlaylist', null);
    this.$store.dispatch('getPlaylist', this.$route.params.id)
      .then(() => {
        this.$store.commit('setIsLoading', false);
      });
  },
};
</script>
