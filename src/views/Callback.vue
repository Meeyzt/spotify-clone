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

  created() {
    this.$store.commit('setAccessToken', this.$route.query.access_token);
    this.$store.commit('setConfig');

    this.$store.dispatch('getUserData').then(() => {
      this.$store.dispatch('initProject');

      this.$router.push('/');
    });
  },
};
</script>
