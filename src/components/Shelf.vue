<template>
  <div
  class="w-full"
  v-if="data !== null"
  >
      <div class="flex flex-row justify-between mb-4 gap-3">

        <div class="truncate">
          <p
            class="text-white text-2xl hover:underline cursor-pointer font-bold tracking-tighter mr-2 truncate"
            v-text="title"
          />

          <p
            class="text-normalColor text-sm font-normal truncate"
            v-if="subTitle != ''"
            v-text="subTitle"
          />
        </div>

        <router-link
          class="text-normalColor text-[12px] hover:underline cursor-pointer font-bold tracking-widest pt-4 overflow-clip whitespace-nowrap"
          tag="a"
          v-if="link !== ''"
          :to="link !== '#' ? link : ''"
        >
          HEPSİNİ GÖR
        </router-link>
      </div>

      <div
        class="relative grid grid-cols-180 gap-6"
        :class="{
          'auto-rows-sifir grid-rows-1 overflow-y-hidden' : row <= 1,
          'auto-rows-auto' : row > 1
        }"
      >
        <Item
          v-for="playlistInfo in data"
          :class="row <= 1 && 'seekChilds lg:showChilds'"
          :type="type"
          :playlistInfo="playlistInfo.album || playlistInfo"
          :key="playlistInfo.id"
        />
      </div>
  </div>
</template>

<script>
import Item from '@/components/shelf/Item.vue';

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

    type: {
      type: String,
      default: 'playlist',
    },

    row: {
      type: Number,
      default: 1,
    },

    link: {
      type: String,
      default: '#',
    },

    data: {
      type: [Object, Array],
      required: true,
    },
  },

  components: {
    Item,
  },
};
</script>

<style scoped>
  .seekChilds:nth-child(4),
  .seekChilds:nth-child(5),
  .seekChilds:nth-child(6) {
    display: none;
  }

</style>
