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

      <PlayButton :isPlaying="true" color="white" :height="16" :width="16"/>

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

    <PlayerBar where="mid" :songPlayingTime="songPlayingTime" :songDuration="currentTrackDuration" :duration="duration"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';

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
    duration: 0,
    songPlayingTime: '0:00',
    currentPlayingSeconds: 0,
    currentPlayingMinutes: 0,
    currentTime: 0,
    intervalId: '',
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

    currentTrackPlayer() {
      if (!this.currentUsersCurrentPlayingTrack) {
        this.duration = 0;
        this.songPlayingTime = '0:00';
      }
    },

    currentSongTime() {
      if (this.currentusersCurrentPlayingSong) {
        clearInterval(this.intervalId);
        this.clearSongDatas();
      }

      this.currentPlayingSeconds += 1;
      this.currentTime += 1;

      if (this.currentPlayingSeconds === 60) {
        this.currentPlayingMinutes += 1;
        this.currentPlayingSeconds = 0;
      }

      if (this.currentPlayingSeconds < 10) {
        this.songPlayingTime = `${this.currentPlayingMinutes}:0${this.currentPlayingSeconds}`;
      } else {
        this.songPlayingTime = `${this.currentPlayingMinutes}:${this.currentPlayingSeconds}`;
      }

      const currentTrackSeconds = Math.floor(this.currentUsersCurrentPlayingTrack.duration_ms / 1000);

      this.duration = Math.floor((this.currentTime / currentTrackSeconds) * 100);

      if (this.currentTime === currentTrackSeconds) {
        this.clearSongDatas();
      }
    },

    async clearSongDatas() {
      this.duration = 0;
      this.songPlayingTime = '0:00';
      this.currentPlayingSeconds = 0;
      this.currentPlayingMinutes = 0;
      this.currentTime = 0;
      await this.$store.dispatch('currentUser/getCurrentUsersCurrentPlayingTrack');
    },
  },

  async created() {
    await this.$store.dispatch('currentUser/getCurrentUsersCurrentPlayingTrack');
    if (this.currentUsersCurrentPlayingTrack) {
      this.intervalId = setInterval(this.currentSongTime, 1000);
    }
  },

  beforeDestroy() {
    clearInterval(this.intervalId);
  },

  computed: {
    ...mapState('currentUser', [
      'currentUsersCurrentPlayingTrack',
    ]),

    currentTrackDuration() {
      if (this.currentUsersCurrentPlayingTrack) {
        const seconds = this.currentUsersCurrentPlayingTrack.duration_ms / 1000;
        const minutes = Math.floor(seconds / 60);
        let remainSeconds = Math.floor(seconds - (minutes * 60));

        if (remainSeconds < 10) {
          remainSeconds = `0${remainSeconds}`;
        }

        this.currentTrackPlayer();

        return `${minutes}:${remainSeconds}`;
      }
      return '00:00';
    },
  },
};
</script>
