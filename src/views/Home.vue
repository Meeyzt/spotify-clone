<template>
  <div class="w-full">
      <Shelf title="Yakınlarda çalınanlar" :data="$store.state.playlists" />
      <Shelf title="Podcasts" type="podcast" :data="$store.state.playlists" />
      <Shelf title="Meeyzt İçin Derlendi" :data="$store.state.featured" subTitle="Daha çok dinledikçe daha iyi tavsiyeler al." />
  </div>
</template>

<script>
import { mapState } from 'vuex';
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
  },
};
</script>
