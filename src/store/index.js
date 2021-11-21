import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import authModule from './modules/auth';
import currentUserModule from './modules/currentUser';
import placeholderModule from './modules/placeholder';
import artistModule from './modules/pages/artist';
import albumModule from './modules/pages/album';
import playlistModule from './modules/pages/playlist';
import profileModule from './modules/pages/profile';
import searchModule from './modules/pages/search';
import guestModule from './modules/guest';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: authModule,
    currentUser: currentUserModule,
    placeholder: placeholderModule,
    pages: {
      namespaced: true,
      modules: {
        artist: artistModule,
        search: searchModule,
        profile: profileModule,
        playlist: playlistModule,
        album: albumModule,
        guest: guestModule,
      },
    },
  },

  state: {
    appFirstLoad: true,
    isLoading: false,
  },

  mutations: {
    setIsLoading(state, payload) {
      state.isLoading = payload;
    },

    setAppFirstLoading(state, payload) {
      state.appLoading = payload;
    },

    initLocalStorage(state, { accessToken, refreshToken, expiresAt }) {
      state.auth.accessToken = accessToken ?? null;
      state.auth.refreshToken = refreshToken ?? null;
      state.auth.expiresAt = expiresAt ?? null;

      axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
    },
  },

  actions: {
    initAuth({ commit, dispatch }) {
      return new Promise((resolve, reject) => {
        commit('setIsLoading', true);
        try {
          const expiresAt = localStorage.expires_at || null;
          const refreshToken = localStorage.refresh_token || null;
          const accessToken = localStorage.access_token || null;

          if (expiresAt && refreshToken && accessToken) {
            commit('initLocalStorage', { accessToken, refreshToken, expiresAt }, { root: true });

            dispatch('auth/accessTokenTimer', expiresAt - Date.now(), { root: true });

            dispatch('auth/getToken', { code: refreshToken, type: 'refreshToken' }, { root: true }).then(() => {
              dispatch('placeholder/getPlaceholderPlaylists', null, { root: true });
              dispatch('placeholder/getPlaceholderFeaturedPlaylists', null, { root: true }).then(() => {
                commit('setIsLoading', false, { root: true });
                resolve();
              });
            });
          } else {
            dispatch('auth/getGuestToken', null, { root: true }).then(() => {
              commit('setAppFirstLoading', false);
              dispatch('placeholder/getPlaceholderPlaylists', null, { root: true });
              dispatch('placeholder/getPlaceholderFeaturedPlaylists', null, { root: true }).then(() => {
                commit('setIsLoading', false, { root: true });
                resolve();
              });
            });
          }
          commit('setIsLoading', false);
        } catch (e) {
          reject(e);
        }
      });
    },
  },
});
