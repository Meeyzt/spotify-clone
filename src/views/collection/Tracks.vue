<template>
  <Playlist
    v-if="initPlaylistData !== null"
    :playlist="initPlaylistData"
    playlistAuthorProfilePic="https://i.scdn.co/image/ab6775700000ee850d8934d06959380ede197038"
    type="liked"
  />
</template>

<script>
import { mapState } from 'vuex';
import Playlist from '@/components/Playlist.vue';

export default {
  created() {
    this.$store.dispatch('currentUser/getCurrentUsersLikedTracks', null, { root: true });
  },

  computed: {
    ...mapState('currentUser', [
      'currentUsersData',
      'currentUsersLikedTracks',
    ]),

    initPlaylistData() {
      return this.currentUsersLikedTracks !== null ? {
        id: 'liked',
        name: 'Beğenilen Şarkılar',
        images: [
          {
            url: 'https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png',
          },
        ],

        owner: {
          display_name: this.currentUsersData.display_name ?? null,
        },

        tracks: this.currentUsersLikedTracks ? {
          items: this.currentUsersLikedTracks.items,
          total: this.currentUsersLikedTracks.total,
        } : null,

        followers: {
          total: 0,
        },

      } : null;
    },
  },

  components: {
    Playlist,
  },
};
</script>
