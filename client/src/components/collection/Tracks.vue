<template>
  <div
    class="w-full h-full text-white flex flex-col gap-6"
    :class="{
      'bg-gray-300': !pictureColor,
    }"
    :style="{
      backgroundColor: pictureColor,
    }"
  >

    <div class="h-full w-full pb-14 bg-gradient-to-b to-transparent from-[rgba(0,0,0,0.30)] overflow-auto">
      <TrackHeader
        v-if="type !== null"
        :playlistName="playlistName"
        :playlistPic="playlistPic"
        :playlistAuthor="playlistAuthor"
        :playlistSongCount="playlistSongCount"
        :playlistAuthorProfilePic="playlistAuthorProfilePic"
        :type="type"
        :playlistLikeCount="playlistLikeCount"
      />
      <div class="shadow-inner bg-contentColor w-full pt-6 px-4 lg:px-7">

        <div class="w-14 h-14 rounded-full bg-spotifyGreen flex flex-row justify-center items-center text-white transition-all hover:scale-110">
          <PlayIcon :width="28" :height="28"/>
        </div>

        <TrackContent v-if="playlistData.length > 0" :playlistData="playlistData"/>

      </div>
    </div>
  </div>
</template>

<script>
import { average } from 'color.js';
import PlayIcon from '@/components/icons/PlayIcon.vue';
import TrackHeader from '@/components/collection/tracks/TrackHeader.vue';
import TrackContent from '@/components/collection/tracks/TrackContent.vue';

export default {
  components: {
    PlayIcon,
    TrackHeader,
    TrackContent,
  },

  props: {
    playlistName: {
      type: String,
      required: true,
    },

    playlistPic: {
      type: String,
      required: true,
    },

    playlistAuthor: {
      type: String,
      required: true,
    },

    playlistSongCount: {
      type: Number,
      required: true,
    },

    playlistAuthorProfilePic: {
      type: String,
      default: '',
    },

    playlistData: {
      type: Array,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },
    playlistLikeCount: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      pictureColor: undefined,
    };
  },

  methods: {
    setAverageColor() {
      average(this.playlistPic, { format: 'hex' })
        .then((color) => {
          this.pictureColor = color;
        });
    },
  },

  mounted() {
    this.setAverageColor();
  },

};
</script>
