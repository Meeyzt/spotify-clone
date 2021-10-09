<template>
<div>
  <div class="wrapper">

    <Sidebar />
    <Content/>

  </div>

  <Footer/>

</div>
</template>

<script>
import { mapState } from 'vuex';

import Sidebar from '../components/Sidebar.vue';
import Footer from '../components/Footer.vue';
import Content from '../components/Content.vue';

export default {
  name: 'Home',

  components: {
    Sidebar,
    Footer,
    Content,
  },

  computed: {
    ...mapState([
      'isAuthenticated',
    ]),
  },
};
</script>
