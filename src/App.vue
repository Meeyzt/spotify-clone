<template>
  <div id="app">
    <div>
      <div class="wrapper">
        <Sidebar />
         <main class="flex flex-auto flex-col overflow-hidden relative w-[calc(100vw-210px)]">
            <Header/>
            <div class="px-4 pt-6 lg:px-8 flex flex-col items-start bg-contentColor overflow-auto h-full">
              <router-view/>
            </div>
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
};
</script>
