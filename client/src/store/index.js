import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import collectionData from '@/collectionData.json';
import userPlaylistsData from '@/userPlaylists.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    collectionData,
    userPlaylistsData,
    accessCode: null,
    config: null,
    playlists: null,
    categories: null,
    featured: null,
    artists: null,
    saved: null,
    userPlaylists: null,
    playlist: null,
    userData: null,
  },

  getters: {
    playlists: (state) => (count) => state.playlists.slice(0, count ?? 6),

    featureds: (state) => (count) => state.featured.slice(0, count ?? 6),

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
      localStorage.setItem('accessToken', payload);
    },

    setUserData(state, userData) {
      state.userData = userData;
    },

    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },

    setConfig(state) {
      state.config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${state.accessToken}`,
          'Content-Type': 'application/json',
        },
      };
    },

    addPlaylists(state, payload) {
      state.userPlaylists.push(payload);
    },
  },

  actions: {
    initProject({ dispatch, state }) {
      if (state.isAuthenticated) {
        dispatch('getplaylistData');
        dispatch('getCategoryData');
        dispatch('getFeatured');
        dispatch('getArtists');
        dispatch('getSaved');
        dispatch('getUserPlaylists');
      }
    },

    getplaylistData({ state, commit }) {
      axios.get('https://api.spotify.com/v1/browse/featured-playlists?country=TR&limit=20', state.config)
        .then((res) => commit('setPlaylists', res.data.playlists.items))
        .catch((e) => {
          console.log(e);
        });
    },

    getCategoryData({ state, commit }) {
      axios.get('https://api.spotify.com/v1/browse/categories?country=TR&locale=TR&limit=6&offset=0', state.config)
        .then((res) => {
          commit('setCategories', res.data.categories.items);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getFeatured({ state, commit }) {
      axios.get('https://api.spotify.com/v1/browse/featured-playlists?country=TR&locale=TR&timestamp=2021-10-18T09%3A00%3A00.000Z&limit=10&offset=0', state.config)
        .then((res) => {
          commit('setFeatured', res.data.playlists.items);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getArtists({ state, commit }) {
      axios.get('https://api.spotify.com/v1/me/following?type=artist&limit=50', state.config)
        .then((res) => {
          commit('setArtists', res.data.artists.items);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getSaved({ state, commit }) {
      axios.get('https://api.spotify.com/v1/me/tracks?market=TR&limit=20&offset=0', state.config)
        .then((res) => {
          commit('setSaved', res.data.items);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getUserPlaylists({ state, commit }) {
      axios.get('https://api.spotify.com/v1/me/playlists?limit=20&offset=0', state.config)
        .then((res) => {
          commit('setUserPlaylists', res.data.items);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getPlaylist({ state, commit }, playlistID) {
      return new Promise((resolve, reject) => {
        axios.get(`https://api.spotify.com/v1/playlists/${playlistID}?market=tr`, state.config)
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

    getUserData({ state, commit }) {
      return new Promise((resolve, reject) => {
        axios.get('https://api.spotify.com/v1/me', state.config)
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
  },
});
