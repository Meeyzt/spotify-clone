<template>
  <div class="flex flex-col justify-center items-center px-4 w-1/2 gap-3">

    <div class="text-normalColor flex flex-row gap-5 items-center">

      <ShuffleIcon class="footerItem"/>

      <NavigationIcon class="footerItem" />

      <play-button color="white" :height="16" :width="16"/>

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
import RepeatIcon from '@/components/icons/RepeatIcon.vue';
import ShuffleIcon from '@/components/icons/ShuffleIcon.vue';
import PlayerBar from '@/components/footer/middle-footer/PlayerBar.vue';
import PlayButton from '../PlayButton.vue';

export default {
  components: {
    ShuffleIcon,
    NavigationIcon,
    RepeatIcon,
    PlayerBar,
    PlayButton,
  },
};
</script>
