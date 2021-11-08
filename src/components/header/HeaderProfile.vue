<template>
    <button class="group" v-if="userData">
        <span class="flex flex-row bg-black relative rounded-full items-center justify-center text-white text-s px-0.5 py-0.5 cursor-pointer mx-4 hover:bg-hoverHeadbar group-focus:bg-hoverHeadbar">

            <div class="rounded-full h-7 w-7">
                <img class="rounded-full overflow-hidden h-7 w-7 object-cover" :src="userData.images[0].url" alt="ProfilePicture" />
            </div>

            <div class="hidden lg:flex px-2 my-auto font-semibold items-center justify-center pt-1">
                {{ userData.display_name }}
            </div>

            <DownArrow class="hidden lg:block mr-1 group-focus:transform group-focus:rotate-180" :height="16" :width="16"/>

        </span>
        <div class="hidden w-48 right-8 mt-2 text-left text-white flex-col absolute bg-hoverHeadbar rounded shadow-xl z-1 group-focus:flex">

            <router-link
                tag="a"
                to="/"
                class="p-3 m-1 pr-2 text-s hover:bg-player rounded flex justify-between"
            >

                <span> Hesap </span>

                <span> <browse-icon :height="16" :width="16"/> </span>

            </router-link>

            <router-link
                to="/"
                class="m-1 p-3 pr-2 text-s hover:bg-player rounded"
            >
                Profil
            </router-link>

            <router-link
                to="/"
                class="m-1 p-3 pr-2 text-s hover:bg-player rounded"
            >
                Oturumu Kapat
            </router-link>

        </div>

    </button>
</template>

<script>
import { mapState } from 'vuex';
import DownArrow from '../icons/DownArrow.vue';
import BrowseIcon from '../icons/BrowseIcon.vue';

export default {
    components: {
        DownArrow,
        BrowseIcon,
    },

    computed: {
        ...mapState([
            'userData',
        ]),
    },
};
</script>
