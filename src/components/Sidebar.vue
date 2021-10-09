<template>
  <aside class="w-60 pt-6 flex flex-col bg-menuColor">

    <div class="px-6 pb-3">
      <a href="#">
        <img src="@/assets/logo.svg" alt="spotify logo"/>
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

export default {
  components: {
    Menu,
    Playlists,
    DownloadApp,
  },
};
</script>
