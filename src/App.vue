<template>
  <div id="app">
    <div>
      <div class="wrapper">
        <Sidebar />
         <main class="flex flex-auto flex-col overflow-hidden relative w-[calc(100vw-210px)]">
            <Header/>
            <router-view/>
          </main>
      </div>
      <Footer/>
    </div>
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
  created() {
    this.$store.dispatch('getplaylistData');
    this.$store.dispatch('getCategoryData');
    this.$store.dispatch('getFeatured');
    this.$store.dispatch('getArtists');
    this.$store.dispatch('getSaved');
  },
};
</script>
