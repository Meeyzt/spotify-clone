<template>
  <div class="px-4 pt-6 lg:px-8 flex flex-col items-start bg-contentColor overflow-y-auto h-full w-full">

    <Shelf
      v-if="currentUsersFollowedAlbums"
      title="En çok dinlenen podcastler"
      type="album"
      link=""
      :row="2"
      :data="currentUsersFollowedAlbums.items"
    />

  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import { mapState } from 'vuex';

import Shelf from '@/components/Shelf.vue';

export default {
  computed: {
    ...mapState('currentUser', [
      'currentUsersFollowedAlbums',
    ]),
  },

  created() {
    this.$store.dispatch('currentUser/getCurrentUsersFollowedAlbums', null, { root: true }).then(() => {
      this.$store.commit('setIsLoading', false, { root: true });
    });
  },

  components: {
    Shelf,
  },
};
</script>
