<template>
<div class="px-4 pt-6 lg:px-8 flex flex-col items-start bg-contentColor overflow-auto h-full">
  <div class="w-full">

    <Shelf title="En çok dinlenen podcastler" :data="$store.getters.playlists(6)" type="shelfPodcast" />

    <Shelf title="Kategoriler" type="albums" :data="$store.getters.playlists(20)" />

  </div>
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
