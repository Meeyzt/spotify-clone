<template>
  <header v-if="userData !== null"
  class="bg-contentColor relative flex flex-row flex-shrink-0 flex-grow-0 justify-between items-center p-4 w-full z-10 gap-3 h-[60px]"
  >
    <div class="flex flex-row lg:pl-5">
      <a
      class="text-white bg-arrowBgColor bg-opacity-50 rounded-full cursor-pointer p-1"
      @click="hasHistory() ? $router.go(-1) : $router.push('/')"
      >

        <ArrowIcon class="rotate-180"/>

      </a>
      <a
      class="hidden lg:block opacity-50 bg-arrowBgColor text-white bg-opacity-50 rounded-full cursor-pointer p-1 ml-4"
      >

        <ArrowIcon/>

      </a>
    </div>
    <div
      class="w-full flex justify-start items-start h-10 left-0 top-0 bottom-0"
      v-if="$route.meta.showSearchInput"
    >

      <div class="w-96 min-w-[260px] rounded-full flex flex-row text-black bg-white h-full items-center relative">

        <SearchIcon :width="24" :height="24" class="ml-3 z-10 absolute" />

        <input
          class="h-full w-full rounded-full flex flex-row text-black bg-white focus:outline-none items-center relative p-1 pl-10 text-sm truncate justify-center placeholder-gray-500"
          type="text"
          placeholder="Sanatçılar, şarkılar veya podcast'ler"
        >

      </div>

    </div>
    <div v-if="$route.meta.showCollectionTabs" class="relative text-white w-full  text-sm font-bold pl-7 whitespace-nowrap truncate flex flex-row gap-2 items-center justify-start">

        <router-link
          class="cursor-pointer p-3 h-full flex flex-row items-center justify-center"
          tag="div"
          active-class="bg-collectionHeadbarColor rounded text-white px-4 py-2.5"
          to="/collection/playlists"
        >
          Çalma listeleri
        </router-link>

        <router-link
          class="cursor-pointer rounded text-white p-3 h-full"
          tag="div"
          active-class="bg-collectionHeadbarColor rounded text-white px-4 py-2.5"
          to="/collection/podcasts"
        >
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
    <button class="group">
      <span class="flex flex-row bg-black relative rounded-full items-center justify-center text-white text-s px-0.5 py-0.5 cursor-pointer mx-4 hover:bg-hoverHeadbar group-focus:bg-hoverHeadbar">

        <div class="rounded-full h-7 w-7">
          <img class="rounded-full overflow-hidden h-7 w-7 object-cover" :src="userData.images[0].url" alt="ProfilePicture" />
        </div>

        <div class="hidden lg:flex px-2 my-auto font-semibold items-center justify-center pt-1">
          {{ userData.display_name }}
        </div>

        <DownArrow class="hidden lg:block mr-1 group-focus:transform group-focus:rotate-180" :height="16" :width="16"/>
      </span>
      <div class="hidden w-48 right-8 mt-2 text-left text-white flex-col absolute bg-hoverHeadbar rounded shadow-xl z-1 group-focus:flex shadow-xl">

        <router-link
          tag="a"
          to="/"
          class="p-3 m-1 pr-2 text-s hover:bg-player rounded flex justify-between"
        >

        <span>Hesap</span>
        <span><browse-icon :height="16" :width="16"/></span>

        </router-link>

        <router-link
          to="/"
          class="m-1 p-3 pr-2 text-s hover:bg-player rounded"
        >Profil</router-link>

        <router-link
          to="/"
          class="m-1 p-3 pr-2 text-s hover:bg-player rounded"
        >Oturumu Kapat</router-link>

      </div>

    </button>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import ArrowIcon from './icons/ArrowIcon.vue';
import DownArrow from './icons/DownArrow.vue';
import SearchIcon from './icons/SearchIcon.vue';
import BrowseIcon from './icons/BrowseIcon.vue';

export default {
  name: 'Header',

  components: {
    ArrowIcon,
    DownArrow,
    SearchIcon,
    BrowseIcon,
  },

  methods: {
    hasHistory() {
      return (window.history.length > 2);
    },
  },

  mounted() {
    this.$store.dispatch('getUserData');
  },

  computed: {
    ...mapState([
      'userData',
    ]),
  },
};
</script>
