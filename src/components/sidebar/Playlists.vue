<template>
  <div
    class="px-6 flex-auto overflow-y-auto overflow-x-hidden relative mt-2 w-full h-full"
    v-if="userPlaylists"
  >

    <router-link
      tag="div"
      class="text-s cursor-pointer pt-2 px-2 text-normalColor hover:text-white truncate"
      v-for="playlist in userPlaylists"
      :key="playlist.id"
      :to="`/playlist/${playlist.id}`"
      ref="sidebarPlaylist"
    >
      {{ playlist.name }}
    </router-link>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {

  mounted() {
    this.$store.dispatch('getUserPlaylists');
  },

  computed: {
    ...mapGetters([
      'userPlaylists',
    ]),
  },
};
</script>
