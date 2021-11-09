<template>
  <div
  class="w-full"
  v-if="data !== null"
  >
      <div class="flex flex-row justify-between mb-4 gap-3">

        <div class="flex flex-col items-start truncate">
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

        <a class="text-normalColor text-[12px] hover:underline cursor-pointer font-bold tracking-widest pt-4 overflow-clip whitespace-nowrap">
          HEPSİNİ GÖR
        </a>
      </div>

      <div
        v-if="type === 'artist' || type === 'albums'"
        class="relative grid grid-cols-180 overflow-y-hidden auto-rows-auto gap-6"
      >
        <Item
          class="seekChilds lg:showChilds"
          :type="type" v-for="playlistInfo in data"
          :playlistInfo="playlistInfo"
          :key="playlistInfo.id"
        />
      </div>

      <div
        v-else
        class="relative grid-rows-bir grid grid-cols-180 overflow-y-hidden auto-rows-sifir gap-6"
      >
        <Item
          class="seekChilds lg:showChilds"
          :type="type"
          v-for="playlistInfo in data"
          :playlistInfo="playlistInfo"
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
