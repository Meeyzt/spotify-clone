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
            <SliderItem v-for="category in $store.state.categories" :key="category.id"  class="w-full text-[40px] bg-nicePurple text-white" imgSize="big" :title="category.name" :source="category.icons[0].url"/>
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
