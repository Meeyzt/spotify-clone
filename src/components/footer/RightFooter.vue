<template>
  <div class="flex flex-row items-center text-white gap-3 w-auto">

      <router-link
        to="/queue"
      >

        <QueueIcon class="footerItem ml-0"/>

      </router-link>

      <DesktopIcon class="footerItem"/>

      <SoundIcon class="footerItem"/>

      <div class="w-[93px] flex flex-row justify-center items-center h-[4px]">
        <PlayerBar where="right"/>
      </div>

      <FullscreenIcon class="footerItem"/>

    </div>
</template>

<script>
import DesktopIcon from '@/components/icons/DesktopIcon.vue';
import FullscreenIcon from '@/components/icons/FullScreenIcon.vue';
import QueueIcon from '@/components/icons/QueueIcon.vue';
import SoundIcon from '@/components/icons/SoundIcon.vue';
import PlayerBar from './middle-footer/PlayerBar.vue';

export default {
  components: {
    QueueIcon,
    DesktopIcon,
    SoundIcon,
    FullscreenIcon,
    PlayerBar,
  },
};
</script>
