<template>
  <div
    class="px-6 flex-auto overflow-y-auto overflow-x-hidden relative mt-2 w-full h-full"
    v-if="currentUsersLikedPlaylists"
  >

    <router-link
      tag="div"
      class="text-s cursor-pointer pt-2 px-2 text-normalColor hover:text-white truncate"
      v-for="playlist in currentUsersLikedPlaylists"
      :key="playlist.id"
      :to="`/playlist/${playlist.id}`"
      ref="sidebarPlaylist"
    >
      {{ playlist.name }}
    </router-link>

  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    mounted() {
      this.$store.dispatch('currentUser/getCurrentUsersLikedPlaylists', null, { root: true });
    },

    computed: {
      ...mapState('currentUser', [
        'currentUsersLikedPlaylists',
      ]),
    },
  };
</script>
