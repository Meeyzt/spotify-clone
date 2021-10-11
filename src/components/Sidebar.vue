<template>
  <aside class="w-60 pt-6 flex flex-col bg-menuColor">

    <div class="px-6 pb-3">
      <a href="#">
        <SpotifyLogo height="40"/>
      </a>
    </div>

    <Menu />

    <Playlists/>

    <DownloadApp/>

  </aside>
</template>

<script>
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
};
</script>
