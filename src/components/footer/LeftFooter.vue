<template>
  <song-displayer
    :track="currentUsersCurrentPlayingTrack"
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
};
</script>
