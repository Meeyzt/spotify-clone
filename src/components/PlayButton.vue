<template>
  <button
    @click="playing = !playing"
    :class="`
    ${ color === 'green' ? 'bg-spotifyGreen p-3' : 'bg-white p-2' }
    transition-all rounded-full flex items-center hover:scale-110 justify-center`"
  >
    <pause-icon v-if="playing" :class="`${ color === 'green' ? 'text-white' : 'text-black' }`" :width="width" :height="height"/>
    <play-icon v-else :class="`${ color === 'green' ? 'text-white' : 'text-black' }`" :width="width" :height="height"/>
  </button>
</template>

<script>
import PlayIcon from '@/components/icons/PlayIcon.vue';
import PauseIcon from '@/components/icons/PauseIcon.vue';

export default {
  props: {
    color: {
      type: String,
      default: 'green',
    },

    width: {
      type: Number,
      default: 16,
    },

    height: {
      type: Number,
      default: 16,
    },

    isPlaying: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    playing: false,
  }),

  created() {
    this.playing = this.isPlaying;
  },

  components: {
    PlayIcon,
    PauseIcon,
  },
};
</script>
