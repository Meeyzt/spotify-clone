<template>
  <div class="w-full">
    <Shelf type="artist" :data="$store.state.artists" title="Sanatçılar" />
  </div>
</template>

<script>
import Shelf from '@/components/home/Shelf.vue';

export default {
  components: {
    Shelf,
  },
};
</script>
