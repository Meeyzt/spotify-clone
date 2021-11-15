import qs from 'qs';
import axios from 'axios';

const INITIAL_SCOPES = [
  'ugc-image-upload',
  'playlist-modify-private',
  'playlist-read-private',
  'playlist-modify-public',
  'playlist-read-collaborative',
  'user-read-private',
  'user-read-email',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'user-library-modify',
  'user-library-read',
  'user-read-playback-position',
  'user-read-recently-played',
  'user-top-read',
  'app-remote-control',
  'streaming',
  'user-follow-modify',
  'user-follow-read',
];

export default {
  state: () => ({
    clientId: process.env.VUE_APP_SPOTIFY_CLIENT_ID,
    clientSecret: process.env.VUE_APP_SPOTIFY_CLIENT_SECRET,
    redirectUri: `${window.location.origin}/login`,
    scopes: INITIAL_SCOPES,

    tokenGetting: false,
    tokenGettingError: null,
    tokenGettingErrorDescription: null,

    refreshToken: null,
    expiresAt: 3600000,

    isAuthenticated: false,
  }),

  mutations: {
    setAccessToken(state, payload) {
      state.accessToken = payload;
      localStorage.setItem('access_token', payload);
    },

    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },

    setTokenGetting(state, payload) {
      state.tokenGetting = payload;
    },

    setTokenGettingError(state, payload) {
      state.tokenGettingError = payload;
    },

    setTokenGettingErrorDescription(state, payload) {
      state.tokenGettingErrorDescription = payload;
    },

    setRefreshToken(state, payload) {
      state.refreshToken = payload;
      localStorage.setItem('refresh_token', payload);
    },

    setExpiresAt(state, payload) {
      state.expiresAt = payload;
    },
  },
  actions: {
    getAuthorize({ state }) {
      window.location.href = `https://accounts.spotify.com/authorize?${qs.stringify({
        response_type: 'code',
        client_id: state.clientId,
        scope: state.scopes.join(' '),
        redirect_uri: state.redirectUri,
        state: Date.now(),
      })}`;
    },

    async getToken({ state, commit, dispatch }, { code, type = 'authorization_code' }) {
      return new Promise((resolve, reject) => {
        const url = 'https://accounts.spotify.com/api/token';

        const data = type !== 'refreshToken' ? qs.stringify({
          grant_type: 'authorization_code',
          redirect_uri: state.redirectUri,
          code,
        }) : qs.stringify({
          grant_type: 'refresh_token',
          redirect_uri: state.redirectUri,
          refresh_token: code,
        });

        const auth = {
          username: state.clientId,
          password: state.clientSecret,
        };

        commit('setTokenGetting', true);
        commit('setTokenGettingError', null);
        commit('setTokenGettingErrorDescription', null);

        axios.post(url, data, { auth }).then(async (response) => {
          commit('setAccessToken', response.data.access_token);
          if (type === 'authorization_code') {
            commit('setRefreshToken', response.data.refresh_token);
          }

          const time = Date.now() + 3600000;
          commit('setExpiresAt', time);
          localStorage.setItem('expires_at', time);
          axios.defaults.headers.Authorization = `Bearer ${response.data.access_token}`;

          dispatch('tokenTimer', time - Date.now());

          resolve();
        }).catch((err) => {
          if (err.response) {
            commit('setTokenGettingError', err.response.data.error);
            commit('setTokenGettingErrorDescription', err.response.data.error_description);
          } else {
            commit('setTokenGettingError', 'unexpected_error');
            commit('setTokenGettingErrorDescription', 'Unexpected error occured');
          }

          reject();
        }).finally(() => {
          commit('setTokenGetting', false);
        });
      });
    },

    accessTokenTimer({ state, dispatch }, time) {
      setTimeout(() => {
        dispatch('getToken', { code: state.refreshToken, type: 'refreshToken' });
      }, time);
    },
  },
};
