<template>
  <song-displayer
    :track="currentTrack ? currentTrack : {
      name: 'Hasret',
      liked: true,
      artists: [
        {
          name: 'Direc-t',
        },
      ],
      album: {
        images: [
          {
            url: 'https://i.scdn.co/image/ab67616d0000b2739072c5e5b9666922becd7f06',
          },
        ],
      }
    }"
  />
</template>

<script>
import { mapState } from 'vuex';

import SongDisplayer from '@/components/footer/left-footer/SongDisplayer.vue';

export default {
  components: {
    SongDisplayer,
  },

  computed: {
    ...mapState([
      'currentTrack',
    ]),
  },

  created() {
    this.$store.dispatch('getCurrentPlayingTrack');
  },
};
</script>
