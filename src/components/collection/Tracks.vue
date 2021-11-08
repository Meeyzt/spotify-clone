<template>
  <div
    class="w-full h-full text-white flex flex-col gap-6"
    :class="{
      'bg-gray-300': !pictureColor,
    }"
    :style="{
      backgroundColor: pictureColor,
    }"
    :key="playlist.id"
    v-if="playlist"
  >

    <div class="h-full w-full pb-14 bg-gradient-to-b to-transparent from-[rgba(0,0,0,0.30)] overflow-auto">
      <TrackHeader
        v-if="type && playlist"
        :key="playlist.id"
        :playlistName="playlist.name"
        :playlistPic="playlist.images[0].url"
        :playlistAuthor="playlist.owner.display_name"
        :playlistSongCount="playlist.tracks.total"
        :playlistAuthorProfilePic="playlistAuthorProfilePic"
        :type="type"
        :playlistLikeCount="playlist.followers.total"
        :playlistDescription="playlist.description"
      />
      <div class="shadow-inner bg-contentColor w-full pt-6 px-4 lg:px-7">

      <div class="flex flex-row items-center gap-6">
          <div class="w-14 h-14 rounded-full bg-spotifyGreen flex flex-row justify-center items-center text-white transition-all hover:scale-110">
          <PlayIcon :width="28" :height="28"/>
        </div>
        <div class="text-spotifyGreen">
          <filled-heart-icon :height="32" :width="32"/>
        </div>
        <div class="text-3xl flex justify-center opacity-60 hover:opacity-100">
          <details-icon/>
        </div>
      </div>

        <TrackContent v-if="playlist.tracks.items" :key="playlist.id" :playlistData="playlist.tracks.items" :type="type"/>

      </div>
    </div>
  </div>
</template>

<script>
import { average } from 'color.js';
import PlayIcon from '@/components/icons/PlayIcon.vue';
import TrackHeader from '@/components/collection/tracks/TrackHeader.vue';
import TrackContent from '@/components/collection/tracks/TrackContent.vue';
import FilledHeartIcon from '../icons/FilledHeartIcon.vue';
import DetailsIcon from '../icons/DetailsIcon.vue';

export default {
  components: {
    PlayIcon,
    TrackHeader,
    TrackContent,
    FilledHeartIcon,
    DetailsIcon,
  },

  props: {
    playlist: {
      type: Object,
      required: true,
    },

    playlistAuthorProfilePic: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      pictureColor: undefined,
    };
  },

  methods: {
    setAverageColor(initialColor) {
      average(initialColor, { format: 'hex' })
        .then((color) => {
          this.pictureColor = color;
        });
    },
  },

  created() {
    this.setAverageColor(this.playlist.images[0].url);
  },

};
</script>
