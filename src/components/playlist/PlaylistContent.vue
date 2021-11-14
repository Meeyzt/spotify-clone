<template>
  <table class="w-full h-full mt-6 text-white px-4" v-if="playlistData !== null">
    <thead>

      <tr class="text-[12px] tracking-tighter border-b border-gray-500 opacity-60">

        <th class="py-1 flex items-center justify-end font-normal text-[16px]">
          <div>
            #
          </div>
        </th>

        <th class="text-left pl-3 font-normal tracking-widest">
          BAŞLIK
        </th>

        <th class="hidden md:table-cell text-left font-normal truncate tracking-widest">
          ALBÜM
        </th>

        <th class="hidden lg:table-cell whitespace-nowrap truncate font-normal pr-10 text-left tracking-widest">
          TARİH EKLENDİ
        </th>

        <th class="flex flex-row justify-center items-center">
          <DurationIcon :width="16" :height="16"/>
        </th>

      </tr>

    </thead>
    <tbody>
      <tr>
        <td class="pt-4"></td>
      </tr>

      <table-item
        :type="type"
        :key="index"
        :index="index"
        :track="playlist.track"
        :added_at="playlist.added_at"
        :liked="playlist.liked"
        v-for="(playlist, index) in playlistData"
      />

      <tr>
        <td class="pb-10"/>
      </tr>
    </tbody>
  </table>
</template>

<script>
import dayjs from 'dayjs';
import DurationIcon from '@/components/icons/DurationIcon.vue';
import TableItem from '@/components/TableItem.vue';

const relativeTime = require('dayjs/plugin/relativeTime');
require('dayjs/locale/tr');

dayjs.extend(relativeTime);
dayjs.locale('tr');

export default {
  components: {
    DurationIcon,
    TableItem,
  },

  props: {
    playlistData: {
      type: Array,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },
  },

  methods: {
    addTo(date) {
      return dayjs().to(date);
    },

    getSeconds(miliseconds) {
      const min = Math.floor((miliseconds / 1000 / 60));
      const sec = Math.floor((miliseconds / 1000) % 60) < 10
        ? `0${Math.floor((miliseconds / 1000) % 60)}`
        : Math.floor((miliseconds / 1000) % 60);

      return `${min}:${sec}`;
    },
  },
};
</script>
