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
      <playlist-header
        v-if="type && playlist"
        :key="playlist.id"
        :name="playlist.name"
        :picture="playlist.images[0].url"
        :author="playlist.owner.display_name"
        :song-count="playlist.tracks.total ? playlist.tracks.total : playlist.tracks.items.length"
        :author-picture="playlistAuthorProfilePic"
        :likeCount="playlist.followers.total"
        :author-link="`/user/${playlist.owner.id}`"
        :type="type"
        :description="playlist.description"
      />

      <div class="shadow-inner bg-contentColor w-full pt-6 px-4 lg:px-7">

        <div class="flex flex-row items-center gap-6">

            <play-button :width="32" :height="32"/>

            <component
              :is="playlist.liked ? 'FilledHeartIcon' : 'HeartIcon'"
              :class="!playlist.liked ? 'opacity-60 hover:opacity-100 text-white':'text-spotifyGreen'"
              :width="32"
              :height="32"
            />

            <div class="text-3xl flex justify-center opacity-60 hover:opacity-100">

              <details-icon/>

            </div>

        </div>

        <playlist-content
          v-if="playlist.tracks.items"
          :key="playlist.id"
          :playlistData="playlist.tracks.items"
          :type="type"
        />

      </div>
    </div>
  </div>
</template>

<script>
  import { average } from 'color.js';

  import PlaylistHeader from '@/components/PlaylistHeader.vue';
  import PlaylistContent from '@/components/playlist/PlaylistContent.vue';
  import FilledHeartIcon from './icons/FilledHeartIcon.vue';
  import DetailsIcon from './icons/DetailsIcon.vue';
  import PlayButton from './PlayButton.vue';
  import HeartIcon from '@/components/icons/HeartIcon.vue';

  export default {
    components: {
      PlaylistHeader,
      PlaylistContent,
      FilledHeartIcon,
      DetailsIcon,
      PlayButton,
      HeartIcon,
    },

    props: {
      playlist: {
        type: Object,
        required: true,
      },

      playlistAuthorProfilePic: {
        type: String,
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
