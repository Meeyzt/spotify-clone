<template>
  <div class="flex flex-col pt-3 w-full" v-if="genreData">

    <router-link
      :to="link"
      class="text-white text-2xl font-bold"
    >
      {{ linkText }}
    </router-link>
    <div class="grid gap-6 grid-rows-bir auto-rows-auto grid-cols-180 w-full" >

      <div v-for="genre in genreData" :key="genre" >
        <SliderItem
          class="w-full bg-podcastGreen text-2xl text-white uppercase"
          :imgSize="imgSize"
          :title="genre"
          :source="imgSource"
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

  props: {
    genreData: {
      required: true,
      type: Array,
    },

    link: {
      required: true,
      type: String,
    },

    linkText: {
      required: true,
      type: String,
    },

    imgSize: {
      required: true,
      type: String,
    },

    imgSource: {
      required: true,
      type: String,
    },
  },
};
</script>
