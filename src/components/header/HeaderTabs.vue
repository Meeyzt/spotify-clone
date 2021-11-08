<template>
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
</template>

<script>
import DownArrow from '../icons/DownArrow.vue';

export default {
    components: {
        DownArrow,
    },
};
</script>
