<template>
<div>
  <div class="wrapper">

    <div class="flex flex-row">

      <Sidebar />

      <div class="flex flex-col">
        <Navbar/>

        <Content/>
      </div>

    </div>

  </div>
  <Footer/>
</div>
</template>

<script>
import { mapState } from 'vuex';

import Sidebar from '../components/Sidebar.vue';
import Footer from '../components/Footer.vue';
import Content from '../components/Content.vue';
import Navbar from '../components/Navbar.vue';

export default {
  name: 'Home',

  components: {
    Sidebar,
    Footer,
    Content,
    Navbar,
  },

  computed: {
    ...mapState([
      'isAuthenticated',
    ]),
  },
};
</script>
