<template>
  <div class="px-4 pt-6 lg:px-8 flex flex-col items-start bg-contentColor overflow-y-auto h-full w-full">

    <Shelf
      v-if="$store.state.artists"
      title="En çok dinlenen podcastler"
      type="playlist"
      link=""
      :row="2"
      :data="$store.state.artists"
    />

  </div>
</template>

<script>

import Shelf from '@/components/Shelf.vue';

export default {
  created() {
    this.$store.dispatch('getArtists');
  },

  components: {
    Shelf,
  },
};
</script>
