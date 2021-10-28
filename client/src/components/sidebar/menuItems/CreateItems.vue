<template>
    <ul class="pt-6 pb-5">
      <li
        @click="createPlaylist()"
        class="group text-sm pl-4 cursor-pointer flex font-semibold flex-row gap-x-4 mx-2 text-normalColor hover:text-white"
      >
        <span
          class="bg-normalColor group-hover:bg-white flex align-center justify-center rounded-xs px-1.5 py-1.5"
        >

          <PlusIcon :width="12" :height="12"/>

        </span>

        <span class="pt-1 overflow-hidden"> Çalma Listesi Oluştur</span>

      </li>

      <router-link
      to='/collection/tracks'
      tag="li" active-class="opacity-100"
      class="text-sm pt-4 px-4 cursor-pointer flex font-semibold flex-row gap-x-4 mx-2 opacity-70 hover:opacity-100  text-white"
      >

      <span class="w-6 h-6 flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-300">

        <HeartIcon :width="12" :height="12"/>

      </span>

        <span class="pt-1">Beğenilen Şarkılar</span>

      </router-link>
    </ul>
</template>

<script>
import PlusIcon from '@/components/icons/PlusIcon.vue';
import HeartIcon from '@/components/icons/HeartIcon.vue';

export default {

  components: {
    PlusIcon,
    HeartIcon,
  },

  methods: {
    createPlaylist() {
      this.$store.dispatch('createPlaylist');
    },
  },

};
</script>
