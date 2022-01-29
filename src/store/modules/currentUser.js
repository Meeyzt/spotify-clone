import axios from 'axios';

export default {
  namespaced: true,

  state: {
    currentUsersData: null,
    currentUsersLikedTracks: null,
    currentUsersLikedPlaylists: null,
    currentUsersFollowedArtists: null,
    currentUsersFollowedAlbums: null,
    currentUsersCurrentPlayingTrack: null,
  },

  getters: {
    slicedCurrentUsersFollowedArtists: (state) => (count) => (state.currentUsersFollowedArtists ? state.currentUsersFollowedArtists.slice(0, count ?? 6) : null),

    slicedCurrentUsersLikedTracks: (state) => (count) => (state.currentUsersLikedTracks ? state.currentUsersLikedTracks.items.slice(0, count ?? 6) : null),
  },

  mutations: {
    setCurrentUsersData(state, payload) {
      state.currentUsersData = payload;
    },

    setCurrentUsersLikedTracks(state, payload) {
      state.currentUsersLikedTracks = payload;
    },

    setCurrentUsersLikedPlaylists(state, payload) {
      state.currentUsersLikedPlaylists = payload;
    },

    addPlaylistToCurrentUserLikedPlaylists(state, payload) {
      state.currentUsersLikedPlaylists.unshift(payload);
    },

    setCurrentUsersFollowedArtists(state, payload) {
      state.currentUsersFollowedArtists = payload;
    },

    setCurrentUsersFollowedAlbums(state, payload) {
      state.currentUsersFollowedAlbums = payload;
    },

    setCurrentUsersCurrentPlayingTrack(state, payload) {
      state.currentUsersCurrentPlayingTrack = payload;
    },
  },

  actions: {
    getCurrentUsersData({ commit }) {
      return new Promise((resolve, reject) => {
        commit('setIsLoading', true, { root: true });

        axios.get('https://api.spotify.com/v1/me')
          .then((res) => {
            commit('setCurrentUsersData', res.data);

            commit('auth/setIsAuthenticated', true, { root: true });

            resolve();
          })
          .catch((e) => {
            commit('auth/setIsAuthenticated', false, { root: true });

            localStorage.removeItem('accessToken');

            reject(e);
          });
      });
    },

    getCurrentUsersLikedTracks({ commit }) {
      return new Promise((resolve, reject) => {
        commit('setIsLoading', true, { root: true });
        axios.get('https://api.spotify.com/v1/me/tracks?market=TR&limit=50&offset=0')
          .then((res) => {
            commit('setCurrentUsersLikedTracks', { items: res.data.items, total: res.data.total });

            resolve();
          })
          .catch(reject);
      });
    },

    getCurrentUsersLikedPlaylists({ commit }) {
      return new Promise((resolve, reject) => {
        commit('setIsLoading', true, { root: true });

        axios.get('https://api.spotify.com/v1/me/playlists?limit=50&offset=0')
          .then((res) => {
            commit('setCurrentUsersLikedPlaylists', res.data.items);

            resolve();
          })
          .catch(reject);
      });
    },

    getCurrentUsersFollowedAlbums({ commit }) {
      return new Promise((resolve, reject) => {
        commit('setIsLoading', true, { root: true });

        axios.get('https://api.spotify.com/v1/me/albums?limit=50&offset=0&market=TR').then((res) => {
          commit('setCurrentUsersFollowedAlbums', res.data);

          resolve();
        })
        .catch(reject);
      });
    },

    getCurrentUsersFollowedArtists({ commit }) {
      return new Promise((resolve, reject) => {
        commit('setIsLoading', true, { root: true });

      axios.get('https://api.spotify.com/v1/me/following?type=artist&limit=50')
        .then((res) => {
          commit('setCurrentUsersFollowedArtists', res.data.artists.items);

          resolve();
        })
        .catch(reject);
      });
    },

    getCurrentUsersCurrentPlayingTrack({ commit, dispatch }) {
      return new Promise((resolve, reject) => {
        axios.get('https://api.spotify.com/v1/me/player/currently-playing?market=TR').then((res) => {
          dispatch('pages/playlist/likedSongsThePlaylist', res.data.item, { root: true }).then((track) => {
            commit('setCurrentUsersCurrentPlayingTrack', track);
            resolve(track);
          });
        })
        .catch(reject);
      });
    },
  },
};
