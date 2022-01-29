<template>
  <song-displayer
    :track="currentUsersCurrentPlayingTrack ? currentUsersCurrentPlayingTrack : {
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
    ...mapState('currentUser', [
      'currentUsersCurrentPlayingTrack',
    ]),

    ...mapState('auth', [
      'isAuthenticated',
    ]),

    ...mapState([
      'isLoading',
    ]),
  },

  methods: {
    getCurrentUsersCurrentPlayingTrack(time) {
      setTimeout(() => {
        this.$store.dispatch('currentUser/getCurrentUsersCurrentPlayingTrack', null).then(() => {
          this.getCurrentUsersCurrentPlayingTrack(this.currentUsersCurrentPlayingTrack.duration_ms);
        });
      }, time);
    },
  },

  created() {
    if (this.isAuthenticated) {
      this.$store.dispatch('currentUser/getCurrentUsersCurrentPlayingTrack', null).then(() => {
        this.getCurrentUsersCurrentPlayingTrack(this.currentUsersCurrentPlayingTrack.duration_ms);
      });
    }
  },
};
</script>
