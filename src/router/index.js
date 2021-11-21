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

const beforeRoute = (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth) && !store.state.auth.isAuthenticated) {
    if (store.state.auth.accessToken && to.name !== 'login') {
      if (store.state.auth.expiresAt <= Date.now()) {
        store.dispatch('getToken', { code: store.state.auth.refreshToken, type: 'refreshToken' }).then(() => next());
      } else {
        next();
      }
    } else {
      next('/login');
    }
  } else {
    next();
  }
};

router.beforeEach((to, from, next) => {
  if (store.state.appFirstLoad) {
    store.dispatch('initAuth', null, { root: true }).then(() => {
      beforeRoute(to, from, next);
    });
  } else {
    beforeRoute(to, from, next);
  }
});

export default router;
