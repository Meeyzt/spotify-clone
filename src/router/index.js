import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

const beforeRoute = (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth) && !store.state.auth.isAuthenticated) {
    if (store.state.auth.accessToken && to.name !== 'login') {
      if (store.state.auth.expiresAt <= Date.now()) {
        store.dispatch('getToken', { code: store.state.auth.refreshToken, type: 'refreshToken' }).then(() => next());
      } else {
        next();
      }
    } else {
      console.log(5);
      next('/login');
    }
  } else {
    next();
  }
};

router.beforeEach((to, from, next) => {
  if (store.state.appFirstLoad) {
    store.dispatch('initAuth', null, { root: true }).then(() => {
        store.dispatch('placeholder/getPlaceholderPlaylists', null, { root: true });
        store.dispatch('placeholder/getPlaceholderFeaturedPlaylists', null, { root: true });
        store.dispatch('currentUser/getCurrentUsersLikedPlaylists', null, { root: true });
      beforeRoute(to, from, next);
    });
  } else {
    beforeRoute(to, from, next);
  }
});

export default router;
