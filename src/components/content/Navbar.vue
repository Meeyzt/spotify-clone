<template>
  <div class="flex flex-row justify-between pl-8 pr-7 pt-3.5">
   <div class="flex flex-row">
      <div class="text-white bg-black opacity-50 rounded-full cursor-pointer p-1">
        <ArrowIcon class="rotate-180"/>
      </div>
      <div class="bg-black opacity-50 rounded-full cursor-pointer p-1 ml-4">
        <ArrowIcon/>
    </div>
   </div>
    <div class="float-right flex flex-row bg-black rounded-full items-center justify-center
    opacity-90 text-white text-s px-0.5 cursor-pointer hover:opacity-70 mx-1">
      <!-- <img class="rounded-full bg-clip-content" src="https://i.scdn.co/image/ab6775700000ee850d8934d06959380ede197038" alt="userPhoto"/> -->
      <div class="rounded-full bg-clip-content bg-center bg-cover bg-no-repeat bgimg
      h-7 w-7"/>
      <div class="px-2 font-semibold">Meeyzt</div>
      <DownArrow class="pr-2"/>
    </div>
  </div>
</template>

<script>
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
import DownArrow from '@/components/icons/DownArrow.vue';

export default {
  components: {
    ArrowIcon,
    DownArrow,
  },

};
</script>
