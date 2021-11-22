<template>
    <div
      class="w-full bg-contentColor text-white px-4 pt-8 overflow-y-auto"
      v-if="playlist"
    >
      <div class="w-full justify-between pb-4 px-1">

        <div class="text-2xl font-bold leading-4">Bu ayın en çok dinlenen parçaları</div>
        <div class="text-normalColor text-sm truncate">yalnızca sana görünür</div>

      </div>

      <table class="w-full">
        <thead>

          <tr class="text-[12px] tracking-tighter border-b border-gray-500 opacity-60">

            <th class="py-1 flex items-center justify-end font-normal text-[16px]">
              <div>
                #
              </div>
            </th>

            <th class="text-left pl-3 font-normal tracking-widest">
              BAŞLIK
            </th>

            <th class="hidden md:table-cell text-left font-normal truncate tracking-widest">
              ALBÜM
            </th>

            <th class="flex flex-row justify-center items-center">
              <DurationIcon :width="16" :height="16"/>
            </th>

          </tr>
        </thead>

        <tbody>
          <tr class="h-3"/>

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
import DurationIcon from '@/components/icons/DurationIcon.vue';

export default {
  computed: {
    ...mapState('pages/playlist', [
      'playlist',
    ]),

    ...mapState('currentUser', [
      'currentUsersLikedTracks',
    ]),
  },

  components: {
    TableItem,
    DurationIcon,
  },

  mounted() {
    this.$store.dispatch('playlist/getPlaylist', this.currentUsersLikedTracks[0].id || '37i9dQZF1EQpVaHRDcozEz', { root: true }).then(() => {
      this.$store.commit('setIsLoading', false, { root: true });
    });
  },
};
</script>
