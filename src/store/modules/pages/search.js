import axios from 'axios';

export default {
  namespaced: true,

  state: {
    categories: null,
  },

  getters: {},

  mutations: {
    setCategories(state, payload) {
      state.categories = payload;
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
  },
};
