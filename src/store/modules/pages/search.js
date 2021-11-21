import axios from 'axios';

export default {
  namespaced: true,

  state: {
    categories: null,
    genres: null,
  },

  getters: {},

  mutations: {
    setCategories(state, payload) {
      state.categories = payload;
    },

    setGenres(state, payload) {
      state.genres = payload;
    },
  },

  actions: {
    getCategories({ commit }) {
      return new Promise((resolve, reject) => {
        commit('setIsLoading', true, { root: true });

        axios.get('https://api.spotify.com/v1/browse/categories?country=TR&locale=TR&limit=6&offset=0')
          .then((res) => {
            commit('setCategories', res.data.categories.items);

            commit('setIsLoading', false, { root: true });

            resolve();
          })
          .catch(reject);
      });
    },

    getGenres({ commit }) {
      return new Promise((resolve, reject) => {
        commit('setIsLoading', true, { root: true });

        axios.get('https://api.spotify.com/v1/recommendations/available-genre-seeds')
          .then((res) => {
            commit('setGenres', res.data.genres);

            commit('setIsLoading', false, { root: true });

            resolve();
          })
          .catch(reject);
      });
    },
  },
};
