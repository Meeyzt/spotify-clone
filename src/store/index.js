/* eslint-disable no-unused-vars */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import { cloneDeep } from 'lodash';

import authModule from './store.module.auth';

Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    authModule,
  },

  state: {
    isAuthenticated: false,
    appLoading: true,
    isLoading: false,
    accessToken: null,
    playlists: null,
    categories: null,
    featured: null,
    artists: null,
    saved: null,
    userPlaylists: null,
    playlist: null,
    userData: null,
    artist: null,
    artistTopTracks: null,
    currentTrack: null,
    profile: null,
    usersLikedAlbums: null,
  },

  getters: {
    playlists: (state) => (count) => (state.playlists ? state.playlists.slice(0, count ?? 6) : null),

    featureds: (state) => (count) => state.featured.slice(0, count ?? 6),

    savedTracks: (state) => (count) => state.saved.items.slice(0, count ?? 6),

    slicedArtists: (state) => (count) => state.artists.slice(0, count),

    playlistTracksId: () => (playlist) => {
      if (!playlist) {
        return '';
      }

      return playlist.slice(0, 50).map((item) => item.id || item.track.id).join(',');
    },

    categories(state) {
      return state.categories;
    },

    artists(state) {
      return state.artists;
    },

    saved(state) {
      return state.saved;
    },

    userPlaylists(state) {
      return state.userPlaylists;
    },

    playlist(state) {
      return state.playlist;
    },
  },

  mutations: {
    setPlaylists(state, playlists) {
      state.playlists = playlists;
    },

    setCategories(state, categories) {
      state.categories = categories;
    },

    setFeatured(state, featured) {
      state.featured = featured;
    },

    setArtists(state, artists) {
      state.artists = artists;
    },

    setSaved(state, saved) {
      state.saved = saved;
    },

    setUserPlaylists(state, userPlaylists) {
      state.userPlaylists = userPlaylists;
    },

    setPlaylist(state, playlist) {
      state.playlist = playlist;
    },

    setAccessToken(state, payload) {
      state.accessToken = payload;
      localStorage.setItem('access_token', payload);
    },

    setUserData(state, userData) {
      state.userData = userData;
    },

    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },

    addPlaylists(state, payload) {
      state.userPlaylists.push(payload);
      state.isLoading = false;
    },

    setIsLoading(state, payload) {
      state.isLoading = payload;
    },

    initLocalStorage(state, { accessToken, refreshToken, expiresAt }) {
      state.accessToken = accessToken ?? null;
      state.refreshToken = refreshToken ?? null;
      state.expiresAt = expiresAt ?? null;

      axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
    },

    setArtist(state, payload) {
      state.artist = payload;
    },

    setArtistTopTracks(state, payload) {
      state.artistTopTracks = payload;
    },

    setCurrentTrack(state, payload) {
      state.currentTrack = payload;
    },

    setProfile(state, payload) {
      state.profile = payload;
    },

    setUsersLikedAlbums(state, payload) {
      state.usersLikedAlbums = payload;
    },

    setAppLoading(state, payload) {
      state.appLoading = payload;
    },
  },

  actions: {
    initProject({ dispatch, state }) {
      state.isLoading = true;
      if (state.isAuthenticated) {
        dispatch('getplaylistData');
        dispatch('getFeatured');
        dispatch('getUserPlaylists');
        state.isLoading = false;
      }
    },

    getplaylistData({ commit }) {
      commit('setIsLoading', true);

      axios.get('https://api.spotify.com/v1/browse/featured-playlists?country=TR&limit=20')
        .then((res) => {
          commit('setPlaylists', res.data.playlists.items);
          commit('setIsLoading', false);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getCategoryData({ commit }) {
      commit('setIsLoading', true);

      axios.get('https://api.spotify.com/v1/browse/categories?country=TR&locale=TR&limit=6&offset=0')
        .then((res) => {
          commit('setCategories', res.data.categories.items);
          commit('setIsLoading', false);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getFeatured({ commit }) {
      commit('setIsLoading', true);
      axios.get('https://api.spotify.com/v1/browse/featured-playlists?country=TR&locale=TR&timestamp=2021-10-18T09%3A00%3A00.000Z&limit=10&offset=0')
        .then((res) => {
          commit('setFeatured', res.data.playlists.items);
          commit('setIsLoading', false);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getArtists({ commit }) {
      commit('setIsLoading', true);

      axios.get('https://api.spotify.com/v1/me/following?type=artist&limit=50')
        .then((res) => {
          commit('setIsLoading', false);
          commit('setArtists', res.data.artists.items);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getSaved({ commit }) {
      commit('setIsLoading', true);
      axios.get('https://api.spotify.com/v1/me/tracks?market=TR&limit=50&offset=0')
        .then((res) => {
          commit('setSaved', { items: res.data.items, total: res.data.total });
          commit('setIsLoading', false);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getUserPlaylists({ commit }) {
      commit('setIsLoading', true);

      axios.get('https://api.spotify.com/v1/me/playlists?limit=50&offset=0')
        .then((res) => {
          commit('setUserPlaylists', res.data.items);
          commit('setIsLoading', false);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    async getPlaylist({ state, commit, dispatch, getters }, playlistID) {
      commit('setIsLoading', true);

      axios.get(`https://api.spotify.com/v1/playlists/${playlistID}?market=TR&fields=id%2Cname%2Cdescription%2Cfollowers.total%2Cimages.url%2Ctracks.total%2Ctracks.next%2Ctracks.items(added_at%2Ctrack(id%2Cname%2Cduration_ms%2Cadded_at%2Cexternal_urls%2Calbum(name%2Cimages%2Cexternal_urls)%2Cartists(id%2Cname%2Cexternal_urls)))%2Cowner(display_name%2Cid)`)
        .then((res) => {
          let denme = res.data;

          dispatch('likedSongsThePlaylist', res.data.tracks.items)
            .then((tracks) => {
              denme = {
                ...denme,
                tracks: {
                  items: tracks,
                },
              };

              state.userPlaylists.forEach((track) => {
                if (denme.id === track.id) {
                  denme = {
                    ...denme,
                    liked: denme.id === track.id,
                  };
                }
              });

              commit('setPlaylist', denme);
            })
            .catch(console.log);

          commit('setIsLoading', false);

        // TODO: Buraya userPlaylistde varsa Beğenildi işareti eklencek...
      }).catch((e) => {
        console.log(e);
      });
    },

    likedSongsThePlaylist({ getters, commit }, playlist) {
      return new Promise((resolve, reject) => {
        commit('setIsLoading', true);

        const playlistTrackIds = playlist.length > 1 ? getters.playlistTracksId(playlist) : playlist.id;

        const url = `https://api.spotify.com/v1/me/tracks/contains?ids=${playlistTrackIds}`;

        axios.get(url).then((res) => {
          let nextPlaylist = cloneDeep(playlist);

          // eslint-disable-next-line no-unused-expressions
          nextPlaylist.length > 1 ? nextPlaylist = nextPlaylist.map((item, index) => ({
            ...item,
            liked: res.data[index],
          })) : nextPlaylist = {
            ...nextPlaylist,
            liked: res.data[0],
          };

          commit('setIsLoading', false);

          resolve(nextPlaylist);
        }).catch((e) => {
          reject(e);
          console.log(e);
        });
      });
    },

    getUserData({ commit }) {
      commit('setIsLoading', true);

      return new Promise((resolve, reject) => {
        axios.get('https://api.spotify.com/v1/me')
          .then((res) => {
            commit('setUserData', res.data);
            commit('setIsAuthenticated', true);

            commit('setIsLoading', false);

            resolve();
          })
          .catch((e) => {
            commit('setIsAuthenticated', false);
            localStorage.removeItem('accessToken');
            console.log(e);

            reject();
          });
      });
    },

    createPlaylist({ commit }) {
      commit('addPlaylists', {
        newPlaylist: true,
        images: [
          {
            url: '@/EmptyPlaylist.png',
          },
        ],
        name: '5. Çalma Listesi',
        tracks: {
          items: {
          },
          total: '0',
        },
        follower: {
          total: '0',
        },
        id: Math.ceil(Math.random(16000) * 100),
        owner: {
          display_name: 'Meeyzt',
        },
      });
    },

    initAuth({ commit, dispatch }) {
      commit('setIsLoading', true);

      return new Promise((resolve, reject) => {
        try {
          const expiresAt = localStorage.expires_at;
          const refreshToken = localStorage.refresh_token || null;
          const accessToken = localStorage.access_token || null;

          commit('initLocalStorage', { accessToken, refreshToken, expiresAt });

          dispatch('tokenTimer', expiresAt - Date.now());

          commit('setIsLoading', false);

          resolve();
        } catch (e) {
          reject(e);
        }
      });
    },

    async getArtist({ commit }, artistID) {
      commit('setIsLoading', true);

      await axios.get(`https://api.spotify.com/v1/artists/${artistID}`).then((res) => {
        commit('setArtist', res.data);
        commit('setIsLoading', false);
      })
      .catch((e) => {
      console.log('GetArtist: ', e);
      });
    },

    getArtistTopTracks({ commit, dispatch, getters }, artistID) {
      commit('setIsLoading', true);

      axios.get(`https://api.spotify.com/v1/artists/${artistID}/top-tracks?market=TR`).then((res) => {
        dispatch('likedSongsThePlaylist', res.data.tracks)
          .then((track) => {
            commit('setArtistTopTracks', track);
          });

        commit('setIsLoading', false);
      })
      .catch((e) => {
        console.log('getArtistTopTracks: ', e);
      });
    },

    getCurrentPlayingTrack({ commit, dispatch }) {
      commit('setIsLoading', true);

      axios.get('https://api.spotify.com/v1/me/player/currently-playing?market=TR').then((res) => {
        dispatch('likedSongsThePlaylist', res.data.item).then((track) => {
          commit('setCurrentTrack', track);
        });

        commit('setIsLoading', false);
      })
      .catch((e) => {
        console.log('getCurrentPlayingTrack: ', e.message);
      });
    },

    getProfile({ commit }, userId) {
      commit('setIsLoading', true);

      axios.get(`https://api.spotify.com/v1/users/${userId}`).then((res) => {
        commit('setProfile', res.data);

        commit('setIsLoading', false);
      })
      .catch((e) => {
        console.log('getCurrentPlayingTrack: ', e.message);
      });
    },

    getUsersLikedAlbums({ commit }) {
      axios.get('https://api.spotify.com/v1/me/albums?limit=10&offset=0&market=TR').then((res) => {
        commit('setUsersLikedAlbums', res.data);

        commit('setIsLoading', false);
      })
      .catch((e) => {
        console.log('getUsersLikedAlbums: ', e.message);
      });
    },

    tokenTimer({ state, dispatch }, time) {
      setTimeout(() => {
        dispatch('getToken', { code: state.refreshToken, type: 'refreshToken' });
      }, time);
    },
  },
});
