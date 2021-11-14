<template>
  <div class="text-white bg-contentColor overflow-y-auto h-full">

      <playlist-header
        v-if="album"
        :key="album.id"
        :name="album.name"
        :picture="album.images[0].url"
        :author="album.artists[0].name"
        :song-count="album.total_tracks"
        :author-picture="album.images[2].url"
        :likeCount="album.release_date"
        author-link=""
        type="album"
        description=""
      />

     <div class="w-full px-4 pt-10">
      <table
        class="w-full"
        v-if="album"
      >
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

            <th class="flex flex-row justify-end items-end">
              <DurationIcon :width="16" :height="16"/>
            </th>

          </tr>
        </thead>

        <tbody>
          <tr class="h-3"/>

          <table-item
            class="w-full"
            type="album"
            :key="index+'album'"
            :index="index"
            :track="track"
            :added_at="track.added_at"
            :liked="track.liked"
            v-for="(track, index) in album.tracks.items"
          />
        </tbody>

      </table>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex';

import PlaylistHeader from '../components/PlaylistHeader.vue';
import TableItem from '../components/TableItem.vue';
import DurationIcon from '../components/icons/DurationIcon.vue';

export default {
  computed: {
    ...mapState([
      'album',
    ]),
  },

  components: {
    PlaylistHeader,
    TableItem,
    DurationIcon,
  },

  created() {
    this.$store.dispatch('getAlbum', this.$route.params.id);
  },

};
</script>
