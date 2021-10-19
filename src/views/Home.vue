<template>
<div class="px-4 pt-6 lg:px-8 flex flex-col items-start bg-contentColor overflow-auto h-full">
  <div class="w-full">

      <Shelf title="Yakınlarda çalınanlar" :data="playlists" />

      <Shelf title="Podcasts" type="podcast" :data="playlists" />

      <Shelf title="Meeyzt İçin Derlendi" :data="featureds" subTitle="Daha çok dinledikçe daha iyi tavsiyeler al." />

  </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Shelf from '../components/home/Shelf.vue';

export default {
  name: 'Home',

  components: {
    Shelf,
  },

  computed: {
    ...mapState([
      'isAuthenticated',
    ]),

    ...mapGetters([
      'playlists',
      'featureds',
    ]),
  },
};
</script>
