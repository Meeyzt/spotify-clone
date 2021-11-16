<template>
  <div
    v-if="placeholderPlaylists && placeholderFeaturedPlaylists"
    class="px-4 pt-6 lg:px-8 flex flex-col items-start bg-contentColor overflow-auto h-full"
  >

    <div class="w-full">

      <div class="flex flex-col items-start gap-y-6">

        <div class="flex flex-col w-full">

          <HomeWelcomeText/>

          <div class="grid xsmall-grid-cols-1 xsmall:grid-cols-2 small:grid-cols-3 xxlarge:grid-cols-4 gap-4 overflow-y-hidden">

            <HomeWelcomeItem
              class="ofSixHide ofFourHide ofTwoHide xsmall:ofSixShow small:ofFourShow xxlarge:ofTwoShow"
              v-for="playlist in playlists(8)"
              :data="playlist"
              :key="playlist.id"
            />

          </div>
        </div>

        <Shelf
          title="Yakınlarda çalınanlar"
          type="playlist"
          :row="1"
          :data="playlists(6)"
        />

        <Shelf
          title="Podcasts"
          type="podcast"
          :row="1"
          :data="playlists(6)"
        />

        <Shelf
          title="Meeyzt İçin Derlendi"
          sub-title="Daha çok dinledikçe daha iyi tavsiyeler al."
          type="playlist"
          :data="featureds(6)"
          :row="1"
        />

      </div>

    </div>
  </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex';

  import Shelf from '../components/Shelf.vue';
  import HomeWelcomeItem from '../components/home/HomeWelcomeItem.vue';
  import HomeWelcomeText from '../components/home/HomeWelcomeText.vue';

  export default {
    name: 'Home',

    components: {
      Shelf,
      HomeWelcomeItem,
      HomeWelcomeText,
    },

    mounted() {
      this.$store.dispatch('placeholder/getPlaceholderPlaylists', null, { root: true });
      this.$store.dispatch('placeholder/getPlaceholderFeaturedPlaylists', null, { root: true }).then(() => {
        this.$store.commit('setIsLoading', false, { root: true });
      });
    },

    computed: {
      ...mapState('placeholder', [
        'placeholderPlaylists',
        'placeholderFeaturedPlaylists',
      ]),

      ...mapGetters('placeholder', {
        playlists: 'slicedPlaceholderPlaylists',
        featureds: 'slicedPlaceholderFeaturedPlaylists',
      }),
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
