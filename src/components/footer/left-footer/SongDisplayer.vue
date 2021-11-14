<template>
  <div
    class="flex flex-row items-center min-w-[180px] max-w-[300px]"
    v-if="track"
  >

    <div class="w-[56px] h-[56px] group shadow-lg border-0 block m-0 z-0 flex-shrink-0 relative">

      <div class="transition-all top-1 right-1 absolute hidden group-hover:block">

        <ArrowIcon class="transition-all -rotate-90 text-white p-1 rounded-full bg-black bg-opacity-50 hover:bg-opacity-100 hover:scale-110"/>

      </div>

      <img :src="track.album.images[0].url" alt="music img"/>

    </div>

    <div class="pl-4 truncate">

      <div class="text-s break-all font-normal text-white cursor-pointer hover:underline truncate">
        {{ track.name }}
      </div>

      <div class="text-xs font-normal tracking-tighter text-white opacity-60 cursor-pointer hover:underline whitespace-nowrap truncate">
        {{ track.artists[0].name }}
      </div>

    </div>

    <div class="text-spotifyGreen pl-5 flex flex-row gap-3">

      <component
        :is="track.liked ? 'FilledHeartIcon' : 'HeartIcon'"
        :class="track.liked ? 'text-spotifyGreen':'text-white'"
        :width="16"
        :height="16"
      />

      <MiniScreen class="text-normalColor hover:text-white cursor-pointer" :height="16" :width="16" />

    </div>
  </div>
</template>

<script>
import HeartIcon from '@/components/icons/HeartIcon.vue';
import FilledHeartIcon from '@/components/icons/FilledHeartIcon.vue';
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
import MiniScreen from '@/components/icons/MiniScreen.vue';

  export default {
    components: {
      HeartIcon,
      ArrowIcon,
      MiniScreen,
      FilledHeartIcon,
    },

    props: {
      track: {
        type: Object,
        required: true,
      },
    },
  };
</script>
