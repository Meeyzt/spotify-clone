<template>
  <div class="flex flex-row h-full w-full text-white justify-center items-center" :key="playlist.id">
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
      :key="userPlaylist[userPlaylist.length-1].id"
      :playlist-data="userPlaylist[userPlaylist.length-1].tracks.item"
      :playlist-name="userPlaylist[userPlaylist.length-1].name"
      :playlist-pic="userPlaylist[userPlaylist.length-1].images[0].url"
      :playlist-author="userPlaylist[userPlaylist.length-1].display_name"
      :playlist-song-count="userPlaylist[userPlaylist.length-1].tracks.total"
      :playlist-like-count="userPlaylist[userPlaylist.length-1].followers.total"
      v-else
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
    ]),
    ...mapGetters([
      'playlist',
    ]),
  },

  beforeRouteUpdate(to) {
    this.$store.dispatch('getPlaylist', to.params.id)
      .then(() => {
        console.log(this.playlist);
      })
      .catch(() => {
        this.playlist = this.userPlaylists[-1];
        console.log(this.playlist);
      });
  },

  created() {
    this.$store.dispatch('getPlaylist', this.$route.params.id);
  },
};
</script>
