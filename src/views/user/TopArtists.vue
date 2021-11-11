<template>
  <div class="text-white h-full p-8 bg-contentColor overflow-y-auto">
    <shelf
        type="artist"
        title="Bu ayın en çok dinlenen sanatçıları"
        subTitle="Yalnızca sana görünür"
        link=""
        :row="2"
        :data="artists"
      />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Shelf from '@/components/Shelf.vue';

export default {
  computed: {
    ...mapGetters([
      'artists',
    ]),
  },

  components: {
    Shelf,
  },

  created() {
    this.$store.dispatch('getArtists');
  },
};
</script>
