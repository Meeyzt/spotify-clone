<template>
  <div class="flex flex-row items-center text-white gap-2 w-auto">
      <QueueIcon class="footerItem ml-0"/>
      <DesktopIcon class="footerItem"/>
      <SoundIcon class="footerItem"/>
      <div class="group h-full">
        <div class="cursor-pointer flex flex-row w-[93px] h-[4px] bg-player rounded-full ml-1.5">
        <div class="w-[50px] bg-normalColor group-hover:bg-spotifyGreen rounded-full"/>
      </div>
      </div>
      <FullscreenIcon class="footerItem"/>
    </div>
</template>

<script>
import DesktopIcon from '@/components/icons/DesktopIcon.vue';
import FullscreenIcon from '@/components/icons/FullScreenIcon.vue';
import QueueIcon from '@/components/icons/QueueIcon.vue';
import SoundIcon from '@/components/icons/SoundIcon.vue';

export default {
  components: {
    QueueIcon,
    DesktopIcon,
    SoundIcon,
    FullscreenIcon,
  },
};
</script>
