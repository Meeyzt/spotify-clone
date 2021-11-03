import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "Search" */'@/views/Search.vue'),
    meta: {
      requiresAuth: true,
      showSearchInput: true,
    },
  },
  {
    path: '/playlist/:id',
    name: 'playlist',
    component: () => import(/* webpackChunkName: "Playlist" */'@/views/Playlist.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "Login" */'@/views/Login.vue'),
  },
  {
    path: '/loading',
    name: 'loading',
    component: () => import(/* webpackChunkName: "Playlist" */'@/views/Loading.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/callback',
    name: 'Loggingin',
    component: () => import(/* webpackChunkName: "Loggin in" */'@/views/Callback.vue'),
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
      requiresAuth: true,
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
        name: 'CollectionTracks',
        path: 'tracks',
        component: () => import(/* webpackChunkName: "LikedSongs" */'@/views/collection/Tracks.vue'),
      },
    ],
  },
];

export default routes;
