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
  console.log('Match: ', to.matched.some((record) => record.meta.requiresAuth));
  console.log('isAuthenticated: ', !store.state.isAuthenticated);
  console.log('access_token: ', store.state.accessToken);
  console.log('name: ', to.name);
  console.log('expiresAt: ', store.state.expiresAt);
  console.log('refreshToken: ', store.state.refreshToken);

  if (to.matched.some((record) => record.meta.requiresAuth) && !store.state.isAuthenticated) {
    console.log('1');
    if (store.state.accessToken && to.name !== 'login') {
      console.log(2);
      if (store.state.expiresAt <= Date().getTime()) {
        console.log(3);
        store.dispatch('getToken', { code: store.state.refreshToken, type: 'refreshToken' });
      } else {
        console.log('e1');
        next();
      }
    } else {
      console.log('e2');
      next('/login');
    }
  } else {
    console.log('e3');
    next();
  }
});

export default router;
