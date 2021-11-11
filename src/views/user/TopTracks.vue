<template>
  <div class="text-white h-full p-8 bg-contentColor overflow-y-auto" v-if="playlists()">
    <shelf
        title="Bu ayın en çok dinlenen parçaları"
        subTitle="Yalnızca sana görünür"
        type="topTracks"
        :row="2"
        link=""
        :data="playlists(50)"
      />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Shelf from '@/components/Shelf.vue';

export default {
  computed: {
    ...mapGetters([
      'playlists',
    ]),
  },

  components: {
    Shelf,
  },

  created() {
    this.$store.dispatch('getplaylistData');
  },
};
</script>
