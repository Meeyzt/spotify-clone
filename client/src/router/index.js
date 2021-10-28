import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth) && !store.state.isAuthenticated) {
    if (localStorage.getItem('accessToken') !== (undefined || null)) {
      store.commit('setAccessToken', localStorage.getItem('accessToken'));

      store.dispatch('getUserData')
        .then(() => next())
        .catch(() => next('/login'));

      next(`/callback/?access_token=${localStorage.getItem('accessToken')}`);
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    }
  } else {
    next();
  }
});

export default router;
