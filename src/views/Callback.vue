<template>
  <div class="flex flex-col justify-center items-center h-full text-xl text-white">
    <div> Logging in</div>
    <Loading/>
  </div>
</template>
<script>
import Loading from './Loading.vue';

export default {

  components: {
    Loading,
  },

  created() {
    console.log('CALLBACK CREATED');
    // this.$store.commit('auth/setAccessToken', this.$route.query.access_token, { root: true });

    // this.$store.dispatch('currentUser/getCurrentUsersData', null, { root: true }).then(() => {
    //     this.$store.dispatch('placeholder/getPlaceholderPlaylists', null, { root: true });
    //     this.$store.dispatch('placeholder/getPlaceholderFeaturedPlaylists', null, { root: true });
    //     this.$store.dispatch('currentUser/getCurrentUsersLikedPlaylists', null, { root: true });

    //   this.$router.push('/');
    // });
  },
};
</script>
