<template>
  <aside class="min-w-[240px] pt-6 flex flex-col bg-menuColor">

    <div class="px-6 pb-5">
      <a href="#">
        <SpotifyLogo :height="40"/>
      </a>
    </div>

    <Menu />
    <div class="border-t border-white border-opacity-20 w-[calc(100%-20)] mx-6 h-1"></div>
    <Playlists/>

    <div class="h-10 mx-2">
      <DownloadApp/>
    </div>

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
