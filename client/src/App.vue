<template>
  <div id="app">
      <div class="wrapper">
        <Sidebar />
          <main class="flex flex-auto flex-col overflow-hidden relative w-[calc(100vw-210px)]">
            <Header/>
            <router-view/>
          </main>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Sidebar,
    Header,
    Footer,
  },
};
</script>
