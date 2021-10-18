<template>
  <div class="w-full">
    <Shelf title="En çok dinlenen podcastler" type="podcast" />
    <Shelf title="Kategoriler" type="podcast" />
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
