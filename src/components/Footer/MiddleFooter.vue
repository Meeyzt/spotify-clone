<template>
  <div class="text-white flex flex-row items-center">
      <ShuffleIcon :height="18" :width="18" class="opacity-70 mr-4 hover:opacity-100"/>
      <NavigationIcon :height="18" :width="18" class="opacity-70 hover:opacity-100"/>
      <div class="rounded-full bg-white w-8 h-8 flex mx-4 items-center justify-center opacity-70 hover:opacity-100">
        <PlayIcon :height="18" :width="18" class="text-black"/>
      </div>
      <NavigationIcon :height="18" :width="18" class="opacity-70 rotate-180 hover:opacity-100"/>
      <RepeatIcon :height="18" :width="18" class="opacity-70 ml-4 hover:opacity-100" />
    </div>
</template>

<script>
import NavigationIcon from '@/components/icons/NavigationIcon.vue';
import PlayIcon from '@/components/icons/PlayIcon.vue';
import RepeatIcon from '@/components/icons/RepeatIcon.vue';
import ShuffleIcon from '@/components/icons/ShuffleIcon.vue';

export default {
  components: {
    ShuffleIcon,
    NavigationIcon,
    PlayIcon,
    RepeatIcon,
  },
};
</script>
