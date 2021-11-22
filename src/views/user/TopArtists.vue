<template>
  <div class="text-white h-full p-8 bg-contentColor overflow-y-auto">
    <shelf
        type="artist"
        title="Bu ayın en çok dinlenen sanatçıları"
        subTitle="Yalnızca sana görünür"
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
  computed: {
    ...mapState('currentUser', [
      'currentUsersFollowedArtists',
    ]),
  },

  components: {
    Shelf,
  },

  created() {
    this.$store.dispatch('currentUser/getCurrentUsersFollowedArtists', null, { root: true }).then(() => {
      this.$store.commit('setIsLoading', false, { root: true });
    });
  },
};
</script>
