<template>
    <div class="flex flex-row lg:pl-5">
        <a
            class="text-white bg-arrowBgColor bg-opacity-50 rounded-full cursor-pointer p-1"
            @click="hasHistory() ? $router.go(-1) : $router.push('/')"
        >

            <ArrowIcon class="rotate-180"/>

        </a>
        <a
            class="hidden lg:block opacity-50 bg-arrowBgColor text-white bg-opacity-50 rounded-full cursor-pointer p-1 ml-4"
        >

            <ArrowIcon/>

        </a>
    </div>
</template>

<script>
import ArrowIcon from '../icons/ArrowIcon.vue';

export default {
  components: {
    ArrowIcon,
  },

  methods: {
    hasHistory() {
      return (window.history.length > 2);
    },
  },
};
</script>
