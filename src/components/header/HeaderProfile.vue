<template>
    <button class="group" v-if="userData">
        <span class="flex flex-row bg-black relative rounded-full items-center justify-center text-white text-s px-0.5 py-0.5 mx-4 hover:bg-hoverHeadbar group-focus-within:bg-hoverHeadbar">

            <div class="rounded-full h-7 w-7">
                <img class="rounded-full overflow-hidden h-7 w-7 object-cover" :src="userData.images[0].url" alt="ProfilePicture" />
            </div>

            <div class="hidden lg:flex px-2 my-auto font-semibold items-center justify-center pt-1">
                {{ userData.display_name }}
            </div>

            <DownArrow class="hidden lg:block mr-1 group-focus-within:transform group-focus-within:rotate-180" :height="16" :width="16"/>

        </span>
        <div class="hidden w-48 right-8 mt-2 pt-1 text-left text-white flex-col absolute bg-hoverHeadbar rounded shadow-xl z-1 group-focus-within:flex cursor-default">

            <router-link
                to=""
                class="mx-1 p-3 text-s hover:bg-player rounded flex justify-between"
                for="close-callback"
            >

                <span> Hesap </span>

                <span> <browse-icon :height="16" :width="16"/> </span>

            </router-link>

            <router-link
                :to="`/user/${userData.id}`"
                class="mx-1 p-3 text-s hover:bg-player rounded flex justify-between"
            >
                Profil
            </router-link>

            <a
                @click="logOut()"
                class="mx-1 p-3 text-s hover:bg-player rounded flex justify-between mb-1 cursor-pointer"
            >
                Oturumu Kapat
            </a>

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

    methods: {
      logOut() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('expires_at');
        this.$store.commit('setIsAuthenticated', false);
        const state = { ...this.$store.state };
        console.log(state);
        const newState = {};
        Object.keys(state).forEach((key) => {
          newState[key] = null;
        });
        this.$store.replaceState(newState);
        this.$router.go(0);
      },
    },

    computed: {
        ...mapState([
            'userData',
        ]),
    },
};
</script>
