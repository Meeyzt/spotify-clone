<template>
  <div class="px-4 pt-6 lg:px-8 flex flex-col items-start bg-contentColor w-full overflow-auto h-full">
    <Shelf
      v-if="$store.state.artists"
      title="Sanatçılar"
      type="artist"
      link=""
      :row="2"
      :data="$store.state.artists"
    />
  </div>
</template>

<script>
import Shelf from '@/components/Shelf.vue';

export default {
  components: {
    Shelf,
  },

  created() {
    this.$store.dispatch('getArtists');
  },
};
</script>
