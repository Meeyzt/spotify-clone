<template>
  <div class="text-white">
    <div class="font-bold text-2xl leading-7 normal-case tracking-tighter">
        En çok dinlediğin türler
    </div>
  <div class="flex flex-col relative">
      <div class="py-2 relative">
        <div class="overflow-auto">
          <div class="transition -right-3 absolute z-10 h-full flex flex-col justify-center">
              <div class="rounded-full bg-white shadow text-black w-10 h-10 z-10 flex justify-center items-center">
                  <ArrowIcon/>
              </div>
          </div>
          <div class="gap-6 flex flex-rows overflow-hidden w-[calc(400px*6)]">
            <SliderItem  class="w-full text-[40px] bg-nicePurple text-white" imgSize="big" title="Rock" source="https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730"/>
            <SliderItem  class="bg-black text-white w-full" title="Metal" source="https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730"/>
            <SliderItem  class="bg-blue-300 text-white w-full " title="Pop" source="https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730"/>
            <SliderItem  class="w-full bg-red-300 text-white" title="Rock" source="https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730"/>
            <SliderItem  class="w-full bg-purple-500 text-white" title="Metal" source="https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730"/>
            <SliderItem  class="w-full bg-yellow-300 text-black" title="Pop" source="https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730"/>
          </div>
        </div>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
import SliderItem from './SliderItem.vue';

export default {
  components: {
    SliderItem,
    ArrowIcon,
  },
};
</script>
