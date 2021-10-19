<template>
<div class="px-4 pt-6 lg:px-8 flex flex-col items-start bg-contentColor overflow-auto h-full">
  <div class="w-full">

    <Shelf title="En çok dinlenen podcastler" :data="playlists" type="podcast" />

    <Shelf title="Kategoriler" type="podcast" :data="playlists" />

  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Shelf from '@/components/home/Shelf.vue';

export default {
  components: {
    Shelf,
  },

  computed: {
    ...mapGetters([
      'playlists',
    ]),
  },
};
</script>
