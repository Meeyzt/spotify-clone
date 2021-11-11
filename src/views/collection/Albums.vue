<template>
  <div class="px-4 pt-6 lg:px-8 flex flex-col items-start bg-contentColor overflow-y-auto h-full w-full">

    <Shelf
      title="En çok dinlenen podcastler"
      type="playlist"
      row="2"
      link=""
      :data="this.$store.state.artists"
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
