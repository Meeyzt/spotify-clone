<template>
  <div class="text-white h-full p-8 bg-contentColor overflow-y-auto">
    <shelf
        title="Takip ediliyor"
        type="artist"
        link=""
        :data="currentUsersFollowedArtists"
        :row="2"
      />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Shelf from '@/components/Shelf.vue';

export default {
  computed: {
    ...mapState('currentUser', [
      'currentUsersFollowedArtists',
    ]),
  },

  components: {
    Shelf,
  },

  created() {
    this.$store.dispatch('currentUser/getCurrentUsersFollowedArtists', null, { root: true });
  },
};
</script>
