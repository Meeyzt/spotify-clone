<template>
  <div class="flex flex-row h-full text-white justify-center items-center text-4xl">

    <div class="flex flex-col items-center">
        <div>
            Giriş yapılmamış, Giriş yapmak için Tıklayınız.
        </div>
        <div class="flex flex-row justify-center items-center pt-2">
            <a :href="endpoint" class="group transition-all p-3 pt-4 flex flex-row justify-center items-center bg-spotifyGreen rounded-full hover:scale-110 hover:text-white text-gray-300">
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
  data() {
    return {
      endpoint: process.env.VUE_APP_LOGIN_END_POINT,
    };
  },

};
</script>
