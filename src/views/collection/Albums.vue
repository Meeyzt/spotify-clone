<template>
  <div class="px-4 pt-6 lg:px-8 flex flex-col items-start bg-contentColor overflow-auto h-full w-full">
    <Shelf type="albums" :data="$store.state.artists" title="Albümler"/>
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
