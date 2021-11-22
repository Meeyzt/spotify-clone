import axios from 'axios';

export default {
  namespaced: true,

  state: {
    profile: null,
  },
  getters: {},
  mutations: {
    setProfile(state, payload) {
      state.profile = payload;
    },
  },
  actions: {
    getProfile({ commit }, userId) {
      return new Promise((resolve, reject) => {
        commit('setIsLoading', true, { root: true });

        axios.get(`https://api.spotify.com/v1/users/${userId}`).then((res) => {
          commit('setProfile', res.data);

          resolve();
        })
        .catch(reject);
      });
    },
  },
};
