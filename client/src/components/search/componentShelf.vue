<template>
  <div class="flex flex-col pt-3 w-full">

    <div class="text-white text-2xl font-bold">
      Hepsine göz at
    </div>
    <div class="grid gap-6 grid-rows-bir auto-rows-auto grid-cols-180 w-full" >

      <div v-for="index in 30" :key="index" >
        <SliderItem
          class="w-full bg-podcastGreen text-2xl text-white"
          imgSize="small"
          title="Podcast'ler"
          source="https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5"
        />
      </div>

    </div>
  </div>
</template>

<script>
import SliderItem from './SliderItem.vue';

export default {
  components: {
    SliderItem,
  },
};
</script>
