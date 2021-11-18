<template>
    <div v-if="$route.meta.showCollectionTabs" class="text-white w-full  text-sm font-bold pl-7 flex flex-row gap-2 items-center justify-start">

      <router-link
        class="cursor-pointer p-3 h-full flex flex-row items-center justify-center"
        active-class="bg-collectionHeadbarColor rounded text-white px-4 py-2.5"
        to="/collection/playlists"
      >
        Çalma listeleri
      </router-link>

        <router-link
          class="cursor-pointer rounded text-white p-3 h-full"
          active-class="bg-collectionHeadbarColor rounded text-white px-4 py-2.5"
          to="/collection/podcasts"
        >
          Podcast'ler
        </router-link>

        <router-link
          active-class="bg-collectionHeadbarColor rounded text-white px-4 py-2.5"
          to="/collection/artists"
          class="xsmall:block hidden cursor-pointer rounded text-white p-3 h-full"
        >
            Sanatçılar
        </router-link>

        <router-link
          active-class="bg-collectionHeadbarColor rounded text-white px-4 py-2.5"
          to="/collection/albums"
          class="lg:block hidden cursor-pointer rounded text-white p-3 h-full"
          >
            Albümler
        </router-link>

        <button class="group">
            <div class="flex lg:hidden">
              Daha fazla
              <DownArrow :width="16" :height="16" class="pb-1"/>
            </div>
            <div class="hidden top-8 w-48 right-8 mt-2 pt-1 text-left text-white flex-col absolute bg-hoverHeadbar rounded shadow-xl z-1 group-focus-within:flex cursor-default">
              <router-link class="mx-1 p-3 text-s hover:bg-player rounded flex justify-between">

                <span> Hesap </span>

                <span> <browse-icon :height="16" :width="16"/> </span>

            </router-link>
            </div>
        </button>
    </div>
</template>

<script>
import DownArrow from '../icons/DownArrow.vue';
import BrowseIcon from '../icons/BrowseIcon.vue';

export default {
    components: {
        DownArrow,
        BrowseIcon,
    },
};
</script>
