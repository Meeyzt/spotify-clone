<template>
  <Playlist
    v-if="initPlaylistData !== null"
    :playlist="initPlaylistData"
    :playlistAuthorProfilePic="currentUsersData.images[0].url"
    type="liked"
  />
</template>

<script>
import { mapState } from 'vuex';
import Playlist from '@/components/Playlist.vue';

export default {
  async created() {
    await this.$store.dispatch('currentUser/getCurrentUsersLikedTracks', null);
    this.$store.commit('setIsLoading', false);
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
          id: this.currentUsersData.id ?? null,
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
