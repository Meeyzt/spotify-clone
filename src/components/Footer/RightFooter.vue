<template>
  <div class="flex flex-row items-center text-white">
      <QueueIcon class="footerItem ml-0" :height="18" :width="18"/>
      <DesktopIcon class="footerItem" :height="18" :width="18"/>
      <SoundIcon class="footerItem" :height="18" :width="18" />
      <div class="group h-full">
        <div class="cursor-pointer flex flex-row w-[93px] h-[4px] bg-gray-800 rounded-full ml-1.5">
        <div class="w-[78px] bg-gray-500 group-hover:bg-spotifyGreen rounded-full"/>
      </div>
      </div>
      <FullscreenIcon :width="18" :height="18" class="footerItem"/>
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
