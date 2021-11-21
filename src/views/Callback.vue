<template>
  <div class="flex flex-col justify-center items-center h-full text-xl text-white">
    <div class="flex flex-col items-center justify-center">
      <span>Logging in</span>
      <Loading class="pl-3"/>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

import Loading from './Loading.vue';

export default {
  components: {
    Loading,
  },

  computed: {
    ...mapState('currentUser', [
      'currentUserData',
    ]),
  },

  created() {
    this.$store.commit('setIsLoading', false);
  },

  mounted() {
    if (this.$route.query.code && this.$route.query.state) {
      this.$store.dispatch('auth/getToken', { code: this.$route.query.code }, { root: true })
        .then(() => {
          this.$store.commit('auth/setIsAuthenticated', true, { root: true });
          this.$store.dispatch('currentUser/getCurrentUsersData', null, { root: true }).then(() => {
            this.$router.push('/');
          });
        })
        .catch(console.log);
    }
  },
};
</script>
