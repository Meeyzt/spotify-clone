<template>
  <div class="w-full h-24 items-center border-t border-gray-400 border-opacity-20 flex flex-row justify-between bg-minimalColor px-4">
    <LeftFooter/>
    <MiddleFooter/>
    <RightFooter/>
  </div>
</template>

<script>
import LeftFooter from './Footer/LeftFooter.vue';
import MiddleFooter from './Footer/MiddleFooter.vue';
import RightFooter from './Footer/RightFooter.vue';

export default {
  components: {
    LeftFooter,
    MiddleFooter,
    RightFooter,
  },
};
</script>
