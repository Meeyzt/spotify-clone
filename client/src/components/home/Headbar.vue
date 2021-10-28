<template>
  <div class="group cursor-pointer w-full bg-headbarColor flex flex-row gap-3 items-center rounded-md hover:bg-hoverHeadbar justify-between">

    <img
      class="object-cover w-20 h-20 rounded-l"
      :src="data.images[0].url"
      alt="image"
    />

    <div class="text-white text-base font-semibold whitespace-normal pl-1 truncate flex-1">
      {{ data.name }}
    </div>

    <div class="transition mr-2 bg-spotifyGreen w-10 h-10 shadow-2xl rounded-full flex items-center mr-2 justify-center invisible bg-opacity-0 group-hover:bg-opacity-100 group-hover:visible text-white hover:scale-110">
      <PlayIcon />
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
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
