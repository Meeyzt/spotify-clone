<template>
  <div class="px-4 pt-6 lg:px-8 flex flex-col items-start bg-contentColor w-full overflow-auto h-full">
    <Shelf
      v-if="currentUsersFollowedArtists"
      title="Sanatçılar"
      type="artist"
      link=""
      :row="2"
      :data="currentUsersFollowedArtists"
    />
  </div>
</template>

<script>

import { mapState } from 'vuex';
import Shelf from '@/components/Shelf.vue';

export default {
  components: {
    Shelf,
  },

  computed: {
    ...mapState('currentUser', [
      'currentUsersFollowedArtists',
    ]),
  },

  created() {
    this.$store.dispatch('currentUser/getCurrentUsersFollowedArtists', null, { root: true }).then(() => {
      this.$store.commit('setIsLoading', false, { root: true });
    });
  },
};
</script>
