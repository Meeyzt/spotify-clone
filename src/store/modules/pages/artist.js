import axios from 'axios';

export default {
  namespaced: true,

  state: {
    artistsData: null,
    artistsTopTracks: null,
  },
  getters: {
    slicedArtistsData: (state) => (count) => state.artistsData.slice(0, count ?? 6),
  },
  mutations: {
    setArtistsData(state, payload) {
      state.artistsData = payload;
    },

    setArtistsTopTracks(state, payload) {
      state.artistsTopTracks = payload;
    },
  },
  actions: {
    getArtistsData({ commit }, artistId) {
      return new Promise((resolve, reject) => {
        commit('setIsLoading', true, { root: true });

        axios.get(`https://api.spotify.com/v1/artists/${artistId}`).then((res) => {
          commit('setArtistsData', res.data);

          commit('setIsLoading', false, { root: true });

          resolve();
        })
        .catch(reject);
      });
    },

    getArtistTopTracks({ commit, dispatch }, artistID) {
      return new Promise((resolve, reject) => {
        commit('setIsLoading', true, { root: true });

        axios.get(`https://api.spotify.com/v1/artists/${artistID}/top-tracks?market=TR`).then((res) => {
          // TODO: Burada yok edilecek şeyler var
          dispatch('pages/playlist/likedSongsThePlaylist', res.data.tracks, { root: true })
            .then((track) => {
              commit('setArtistsTopTracks', track);
            });

          commit('setIsLoading', false, { root: true });

          resolve();
      })
        .catch(reject);
      });
    },
  },
};
