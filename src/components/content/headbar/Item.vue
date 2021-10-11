<template>
  <div class="group cursor-pointer w-72 bg-headbarColor grid grid-cols-3 items-center
  rounded-md hover:bg-hoverHeadbar justify-start">
        <div class="w-20 h-20 bg-pink-300 rounded-l-md shadow-2xl headerImg bg-center bg-cover"/>
        <div class="text-white text-base font-semibold">Rock mix</div>
        <div class="transition ml-10 bg-spotifyGreen w-10 h-10 rounded-full flex items-center
        justify-center invisible bg-opacity-0 group-hover:bg-opacity-100 group-hover:visible">
        <!-- grouphover -->
        <PlayIcon class="text-black"/>
        </div>
  </div>
</template>

<script>
import PlayIcon from '@/components/icons/PlayIcon.vue';

export default {
  components: {
    PlayIcon,
  },
};
</script>
