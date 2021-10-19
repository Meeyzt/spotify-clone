<template>
  <header class="bg-contentColor relative flex flex-row flex-shrink-0 flex-grow-0 justify-between items-center p-4 w-full z-10 gap-3 h-[60px]">
   <div class="flex flex-row lg:pl-5">
      <div class="text-white bg-arrowBgColor bg-opacity-50 rounded-full cursor-pointer p-1">
        <ArrowIcon class="rotate-180"/>
      </div>
      <div class="hidden lg:block opacity-50 bg-arrowBgColor text-white bg-opacity-50 rounded-full cursor-pointer p-1 ml-4">
        <ArrowIcon/>
    </div>
   </div>
   <div v-if="$route.meta.showSearchInput" class="w-full flex justify-start items-start h-10 left-0 top-0 bottom-0">
     <div class="w-96 min-w-[260px] rounded-full flex flex-row text-black bg-white h-full items-center relative">
         <SearchIcon :width="24" :height="24" class="ml-3 z-10 absolute" />
         <input type="text" class="h-full w-full rounded-full flex flex-row text-black bg-white focus:outline-none items-center relative p-1 pl-10 text-sm truncate justify-center placeholder-gray-500" placeholder="Sanatçılar, şarkılar veya podcast'ler">
     </div>
   </div>

   <div v-if="$route.meta.showCollectionTabs" class="relative text-white w-full  text-sm font-bold pl-7 whitespace-nowrap truncate flex flex-row gap-2 items-center justify-start">
        <router-link tag="div" active-class="bg-collectionHeadbarColor rounded text-white px-4 py-2.5" to="/collection/playlists" class="cursor-pointer p-3 h-full flex flex-row items-center justify-center">
          Çalma listeleri
        </router-link>
        <router-link tag="div" active-class="bg-collectionHeadbarColor rounded text-white px-4 py-2.5" to="/collection/podcasts" class="cursor-pointer rounded text-white p-3 h-full">
          Podcast'ler
        </router-link>
        <router-link tag="div" active-class="bg-collectionHeadbarColor rounded text-white px-4 py-2.5" to="/collection/artists" class="xsmall:block hidden cursor-pointer rounded text-white p-3 h-full">
          Sanatçılar
        </router-link>
        <router-link tag="div" active-class="bg-collectionHeadbarColor rounded text-white px-4 py-2.5" to="/collection/albums" class="lg:block hidden cursor-pointer rounded text-white p-3 h-full">
          Albümler
        </router-link>
      <div class="flex lg:hidden cursor-pointer h-full rounded text-white p-3flex items-center justify-center gap-1 flex-row">
          Daha fazla
          <DownArrow :width="16" :height="16" class="pb-1"/>
      </div>
   </div>
    <div class="flex flex-row bg-black rounded-full items-center justify-center text-white text-s px-0.5 cursor-pointer mx-4 hover:bg-hoverHeadbar">
      <div class="rounded-full bg-clip-content bg-center bg-cover bg-no-repeat bgimg h-7 w-7"/>
      <div class="hidden lg:block px-2 my-auto font-semibold">Meeyzt</div>
      <DownArrow class="hidden lg:block pr-2 pb-0.5"/>
    </div>
  </header>
</template>

<script>
import ArrowIcon from './icons/ArrowIcon.vue';
import DownArrow from './icons/DownArrow.vue';
import SearchIcon from './icons/SearchIcon.vue';

export default {
  name: 'Header',
  components: {
    ArrowIcon,
    DownArrow,
    SearchIcon,
  },
};
</script>
