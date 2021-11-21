import axios from 'axios';

export default {
  namespaced: true,

  state: {},
  getters: {},
  mutations: {},
  actions: {
    getGuestPlaceholderPlaylists({ commit }) {
      axios({
        method: 'get',
        url: `${window.location.origin}/placeholderPlaylists.json`,
      }).then((res) => {
        commit('placeholder/setPlaceholderFeaturedPlaylists', res.data, { root: true });
      });
    },

    getGuestFeaturedPlaylists({ commit }) {
      axios({
        method: 'get',
        url: `${window.location.origin}/placeholderFeaturedPlaylists.json`,
      }).then((res) => {
        commit('placeholder/setPlaceholderPlaylists', res.data, { root: true });
      });
    },
  },
};
