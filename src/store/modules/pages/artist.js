import axios from 'axios';

export default {
  namespaced: true,

  state: {
    artistsData: null,
    artistsTopTracks: null,
    artistsAlbums: null,
  },
  getters: {
    slicedArtistsData: (state) => (count) => state.artistsData.slice(0, count ?? 6),

    slicedArtistsAlbums: (state) => (count) => state.artistsAlbums.slice(0, count ?? 6),
  },
  mutations: {
    setArtistsData(state, payload) {
      state.artistsData = payload;
    },

    setArtistsTopTracks(state, payload) {
      state.artistsTopTracks = payload;
    },

    setArtistsAlbums(state, payload) {
      state.artistsAlbums = payload;
    },
  },
  actions: {
    getArtistsData({ commit }, artistId) {
      return new Promise((resolve, reject) => {
        commit('setIsLoading', true, { root: true });

        axios.get(`https://api.spotify.com/v1/artists/${artistId}`).then((res) => {
          commit('setArtistsData', res.data);

          resolve();
        })
        .catch(reject);
      });
    },

    getArtistTopTracks({ rootState, commit, dispatch }, artistID) {
      return new Promise((resolve, reject) => {
        commit('setIsLoading', true, { root: true });

        axios.get(`https://api.spotify.com/v1/artists/${artistID}/top-tracks?market=TR`).then((res) => {
          if (rootState.auth.isAuthenticated) {
            dispatch('pages/playlist/likedSongsThePlaylist', res.data.tracks, { root: true })
            .then((track) => {
              commit('setArtistsTopTracks', track);

              resolve();
            });
          }

          commit('setArtistsTopTracks', res.data.tracks);

          resolve();
      })
        .catch(reject);
      });
    },

    getArtistsAlbums({ commit }, artistId) {
      return new Promise((resolve, reject) => {
        axios.get(`https://api.spotify.com/v1/artists/${artistId}/albums?market=TR&limit=10&offset=0`).then((res) => {
          commit('setArtistsAlbums', res.data.items);

          resolve();
        }).catch(reject);
      });
    },
  },
};
