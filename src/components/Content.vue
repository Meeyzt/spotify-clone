<template>
  <main class="flex-auto bg-contentColor">
    <Navbar/>
    <div class="pt-9 px-8 flex flex-col items-start">
      <Head/>
      <Headbar/>
    </div>
  </main>
</template>

<script>
import Navbar from '@/components/content/Navbar.vue';
import Head from '@/components/content/Head.vue';
import Headbar from '@/components/content/Headbar.vue';

export default {
  components: {
    Navbar,
    Head,
    Headbar,
  },
};
</script>
