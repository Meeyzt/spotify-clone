<template>
    <table
      class="w-full"
      v-if="artistsTopTracks"
    >

        <tbody>

            <tr><td class="pt-4"/></tr>

            <table-item
              v-for="(track, index) in artistsTopTracks"
              :key="track.id"
              :index="index"
              :track="track"
              :liked="track.liked"
              type="artist"
            />

        </tbody>

    </table>
</template>

<script>
import { mapState } from 'vuex';

import TableItem from '../../TableItem.vue';

export default {
  computed: {
    ...mapState('pages/artist', [
      'artistsTopTracks',
    ]),
  },

  components: { TableItem },
};
</script>
