<template>
    <div
      class="w-full bg-contentColor text-white p-3"
      v-if="playlist"
    >
      <div class="flex w-full justify-between">

        <div class="text-xl font-bold">En çok dinlenenler </div>
        <div>yalnızca sana görünür</div>

      </div>

      <table class="w-full">
        <tbody>
          <table-item
            class="w-full"
            type="profile"
            :key="index+'user'"
            :index="index"
            :track="track.track"
            :added_at="track.added_at"
            :liked="track.liked"
            v-for="(track, index) in playlist.tracks.items"
          />
        </tbody>
      </table>

    </div>
</template>

<script>
import { mapState } from 'vuex';

import TableItem from '@/components/TableItem.vue';

export default {
  computed: {
    ...mapState([
      'playlist',
      'userPlaylists',
    ]),
  },

  components: {
    TableItem,
  },

  created() {
    this.$store.dispatch('getPlaylist', this.userPlaylists[0].id);
  },
};
</script>
