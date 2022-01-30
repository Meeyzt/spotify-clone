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
    getAlbum({ rootState, commit, dispatch }, albumId) {
      return new Promise((resolve, reject) => {
        commit('setIsLoading', true, { root: true });

        axios.get(`https://api.spotify.com/v1/albums/${albumId}?market=TR`).then((res) => {
          let q = {
            ...res.data,
          };

          if (rootState.auth.isAuthenticated) {
            dispatch('pages/playlist/likedSongsThePlaylist', q.tracks.items, { root: true }).then((tracks) => {
              q = {
                ...q,
                tracks: {
                  items: tracks,
                },
              };
            }).catch();
          }
          commit('setAlbum', q);
          resolve();
        })
        .catch(reject);
        });
    },
  },
};
