<template>
    <div
      id="app"
      @click.right="rightClick($event)"
    >

      <div class="wrapper">
        <Sidebar />

          <main class="flex flex-auto flex-col overflow-hidden relative">
            <Header/>

            <router-view v-show="!isLoading"/>

            <div class="w-full h-full flex justify-center items-center bg-contentColor" v-show="isLoading">
              <loading/>
            </div>

          </main>

      </div>

      <Footer/>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Loading from './views/Loading.vue';

export default {
  components: {
    Sidebar,
    Header,
    Footer,
    Loading,
  },

  computed: {
    ...mapState([
      'isLoading',
    ]),
  },

  methods: {
    rightClick(e) {
      e.preventDefault();
    },
  },
};
</script>
