<template>
     <div class=" w-full">
      <div class="flex flex-row justify-between mb-4">
        <a class="text-white text-2xl hover:underline cursor-pointer truncate font-bold tracking-tighter mr-2">
          Yakınlarda çalınanlar
        </a>
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
import Item from '@/components/content/headbar/Item.vue';

export default {
  components: {
    Item,
  },
};
</script>
