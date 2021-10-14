<template>
  <div class="bg-contentColor flex flex-row flex-shrink-0 justify-between py-3.5 w-full z-10">
   <div class="flex flex-row pl-4 lg:pl-8">
      <div class="text-white bg-arrowBgColor bg-opacity-50 rounded-full cursor-pointer p-1 ">
        <ArrowIcon class="rotate-180"/>
      </div>
      <div class="hidden lg:block opacity-50 bg-arrowBgColor text-white bg-opacity-50 rounded-full cursor-pointer p-1 ml-4">
        <ArrowIcon/>
    </div>
   </div>
    <div class="flex flex-row bg-black rounded-full items-center justify-center text-white text-s px-0.5 cursor-pointer mx-4 hover:bg-hoverHeadbar">
      <div class="rounded-full bg-clip-content bg-center bg-cover bg-no-repeat bgimg h-7 w-7"/>
      <div class="hidden lg:block px-2 my-auto font-semibold">Meeyzt</div>
      <DownArrow class="hidden lg:block pr-2 pb-0.5"/>
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
