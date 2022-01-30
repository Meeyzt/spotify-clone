<template>
  <div class="flex flex-col justify-center items-center px-4 w-1/2 gap-3">

    <div class="flex flex-row gap-5 items-center">

      <button
        @click="setShuffle"
        class="relative h-8"
        :class="shuffle ? 'text-spotifyGreen' : 'text-normalColor hover:text-white'"
      >
        <ShuffleIcon :width="16" :height="16"/>
        <div v-if="shuffle" class="bg-spotifyGreen w-1 h-1 rounded-full absolute translate-x-full"/>
      </button>

      <NavigationIcon class="footerItem" />

      <PlayButton color="white" :height="16" :width="16"/>

      <NavigationIcon class="footerItem rotate-180" />

      <button
        @click="setRepeat"
        class="relative h-8"
        :class="repeat > 0 ? 'text-spotifyGreen' : 'text-normalColor hover:text-white'"
      >
        <RepeatIcon v-if="repeat < 2" :width="16" :height="16"/>
        <LockedRepeatIcon v-if="repeat > 1" :width="16" :height="16"/>
        <div v-if="repeat > 0" class="bg-spotifyGreen w-1 h-1 rounded-full absolute translate-x-full"/>
      </button>

    </div>

    <PlayerBar :duration="56" where="mid"/>
  </div>
</template>

<script>
import NavigationIcon from '@/components/icons/NavigationIcon.vue';
import RepeatIcon from '@/components/icons/RepeatIcon.vue';
import LockedRepeatIcon from '@/components/icons/LockedRepeatIcon.vue';
import ShuffleIcon from '@/components/icons/ShuffleIcon.vue';
import PlayerBar from '@/components/footer/middle-footer/PlayerBar.vue';
import PlayButton from '../PlayButton.vue';

export default {
  components: {
    ShuffleIcon,
    NavigationIcon,
    RepeatIcon,
    LockedRepeatIcon,
    PlayerBar,
    PlayButton,
  },

  data: () => ({
    shuffle: false,
    repeat: 0,
  }),

  methods: {
    setShuffle() {
      this.shuffle = !this.shuffle;
    },

    setRepeat() {
      switch (this.repeat) {
        case 2:
          this.repeat = 0;
          break;

        default:
          this.repeat += 1;
          break;
      }
    },
  },
};
</script>
