import axios from 'axios';
import { cloneDeep, isArray, isObject } from 'lodash';

export default {
  namespaced: true,

  state: {
    playlist: null,
    counter: 0,
  },
  getters: {
    playlistTracksId: () => (playlist) => {
      if (!playlist) {
        return '';
      }

      return playlist.slice(0, 50).map((item) => item.id || item.track.id).join(',');
    },
  },
  mutations: {
    setPlaylist(state, payload) {
      state.playlist = payload;
    },

    setCounter(state, payload) {
      state.counter = payload;
    },
  },
  actions: {
    getPlaylist({ rootState, commit, dispatch }, playlistId) {
      return new Promise((resolve, reject) => {
        commit('setIsLoading', true, { root: true });

        axios.get(`https://api.spotify.com/v1/playlists/${playlistId}?market=TR&fields=id%2Cname%2Cdescription%2Cfollowers.total%2Cimages.url%2Ctracks.total%2Ctracks.next%2Cowner(id%2Cdisplay_name)%2Ctracks.items(added_at%2Ctrack(id%2Cname%2Cduration_ms%2Cadded_at%2Cexternal_urls%2Calbum(id%2Cname%2Cimages%2Cexternal_urls)%2Cartists(id%2Cname%2Cexternal_urls)))`)
          .then((res) => {
            let q = res.data;

            if (rootState.auth.isAuthenticated && res.data.tracks.items.length > 0) {
              dispatch('likedSongsThePlaylist', res.data.tracks.items)
              .then((tracks) => {
                q = {
                  ...res.data,
                  tracks: {
                    items: tracks,
                  },
                };
              })
              .catch(reject);
            }
            rootState.currentUser.currentUsersLikedPlaylists.forEach((track) => {
              if (q.id === track.id) {
                q = {
                  ...q,
                  liked: true,
                };
              }
            });

            commit('setPlaylist', q);

            resolve();
        }).catch(reject);
      });
    },

    likedSongsThePlaylist({ getters }, playlist) {
      return new Promise((resolve, reject) => {
        if (playlist) {
          let playlistTrackIds = '';

          if (isArray(playlist)) {
            playlistTrackIds = getters.playlistTracksId(playlist);
          } else if (isObject(playlist)) {
            playlistTrackIds = playlist.id;
          }

          const url = `https://api.spotify.com/v1/me/tracks/contains?ids=${playlistTrackIds}`;

          axios.get(url).then((res) => {
            let nextPlaylist = cloneDeep(playlist);

            if (isArray(nextPlaylist)) {
              nextPlaylist = nextPlaylist.map((item, index) => ({
                ...item,
                liked: res.data[index],
              }));
            } else if (isObject(playlist)) {
              nextPlaylist = {
                ...nextPlaylist,
                liked: res.data[0],
              };
            }

            resolve(nextPlaylist);
          }).catch(reject);
      } else {
        resolve(null);
      }
      });
    },

    createPlaylist({ state, commit }) {
      commit('setCounter', state.counter + 1);

      const playlistDatas = {
        name: `${state.counter}. Çalma Listesi`,
        description: 'Yeni çalma listesi açıklaması',
        public: false,
        images: [
          {
            height: null,
            width: null,
          },
        ],
      };

      axios.post('https://api.spotify.com/v1/users/them4nq4/playlists', playlistDatas).then((res) => {
        commit('currentUser/addPlaylistToCurrentUserLikedPlaylists', res.data, { root: true });
      });
    },
  },
};
