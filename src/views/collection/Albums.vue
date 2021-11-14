<template>
  <div class="px-4 pt-6 lg:px-8 flex flex-col items-start bg-contentColor overflow-y-auto h-full w-full">

    <Shelf
      v-if="usersLikedAlbums"
      title="En çok dinlenen podcastler"
      type="album"
      link=""
      :row="2"
      :data="usersLikedAlbums.items"
    />

  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import { mapState } from 'vuex';

import Shelf from '@/components/Shelf.vue';

export default {
  computed: {
    ...mapState([
      'usersLikedAlbums',
    ]),
  },

  created() {
    this.$store.dispatch('getUsersLikedAlbums').then();
  },

  components: {
    Shelf,
  },
};
</script>
