<template>
  <div class="flex flex-row justify-between px-8 pt-3.5">
   <div class="flex flex-row">
      <div class="bg-black opacity-50 rounded-full
      cursor-pointer p-1">
      <img class="transform rotate-180" src="@/assets/arrow.svg" alt="arrow"/>
    </div>
    <div class="bg-black opacity-50 rounded-full
    cursor-pointer p-1 ml-4">
      <img src="@/assets/arrow.svg" alt="arrow"/>
    </div>
   </div>
    <div class="float-right flex flex-row bg-black rounded-full items-center justify-center
    opacity-90 text-white text-s px-0.5 cursor-pointer hover:opacity-70 mx-1">
      <!-- <img class="rounded-full bg-clip-content" src="https://i.scdn.co/image/ab6775700000ee850d8934d06959380ede197038" alt="userPhoto"/> -->
      <div class="rounded-full bg-clip-content bg-center bg-cover bg-no-repeat bgimg
      h-7 w-7"/>
      <div class="px-2 font-semibold">Meeyzt</div>
      <img class="pr-2" src="@/assets/downArrow.svg" alt="downArrow"/>
    </div>
  </div>
</template>

<script>
export default {

};
</script>
