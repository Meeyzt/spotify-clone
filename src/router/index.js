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
    meta: {
      showSearchInput: true,
    },
  },
  {
    path: '/collection',
    name: 'Collection',
    component: () => import(/* webpackChunkName: "Collection" */'@/views/Collection.vue'),
    redirect: {
      name: 'CollectionPlaylists',
    },
    meta: {
      showCollectionTabs: true,
    },
    children: [
      {
        name: 'CollectionPlaylists',
        path: 'playlists',
        component: () => import(/* webpackChunkName: "CollectionPlaylists" */'@/views/collection/Playlists.vue'),
        meta: {
          showCollectionTabs: true,
        },
      },
      {
        name: 'CollectionArtists',
        path: 'artists',
        component: () => import(/* webpackChunkName: "CollectionArtists" */'@/views/collection/Artists.vue'),
        meta: {
          showCollectionTabs: true,
        },
      },
      {
        name: 'CollectionPodcasts',
        path: 'podcasts',
        component: () => import(/* webpackChunkName: "CollectionPodcasts" */'@/views/collection/Podcasts.vue'),
        meta: {
          showCollectionTabs: true,
        },
      },
      {
        name: 'CollectionAlbums',
        path: 'albums',
        component: () => import(/* webpackChunkName: "CollectionAlbums" */'@/views/collection/Albums.vue'),
        meta: {
          showCollectionTabs: true,
        },
      },
      {
        name: 'CollectionAlbums',
        path: 'tracks',
        component: () => import(/* webpackChunkName: "LikedSongs" */'@/views/collection/Tracks.vue'),
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
