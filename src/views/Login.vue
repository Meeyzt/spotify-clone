<template>
  <div
  class="flex flex-row h-full text-white justify-center items-center text-4xl"
  v-if="!currentUserData"
  >

    <div class="flex flex-col items-center">
        <div>
            Giriş yapılmamış, Giriş yapmak için Tıklayınız.
        </div>
        <button
          @click="$store.dispatch('auth/getAuthorize', null, { root: true })"
          class="group transition-all p-3 pt-4 flex flex-row cursor-pointer justify-center items-center bg-spotifyGreen rounded-full hover:scale-110 hover:text-white text-gray-300"
        >
          <spotify-logo-minimal class="hidden group-hover:flex mx-12" :width="48" :height="48"/>
          <div class="group-hover:hidden flex">Giriş Yap</div>
        </button>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex';

import SpotifyLogoMinimal from '../components/icons/SpotifyLogoMinimal.vue';

export default {
  components: { SpotifyLogoMinimal },

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
