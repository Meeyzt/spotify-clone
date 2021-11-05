<template>
  <div v-if="$store.state.playlists !== null && $store.state.featured !== null " class="px-4 pt-6 lg:px-8 flex flex-col items-start bg-contentColor overflow-auto h-full">

    <div class="w-full">

      <div class="flex flex-col items-start gap-y-6">

        <div class="flex flex-col w-full">

          <Head/>

          <div class="grid xsmall-grid-cols-1 xsmall:grid-cols-2 small:grid-cols-3 xxlarge:grid-cols-4 gap-4 overflow-y-hidden">

            <Headbar class="ofSixHide ofFourHide ofTwoHide xsmall:ofSixShow small:ofFourShow xxlarge:ofTwoShow" v-for="playlist in $store.getters.playlists(8)" :data="playlist" :key="playlist.id"/>

          </div>
        </div>

        <Shelf
        title="Yakınlarda çalınanlar"
        :data="$store.getters.playlists(6)"
        type="shelfPlaylist"
        />

        <Shelf
        title="Podcasts"
        type="shelfPodcast"
        :data="$store.getters.playlists(6)"
        />

        <Shelf
        title="Meeyzt İçin Derlendi"
        subTitle="Daha çok dinledikçe daha iyi tavsiyeler al."
        :data="$store.getters.featureds(6)"
        type="shelfPlaylist"
        />

      </div>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Shelf from '../components/home/Shelf.vue';
import Headbar from '../components/home/Headbar.vue';
import Head from '../components/home/Head.vue';

export default {
  name: 'Home',

  components: {
    Shelf,
    Headbar,
    Head,
  },

  mounted() {
    this.$store.dispatch('getplaylistData');
    this.$store.dispatch('getFeatured').then(() => {
      this.$store.commit('setIsLoading', false);
    });
  },

  computed: {
    ...mapState([
      'isAuthenticated',
      'playlists',
      'featureds',
    ]),
  },
};
</script>

<style scoped>
    .ofTwoHide:nth-child(7),
    .ofTwoHide:nth-child(8) {
        display: none;
    }
    .ofFourHide:nth-child(6),
    .ofFourHide:nth-child(5) {
      display: none;
    }
    .ofSixHide:nth-child(4),
    .ofSixHide:nth-child(3) {
      display: none;
    }
</style>
