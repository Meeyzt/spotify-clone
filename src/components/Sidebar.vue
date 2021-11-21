<template>
  <aside class="pt-6 min-w-[259px] w-[259px] flex flex-col bg-menuColor">

    <div class="px-6 pb-5">

      <router-link tag="a" to="/">

        <SpotifyLogo :height="40" :width="126"/>

      </router-link>

    </div>

    <Menu />

    <div class="border-t border-white border-opacity-20 w-[calc(100%-20)] mx-6 h-1"/>

    <Playlists/>

    <div class="h-10 mx-2">
      <DownloadApp/>
    </div>

  </aside>
</template>

<script>
import { mapState } from 'vuex';
import Menu from './sidebar/Menu.vue';
import Playlists from './sidebar/Playlists.vue';
import DownloadApp from './sidebar/DownloadApp.vue';
import SpotifyLogo from './icons/SpotifyLogo.vue';

export default {
  components: {
    Menu,
    Playlists,
    DownloadApp,
    SpotifyLogo,
  },

  computed: {
    ...mapState('currentUser', [
      'currentUserData',
    ]),
  },
};
</script>
