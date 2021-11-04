<template>
  <div
    class="px-6 flex-auto overflow-y-auto overflow-x-hidden relative mt-2 w-full h-full relative"
    v-if="userPlaylists"
  >

    <router-link
      tag="div"
      class="text-s cursor-pointer flex pt-2 flex-row gap-x-4 text-normalColor hover:text-white"
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
