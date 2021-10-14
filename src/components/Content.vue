<template>
  <main class="flex flex-auto flex-col overflow-hidden relative w-[calc(100vw-210px)]">
    <Navbar/>
    <div class="px-4 pt-6 lg:px-8 flex flex-col items-start bg-contentColor overflow-auto">
      <Headbar/>
      <Shelf title="Yeşim'in ŞifaEvi dinleyicileri arasında popüler" />
      <Shelf title="En beğenilenler" />
      <Shelf title="Meeyzt İçin Derlendi" subtitle="Daha çok dinledikçe daha iyi tavsiyeler al." />
    </div>
  </main>
</template>

<script>
import Navbar from '@/components/content/Navbar.vue';
import Headbar from '@/components/content/Headbar.vue';
import Shelf from '@/components/content/Shelf.vue';

export default {
  components: {
    Navbar,
    Headbar,
    Shelf,
  },
};
</script>
