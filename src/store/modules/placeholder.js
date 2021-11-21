import axios from 'axios';

export default {
  namespaced: true,

  state: {
    placeholderPlaylists: null,
    placeholderFeaturedPlaylists: null,
  },
  getters: {
    slicedPlaceholderPlaylists: (state) => (count) => (state.placeholderPlaylists ? state.placeholderPlaylists.slice(0, count ?? 6) : null),

    slicedPlaceholderFeaturedPlaylists: (state) => (count) => state.placeholderFeaturedPlaylists.slice(0, count ?? 6),
  },
  mutations: {
    setPlaceholderPlaylists(state, payload) {
      state.placeholderPlaylists = payload;
    },

    setPlaceholderFeaturedPlaylists(state, payload) {
      state.placeholderFeaturedPlaylists = payload;
    },
  },
  actions: {
    getPlaceholderFeaturedPlaylists({ commit }) {
      return new Promise((resolve, reject) => {
        commit('setIsLoading', true, { root: true });

        axios.get('https://api.spotify.com/v1/browse/featured-playlists?country=TR&limit=20')
          .then((res) => {
            commit('setPlaceholderPlaylists', res.data.playlists.items);

            commit('setIsLoading', false, { root: true });

            resolve();
          })
          .catch(reject);
      });
    },

    getPlaceholderPlaylists({ commit }) {
      return new Promise((resolve, reject) => {
        commit('setIsLoading', true, { root: true });

        axios.get('https://api.spotify.com/v1/browse/featured-playlists?country=TR&locale=TR&timestamp=2021-10-18T09%3A00%3A00.000Z&limit=10&offset=0')
          .then((res) => {
            commit('setPlaceholderFeaturedPlaylists', res.data.playlists.items);

            commit('setIsLoading', false, { root: true });

            resolve();
          })
          .catch(reject);
      });
    },
  },
};
