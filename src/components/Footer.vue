<template>
  <div class="w-[100vw] min-w-[759px] h-[5.625rem] items-center border-t border-gray-400 border-opacity-20 flex flex-row gap-2 justify-between bg-minimalColor px-4">
    <LeftFooter/>
    <MiddleFooter/>
    <RightFooter/>
  </div>
</template>

<script>
import LeftFooter from '@/components/footer/LeftFooter.vue';
import MiddleFooter from '@/components/footer/MiddleFooter.vue';
import RightFooter from '@/components/footer/RightFooter.vue';

export default {
  components: {
    LeftFooter,
    MiddleFooter,
    RightFooter,
  },
};
</script>
