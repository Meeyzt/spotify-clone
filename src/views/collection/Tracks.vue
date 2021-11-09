<template>
  <Tracks
    v-if="initPlaylistData !== null"
    :playlist="initPlaylistData"
    playlistAuthorProfilePic="https://i.scdn.co/image/ab6775700000ee850d8934d06959380ede197038"
    type="liked"
  />
</template>

<script>
import { mapState } from 'vuex';
import Tracks from '@/components/Playlist.vue';

export default {
  created() {
    this.$store.dispatch('getSaved');
  },

  computed: {
    ...mapState([
      'userData',
      'saved',
    ]),

    initPlaylistData() {
      return this.saved !== null ? {
        id: 'liked',
        name: 'Beğenilen Şarkılar',
        images: [
          {
            url: 'https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png',
          },
        ],

        owner: {
          display_name: this.userData.display_name ?? null,
        },

        tracks: this.saved ? {
          items: this.saved.items,
          total: this.saved.total,
        } : null,

        followers: {
          total: 0,
        },

      } : null;
    },
  },

  components: {
    Tracks,
  },
};
</script>
