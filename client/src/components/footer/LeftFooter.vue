<template>
<div class="flex flex-row items-center min-w-[180px] w-auto">

  <div class="w-[56px] h-[56px] group shadow-lg border-0 block m-0 z-0 flex-shrink-0 relative">

    <div class="transition-all top-1 right-1 absolute hidden group-hover:block ">

      <ArrowIcon class="transition-all -rotate-90 text-white p-1 rounded-full bg-black bg-opacity-50 hover:bg-opacity-100 hover:scale-110"/>

    </div>

    <img src="https://i.scdn.co/image/ab67616d000048519683e5d7361bb80bfb00f46d" alt="music img"/>

  </div>

  <div class="pl-3 truncate">

    <div class="text-sm break-all font-normal tracking-tighter text-white cursor-pointer hover:underline whitespace-nowrap truncate">
      Düşler Sokağı
    </div>

    <div class="text-2xs font-normal tracking-tighter text-white opacity-70 cursor-pointer hover:underline whitespace-nowrap truncate">
      Feridun Düzağaç
    </div>

  </div>

  <div class="text-spotifyGreen pl-5 flex flex-row gap-2">

    <HeartIcon class="cursor-pointer" :height="16" :width="16" />
    <MiniScreen class="text-normalColor hover:text-white cursor-pointer" :height="16" :width="16" />

  </div>
</div>
</template>

<script>
import HeartIcon from '@/components/icons/HeartIcon.vue';
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
import MiniScreen from '@/components/icons/MiniScreen.vue';

export default {
  components: {
    HeartIcon,
    ArrowIcon,
    MiniScreen,
  },
};
</script>
