<template>
  <div class="pt-11 w-full">
      <div class="flex flex-row justify-between mb-4">
        <div class="flex flex-col items-start">
          <p class="text-white text-2xl hover:underline cursor-pointer font-bold tracking-tighter mr-2 truncate" v-text="title"/>
          <p class="text-normalColor text-sm font-normal" v-if="subTitle != ''" v-text="subTitle"/>
        </div>
        <a class="text-normalColor text-xs hover:underline cursor-pointer font-bold tracking-widest uppercase pt-4 overflow-clip whitespace-nowrap">
          hepsini gör
        </a>
      </div>
      <div class="relative grid-rows-bir grid grid-cols-180 overflow-y-hidden auto-rows-sifir gap-6">
          <Item class="odd:hidden xsmall:odd:block" v-for="index in 5" :key="index"/>
      </div>
  </div>
</template>

<script>
import Item from '@/components/content/shelf/Item.vue';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      default: '',
    },
  },
  components: {
    Item,
  },
};
</script>
