<template>
  <div class="flex flex-row justify-between px-7 py-3">
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
    opacity-80 text-white text-s px-0.5 cursor-pointer">
      <img class="rounded-full" src="https://picsum.photos/28/28" alt="userPhoto"/>
      <div class="px-2 font-semibold">Meeyzt</div>
      <img class="pr-2" src="@/assets/downArrow.svg" alt="downArrow"/>
    </div>
  </div>
</template>

<script>
export default {

};
</script>
