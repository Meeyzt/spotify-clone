/* eslint-disable no-unused-vars */
import axios from 'axios';
import { cloneDeep } from 'lodash';

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

            if (rootState.auth.isAuthenticated) {
              dispatch('likedSongsThePlaylist', res.data.tracks.items)
              .then((tracks) => {
                q = {
                  ...res.data,
                  tracks: {
                    items: tracks,
                  },
                };

                rootState.currentUser.currentUsersLikedPlaylists.forEach((track) => {
                  if (q.id === track.id) {
                    q = {
                      ...q,
                      liked: true,
                    };
                  }
                });

                commit('setPlaylist', q);
              })
              .catch(reject);
            } else {
              commit('setPlaylist', q);
            }

            commit('setIsLoading', false, { root: true });

            resolve();
        }).catch(reject);
      });
    },

    likedSongsThePlaylist({ getters, commit }, playlist) {
      return new Promise((resolve, reject) => {
        commit('setIsLoading', true, { root: true });

        if (playlist) {
        const playlistTrackIds = playlist?.length > 1 ? getters.playlistTracksId(playlist) : playlist.id;

        const url = `https://api.spotify.com/v1/me/tracks/contains?ids=${playlistTrackIds}`;

        axios.get(url).then((res) => {
          let nextPlaylist = cloneDeep(playlist);

          if (nextPlaylist?.length > 1) {
            nextPlaylist = nextPlaylist.map((item, index) => ({
              ...item,
              liked: res.data[index],
            }));
          } else {
            nextPlaylist = {
              ...nextPlaylist,
              liked: res.data[0],
            };
          }

          commit('setIsLoading', false, { root: true });

          resolve(nextPlaylist);
        }).catch(reject);
      } else {
        resolve(null);
      }
      });
    },

    createPlaylist({ rootState, state, commit }) {
      commit('setCounter', state.counter + 1);

      const p = [
        {
          newPlaylist: true,
          images: [
            {
              url: '@/EmptyPlaylist.png',
            },
          ],
          name: `${state.counter}. Çalma Listesi`,
          tracks: {
            items: {
            },
            total: '0',
          },
          follower: {
            total: '0',
          },
          id: Math.ceil(Math.random(16000) * 1000000),
          owner: {
            display_name: 'Meeyzt',
          },
        },
        ...rootState.currentUser.currentUsersLikedPlaylists,
      ];

      commit('currentUser/setCurrentUsersLikedPlaylists', p, { root: true });
    },
  },
};
