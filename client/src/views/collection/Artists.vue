<template>
  <div class="px-4 pt-6 lg:px-8 flex flex-col items-start bg-contentColor w-full overflow-auto h-full">
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
