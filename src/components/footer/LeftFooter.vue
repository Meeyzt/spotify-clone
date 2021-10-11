<template>
<div class="flex flex-row items-center">
  <div class="musicImg w-14 h-14 cursor-pointer"/>
  <div class="pl-3">
    <div class="text-s font-normal tracking-tighter text-white cursor-pointer hover:underline">
      Düşler Sokağı
    </div>
    <div class="text-2xs font-normal tracking-tighter text-white opacity-70 cursor-pointer hover:underline">
      Feridun Düzağaç
    </div>
  </div>
  <div class="text-spotifyGreen pl-5">
    <HeartIcon :width="18" :height="18"/>
  </div>
</div>
</template>

<script>
import HeartIcon from '@/components/icons/HeartIcon.vue';

export default {
  components: { HeartIcon },
};
</script>
