<template>
  <div class="flex flex-row items-center text-white gap-3 w-auto">
    <button
      @click="setLyrics"
      :class="lyrics ? 'text-spotifyGreen' : 'text-normalColor hover:text-white relative'"
    >
      <SongLyricsIcon :width="16" :height="16" class="ml-0"/>
      <div v-if="lyrics" class="bg-spotifyGreen w-1 h-1 rounded-full absolute translate-x-full mt-0.5"/>
    </button>

    <router-link
      class="text-normalColor hover:text-white relative"
      to="/queue"
      active-class="!text-spotifyGreen"
    >
      <QueueIcon :width="16" :height="16" class="ml-0"/>
      <div v-if="$route.name === 'queue'" class="bg-spotifyGreen w-1 h-1 rounded-full absolute translate-x-full mt-0.5"/>
    </router-link>

    <button
      @click="setDesktop"
      :class="desktop ? 'text-spotifyGreen relative' : 'text-normalColor hover:text-white'"
    >
      <ActiveDesktopIcon v-if="desktop" :width="16" :height="16" />
      <DesktopIcon v-else :width="16" :height="16" />
      <div v-if="desktop" class="bg-spotifyGreen w-1 h-1 rounded-full absolute translate-x-full mt-0.5"/>
    </button>

    <button
      @click="setMuteSound"
      class="text-normalColor hover:text-white"
    >
      <MuteSoundIcon v-if="muteSound" :width="16" :height="16" />
      <HalfSoundIcon v-else :width="16" :height="16" />
    </button>

    <div class="w-[93px] flex flex-row justify-center items-center h-[4px]">
      <PlayerBar :duration="50" :muted="muteSound" where="right"/>
    </div>

    <FullscreenIcon class="footerItem"/>

    </div>
</template>

<script>
import DesktopIcon from '@/components/icons/DesktopIcon.vue';
import ActiveDesktopIcon from '@/components/icons/ActiveDesktopIcon.vue';
import FullscreenIcon from '@/components/icons/FullScreenIcon.vue';
import QueueIcon from '@/components/icons/QueueIcon.vue';
import HalfSoundIcon from '@/components/icons/HalfSoundIcon.vue';
import PlayerBar from './middle-footer/PlayerBar.vue';
import MuteSoundIcon from '@/components/icons/MuteSoundIcon.vue';
import SongLyricsIcon from '@/components/icons/SongLyricsIcon.vue';

export default {
  components: {
    QueueIcon,
    DesktopIcon,
    HalfSoundIcon,
    MuteSoundIcon,
    FullscreenIcon,
    PlayerBar,
    ActiveDesktopIcon,
    SongLyricsIcon,
  },

  data: () => ({
    desktop: false,
    muteSound: false,
    lyrics: false,
  }),

  methods: {
    setDesktop() {
      this.desktop = !this.desktop;
    },

    setMuteSound() {
      this.muteSound = !this.muteSound;
    },

    setLyrics() {
      this.lyrics = !this.lyrics;
    },
  },
};
</script>
