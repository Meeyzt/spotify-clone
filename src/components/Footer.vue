<template>
  <div
  :class="`w-full h-[5.625rem] min-w-[759px] items-center border-t border-gray-400 border-opacity-20 flex flex-row gap-2 justify-between px-4 ${!isAuthenticated ? 'bg-gradient-to-r from-pink-600 via-purple-400 to-blue-300' : 'bg-contentColor'}`"
  >

    <LeftFooter v-if="isAuthenticated" />
    <MiddleFooter v-if="isAuthenticated" />
    <RightFooter v-if="isAuthenticated" />

    <div
      v-if="!isAuthenticated"
      class="flex text-white justify-between w-full items-center"
    >

    <div class="pl-8">
        <div class="text-xs block">SPOTİFY ÖNİZLEMESİ</div>
        <div class="text-md pt-2 block">Şarkı ve podcast'lere sınırsız erişim ve aralarda çıkan reklamlar için kaydol. Kredi kartına gerek yok.</div>
    </div>

    <button
      class="rounded-full bg-white text-blue-600 px-8 pt-1 whitespace-nowrap font-semibold tracking-[0.2rem] text-s h-10 hover:scale-105 shadow-lg"
    >
      <a href="https://www.spotify.com/tr/signup">ÜCRETSİZ KAYDOL</a>
    </button>

  </div>

  </div>
</template>

<script>
import { mapState } from 'vuex';
import LeftFooter from '@/components/footer/LeftFooter.vue';
import MiddleFooter from '@/components/footer/MiddleFooter.vue';
import RightFooter from '@/components/footer/RightFooter.vue';

export default {
  components: {
    LeftFooter,
    MiddleFooter,
    RightFooter,
  },

  computed: {
    ...mapState('currentUser', [
      'currentUsersData',
    ]),

    ...mapState('auth', [
      'isAuthenticated',
    ]),
  },
};
</script>
