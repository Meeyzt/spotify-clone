<template>
  <div class="group w-full h-auto bg-minimalColor cursor-pointer hover:bg-hoverHeadbar rounded-md flex-1 isolate p-4 relative">
    <div class="h-full">
      <div class="mb-4 relative">
        <div class="w-full shadow-lg pb-[100%] relative">
          <img class="w-full h-full left-0 absolute top-0 block object-cover object-center" :src="playlistInfo.source" alt="dsad"/>
        </div>
        <div v-if="type==='playlist'" class="transition right-2 bottom-2 rounded-full absolute z-2 opacity-0 group-hover:opacity-100 hover:transform group-hover:-translate-y-2">
            <div class="transition bg-spotifyGreen w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
              <PlayIcon class="text-white"/>
            </div>
        </div>
    </div>
    <div class="min-h-[62px] relative items-start justify-center flex flex-col max-w-full">
      <div v-text="playlistInfo.text" class="text-white align-middle inline-block max-w-full text-base font-bold truncated whitespace-nowrap"/>
      <div v-text="playlistInfo.subText" class="text-normalColor text-s font-normal truncated whitespace-nowrap mt-1"/>
    </div>
    </div>
  </div>
</template>

<script>
import PlayIcon from '@/components/icons/PlayIcon.vue';

export default {
  components: {
    PlayIcon,
  },
  props: {
    type: {
      default: 'playlist',
      type: String,
    },
    playlistInfo: {
      required: true,
      type: Object,
    },
  },
};
</script>
