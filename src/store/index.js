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

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: authModule,
    currentUser: currentUserModule,
    artist: artistModule,
    placeholder: placeholderModule,
    pages: {
      namespaced: true,
      modules: {
        search: searchModule,
        profile: profileModule,
        playlist: playlistModule,
        album: albumModule,
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
      state.accessToken = accessToken ?? null;
      state.refreshToken = refreshToken ?? null;
      state.expiresAt = expiresAt ?? null;

      axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
    },
  },

  actions: {
    initAuth({ commit, dispatch }) {
      commit('setIsLoading', true);

      return new Promise((resolve, reject) => {
        try {
          const expiresAt = localStorage.expires_at || null;
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
  },
});
