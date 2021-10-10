<template>
  <div class="pt-10">
      <div>
        <a class="text-white text-2xl hover:underline cursor-pointer font-bold
        tracking-tighter float-left">
          {{ title }}
        </a>
        <a class="text-white text-xs hover:underline cursor-pointer font-bold
        tracking-widest uppercase float-right pt-4">
          hepsini gör
        </a>
      </div>
      <div class="grid grid-cols-6 w-full pt-4 gap-6">
          <Item v-for="index in 6" :key="index"/>
      </div>
  </div>
</template>

<script>
import Item from '@/components/content/shelf/Item.vue';

export default {
  props: ['title'],
  components: {
    Item,
  },
};
</script>
