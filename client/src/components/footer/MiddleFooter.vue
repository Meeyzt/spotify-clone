<template>
  <div class="flex flex-col justify-center items-center px-4 w-1/2 gap-3">

    <div class="text-normalColor flex flex-row gap-5 items-center">

      <ShuffleIcon class="footerItem"/>

      <NavigationIcon class="footerItem" />

      <div class="transition-colors rounded-full w-8 h-8 cursor-pointer flex items-center justify-center bg-normalColor hover:bg-white">
        <PlayIcon class="text-black"/>
      </div>

      <NavigationIcon class="footerItem rotate-180" />

      <div class="color-normalColor hover:color-white">
        <RepeatIcon class="footerItem" />
      </div>

    </div>

    <PlayerBar where="mid"/>
  </div>
</template>

<script>
import NavigationIcon from '@/components/icons/NavigationIcon.vue';
import PlayIcon from '@/components/icons/PlayIcon.vue';
import RepeatIcon from '@/components/icons/RepeatIcon.vue';
import ShuffleIcon from '@/components/icons/ShuffleIcon.vue';
import PlayerBar from '@/components/footer/middlefooter/PlayerBar.vue';

export default {
  components: {
    ShuffleIcon,
    NavigationIcon,
    PlayIcon,
    RepeatIcon,
    PlayerBar,
  },
};
</script>
