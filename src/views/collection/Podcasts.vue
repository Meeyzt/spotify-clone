<template>
<div class="px-4 pt-6 lg:px-8 flex flex-col items-start bg-contentColor overflow-y-auto h-full w-full">
  <div class="w-full">

    <Shelf
      title="En çok dinlenen podcastler"
      type="podcast"
      :row="1"
      :data="$store.getters.playlists(6)"
    />

    <Shelf
      title="Kategoriler"
      type="podcast"
      link=""
      :row="2"
      :data="$store.getters.playlists(20)"
    />

  </div>
</div>
</template>

<script>
import Shelf from '@/components/Shelf.vue';

export default {
  components: {
    Shelf,
  },

};
</script>
