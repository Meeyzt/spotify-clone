<template>
  <div class="flex flex-col justify-center items-center h-full text-xl text-white">
    <div> Logging in</div>
    <Loading/>
  </div>
</template>
<script>
import Loading from './Loading.vue';

export default {
  components: {
    Loading,
  },
};
</script>
