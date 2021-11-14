<template>
  <table class="h-full w-full mt-6 text-white px-4" v-if="playlistData !== null">
    <thead>
      <tr class="text-[12px] tracking-tighter border-b border-gray-500 opacity-60 w-full">
        <td class="py-1 flex items-center justify-end font-normal text-[16px]">
          <div>#</div>
        </td>

        <td class="text-left pl-3 font-normal tracking-widest">
          BAŞLIK
        </td>

        <td class="hidden md:table-cell text-left font-normal truncate tracking-widest">
          ALBÜM
        </td>

        <td class="hidden lg:table-cell whitespace-nowrap truncate font-normal pr-10 text-left tracking-widest">
          TARİHİNDE EKLENDİ
        </td>

        <td class="flex flex-row justify-center items-center">
          <DurationIcon :width="16" :height="16"/>
        </td>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td class="h-4"></td>
      </tr>

      <table-item
        type="playlist"
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
import DurationIcon from '@/components/icons/DurationIcon.vue';
import TableItem from '@/components/TableItem.vue';

export default {
  components: {
    DurationIcon,
    // eslint-disable-next-line vue/no-unused-components
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
};
</script>
