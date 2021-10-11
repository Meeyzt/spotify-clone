<template>
  <main class="flex-auto bg-contentColor overflow-auto">
    <Navbar/>
    <div class="pt-9 px-8 flex flex-col items-start">
      <Head/>
      <Headbar/>
      <Shelf title="Yeşim'in ŞifaEvi dinleyicileri arasında popüler" />
      <Shelf title="En beğenilenler" />
    </div>
  </main>
</template>

<script>
import Navbar from '@/components/content/Navbar.vue';
import Head from '@/components/content/Head.vue';
import Headbar from '@/components/content/Headbar.vue';
import Shelf from '@/components/content/Shelf.vue';

export default {
  components: {
    Navbar,
    Head,
    Headbar,
    Shelf,
  },
};
</script>
