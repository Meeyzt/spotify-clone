<template>
  <div class="flex flex-row gap-2 w-full items-center h-4 justify-center">

    <div
      v-if="where==='mid'"
      class="mr-2 w-4 text-[10px] font-bold text-normalColor pt-1.5 cursor-default"
    >
      {{songPlayingTime}}
    </div>

    <div class="h-full w-full flex items-center">

      <div class="group bg-player rounded-full w-full flex flex-row h-[4px] cursor-pointer items-center">

        <template v-if="!muted">
          <div
            :style="{width: duration+'%'}"
            class="bg-normalColor rounded-full group-hover:bg-spotifyGreen h-full"
          />
          <div class="hidden group-hover:flex bg-white rounded-full w-3 h-3"/>
        </template>

      </div>

    </div>

    <div
      v-if="where==='mid'"
      class="ml-2 w-4 text-[10px] font-bold text-normalColor pt-1.5 cursor-default"
    >
      {{songDuration}}
    </div>

  </div>
</template>

<script>
export default {
  props: {
    where: {
      type: String,
      required: true,
    },

    muted: {
      type: Boolean,
      default: false,
    },

    duration: {
      type: Number,
      default: 50,
    },

    songDuration: {
      type: String,
      default: '4:27',
    },

    songPlayingTime: {
      type: String,
      default: '02:13',
    },
  },
};
</script>
