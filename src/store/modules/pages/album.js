import axios from 'axios';

export default {
  namespaced: true,

  state: {
    album: null,
  },
  getters: {},
  mutations: {
    setAlbum(state, payload) {
      state.album = payload;
    },
  },
  actions: {
    getAlbum({ commit, dispatch }, albumId) {
      return new Promise((resolve, reject) => {
        commit('setIsLoading', true, { root: true });

        axios.get(`https://api.spotify.com/v1/albums/${albumId}?market=TR`).then((res) => {
          commit('setAlbum', res.data);

          dispatch('pages/playlist/likedSongsThePlaylist', res.data.tracks.items, { root: true }).then((tracks) => {
            const q = {
              ...res.data,
              tracks: {
                items: tracks,
              },
            };

            commit('setAlbum', q);

            resolve();
          });

          commit('setIsLoading', false, { root: true });
        })
        .catch(reject);
        });
    },
  },
};
