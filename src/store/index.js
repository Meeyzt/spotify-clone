import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import authModule from './store.module.auth';

Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    authModule,
  },

  state: {
    isAuthenticated: false,
    appLoading: true,
    accessToken: null,
    playlists: null,
    categories: null,
    featured: null,
    artists: null,
    saved: null,
    userPlaylists: null,
    playlist: null,
    userData: null,
    isLoading: false,
  },

  getters: {
    playlists: (state) => (count) => state.playlists.slice(0, count ?? 6),

    featureds: (state) => (count) => state.featured.slice(0, count ?? 6),

    savedTracks: (state) => (count) => state.saved.items.slice(0, count ?? 6),

    categories(state) {
      return state.categories;
    },

    artists(state) {
      return state.artists;
    },

    saved(state) {
      return state.saved;
    },

    userPlaylists(state) {
      return state.userPlaylists;
    },

    playlist(state) {
      return state.playlist;
    },
  },

  mutations: {
    setPlaylists(state, playlists) {
      state.playlists = playlists;
    },

    setCategories(state, categories) {
      state.categories = categories;
    },

    setFeatured(state, featured) {
      state.featured = featured;
    },

    setArtists(state, artists) {
      state.artists = artists;
    },

    setSaved(state, saved) {
      state.saved = saved;
    },

    setUserPlaylists(state, userPlaylists) {
      state.userPlaylists = userPlaylists;
    },

    setPlaylist(state, playlist) {
      state.playlist = playlist;
    },

    setAccessToken(state, payload) {
      state.accessToken = payload;
      localStorage.setItem('access_token', payload);
    },

    setUserData(state, userData) {
      state.userData = userData;
    },

    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },

    addPlaylists(state, payload) {
      state.userPlaylists.push(payload);
      state.isLoading = false;
    },

    setIsLoading(state, payload) {
      state.isLoading = payload;
    },

    initLocalStorage(state, { accessToken, refreshToken, expiresAt }) {
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.expiresAt = expiresAt;

      axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
    },

    setAppLoading(state, payload) {
      state.appLoading = payload;
    },
  },

  actions: {
    initProject({ dispatch, state }) {
      return new Promise((resolve, reject) => {
        if (state.isAuthenticated) {
          dispatch('getplaylistData');
          dispatch('getCategoryData');
          dispatch('getFeatured');
          dispatch('getArtists');
          dispatch('getSaved');
          dispatch('getUserPlaylists');

          resolve();
        } else {
          reject();
        }
      });
    },

    getplaylistData({ commit }) {
      axios.get('https://api.spotify.com/v1/browse/featured-playlists?country=TR&limit=20')
        .then((res) => commit('setPlaylists', res.data.playlists.items))
        .catch((e) => {
          console.log(e);
        });
    },

    getCategoryData({ commit }) {
      axios.get('https://api.spotify.com/v1/browse/categories?country=TR&locale=TR&limit=6&offset=0')
        .then((res) => {
          commit('setCategories', res.data.categories.items);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getFeatured({ commit }) {
      axios.get('https://api.spotify.com/v1/browse/featured-playlists?country=TR&locale=TR&timestamp=2021-10-18T09%3A00%3A00.000Z&limit=10&offset=0')
        .then((res) => {
          commit('setFeatured', res.data.playlists.items);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getArtists({ commit }) {
      commit('setIsLoading', true);
      axios.get('https://api.spotify.com/v1/me/following?type=artist&limit=50')
        .then((res) => {
          commit('setIsLoading', false);
          commit('setArtists', res.data.artists.items);
        })
        .catch((e) => {
          commit('setIsLoading', false);
          console.log(e);
        });
    },

    getSaved({ commit }) {
      commit('setIsLoading', true);
      axios.get('https://api.spotify.com/v1/me/tracks?market=TR&limit=50&offset=0')
        .then((res) => {
          commit('setSaved', { items: res.data.items, total: res.data.total });
          commit('setIsLoading', false);
        })
        .catch((e) => {
          commit('setIsLoading', false);
          console.log(e);
        });
    },

    getUserPlaylists({ commit }) {
      axios.get('https://api.spotify.com/v1/me/playlists?limit=20&offset=0')
        .then((res) => {
          commit('setUserPlaylists', res.data.items);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getPlaylist({ commit }, playlistID) {
      return new Promise((resolve, reject) => {
        axios.get(`https://api.spotify.com/v1/playlists/${playlistID}?market=tr`)
          .then((res) => {
            commit('setPlaylist', res.data);
            resolve();
          })
          .catch((e) => {
            reject();
            console.log(e);
          });
      });
    },

    getUserData({ commit }) {
      return new Promise((resolve, reject) => {
        axios.get('https://api.spotify.com/v1/me')
          .then((res) => {
            commit('setUserData', res.data);
            commit('setIsAuthenticated', true);

            resolve();
          })
          .catch((e) => {
            commit('setIsAuthenticated', false);
            localStorage.removeItem('accessToken');
            console.log(e);

            reject();
          });
      });
    },

    createPlaylist({ commit }) {
      commit('setIsLoading', true);
      commit('addPlaylists', {
        newPlaylist: true,
        images: [
          {
            url: '@/EmptyPlaylist.png',
          },
        ],
        name: '5. Çalma Listesi',
        tracks: {
          items: {
          },
          total: '0',
        },
        follower: {
          total: '0',
        },
        id: Math.ceil(Math.random(16000) * 100),
        owner: {
          display_name: 'Meeyzt',
        },
      });
    },

    initAuth({ commit, dispatch }) {
      return new Promise((resolve, reject) => {
        try {
          const expiresAt = localStorage.expires_at;
          const refreshToken = localStorage.refresh_token || null;
          const accessToken = localStorage.access_token || null;

          commit('initLocalStorage', { accessToken, refreshToken, expiresAt });

          dispatch('tokenTimer', expiresAt - Date.now());

          resolve();
        } catch (e) {
          reject(e);
        }
      });
    },

    tokenTimer({ state, dispatch }, time) {
      setTimeout(() => {
        dispatch('getToken', { code: state.refreshToken, type: 'refreshToken' });
      }, time);
    },
  },
});
