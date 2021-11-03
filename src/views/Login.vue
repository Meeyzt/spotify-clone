<template>
  <div
  class="flex flex-row h-full text-white justify-center items-center text-4xl"
  v-if="!$store.state.userData"
  >

    <div class="flex flex-col items-center">
        <div>
            Giriş yapılmamış, Giriş yapmak için Tıklayınız.
        </div>
        <div class="flex flex-row justify-center items-center pt-2">
            <a
              @click="$store.dispatch('getAuthorize')"
              class="group transition-all p-3 pt-4 flex flex-row cursor-pointer justify-center items-center bg-spotifyGreen rounded-full hover:scale-110 hover:text-white text-gray-300"
            >
              <spotify-logo-minimal class="hidden group-hover:flex mx-12" :width="48" :height="48"/>
              <div class="group-hover:hidden flex">Giriş Yap</div>
            </a>
        </div>
    </div>

  </div>
</template>

<script>
import SpotifyLogoMinimal from '../components/icons/SpotifyLogoMinimal.vue';

export default {
  components: { SpotifyLogoMinimal },

  mounted() {
    if (this.$route.query.code && this.$route.query.state) {
      this.$store.dispatch('getToken', { code: this.$route.query.code })
        .then(() => {
          this.$store.commit('setIsAuthenticated', true);
          this.$store.dispatch('getUserData').then(() => {
            this.$store.dispatch('initProject');
            this.$route.push('/');
          });
        });
    } else {
      this.$store.dispatch('getAuthorize');
    }
  },
};
</script>
