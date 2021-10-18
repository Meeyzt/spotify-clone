import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "Search" */'@/views/Search.vue'),
  },
  {
    path: '/collection',
    name: 'Collection',
    component: () => import(/* webpackChunkName: "Collection" */'@/views/Collection.vue'),
    redirect: {
      name: 'CollectionPlaylists',
    },
    children: [
      {
        name: 'CollectionPlaylists',
        path: 'playlists',
        component: () => import(/* webpackChunkName: "CollectionPlaylists" */'@/views/collection/Playlists.vue'),
      },
      {
        name: 'CollectionArtists',
        path: 'artists',
        component: () => import(/* webpackChunkName: "CollectionArtists" */'@/views/collection/Artists.vue'),
      },
      {
        name: 'CollectionPodcasts',
        path: 'podcasts',
        component: () => import(/* webpackChunkName: "CollectionPodcasts" */'@/views/collection/Podcasts.vue'),
      },
      {
        name: 'CollectionAlbums',
        path: 'albums',
        component: () => import(/* webpackChunkName: "CollectionAlbums" */'@/views/collection/Albums.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
