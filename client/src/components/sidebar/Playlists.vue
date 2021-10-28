<template>
  <div
    class="px-6 flex-auto overflow-y-auto overflow-x-hidden mt-2 w-full h-full"
    v-if="userPlaylists"
  >

    <div
      class="text-s cursor-default flex pt-2 flex-row gap-x-4 text-normalColor hover:text-white"
      v-for="playlist in userPlaylists"
      :key="playlist.id"
    >
      <router-link
        class="w-full truncate"
        tag="a"
        :key="playlist.id"
        :to="`/playlist/${playlist.id}`"
      >
        {{ playlist.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {

  computed: {
    ...mapGetters([
      'userPlaylists',
    ]),
  },
};
</script>
