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

            resolve();
        }).catch(() => {
          commit('setPlaylist', {
            images: [
              {
                url: 'https://seed-mix-image.spotifycdn.com/v6/img/artist/7rEIUw67hRTgievwuKQGSj/tr/large',
              },
            ],
            name: 'Boş çalma listesi',
            tracks: {
              items: [
                {
                  added_at: '1970-01-01T00:00:00Z',
                  track: {
                    album: {
                      external_urls: {
                        spotify: 'https://open.spotify.com/album/1rAOed7VySBV8B2EbHLqd3' },
                        id: '1rAOed7VySBV8B2EbHLqd3',
                        images:
                          [{
                            height: 640,
                            url: 'https://i.scdn.co/image/ab67616d0000b273a4270d88e52e8e986310b366',
                            width: 640,
                          }],
                        name: 'Selamiler Diyarı',
                      },
                    artists: [{
                        external_urls: {
                          spotify: 'https://open.spotify.com/artist/1dsKaRPU3HFSdlNyMmH5QI',
                        },
                        id: '1dsKaRPU3HFSdlNyMmH5QI',
                        name: 'Fatma Turgut',
                    }],
                    duration_ms: 132526,
                    external_urls: {
                      spotify: 'https://open.spotify.com/track/0nN6jOrfJL72IThPB0v0cu',
                    },
                      id: '0nN6jOrfJL72IThPB0v0cu',
                      name: 'Selamiler Diyarı',
                    },
                  liked: true,
                },
                {
                  added_at: '1970-01-01T00:00:00Z',
                  track: {
                    album: {
                      external_urls: {
                        spotify: 'https://open.spotify.com/album/1rAOed7VySBV8B2EbHLqd3' },
                        id: '1rAOed7VySBV8B2EbHLqd3',
                        images:
                          [{
                            height: 640,
                            url: 'https://i.scdn.co/image/ab67616d0000b273a4270d88e52e8e986310b366',
                            width: 640,
                          }],
                        name: 'Selamiler Diyarı',
                      },
                    artists: [{
                        external_urls: {
                          spotify: 'https://open.spotify.com/artist/1dsKaRPU3HFSdlNyMmH5QI',
                        },
                        id: '1dsKaRPU3HFSdlNyMmH5QI',
                        name: 'Fatma Turgut',
                    }],
                    duration_ms: 132526,
                    external_urls: {
                      spotify: 'https://open.spotify.com/track/0nN6jOrfJL72IThPB0v0cu',
                    },
                      id: '0nN6jOrfJL72IThPB0v0cu',
                      name: 'Selamiler Diyarı',
                    },
                  liked: true,
                },
                {
                  added_at: '1970-01-01T00:00:00Z',
                  track: {
                    album: {
                      external_urls: {
                        spotify: 'https://open.spotify.com/album/1rAOed7VySBV8B2EbHLqd3' },
                        id: '1rAOed7VySBV8B2EbHLqd3',
                        images:
                          [{
                            height: 640,
                            url: 'https://i.scdn.co/image/ab67616d0000b273a4270d88e52e8e986310b366',
                            width: 640,
                          }],
                        name: 'Selamiler Diyarı',
                      },
                    artists: [{
                        external_urls: {
                          spotify: 'https://open.spotify.com/artist/1dsKaRPU3HFSdlNyMmH5QI',
                        },
                        id: '1dsKaRPU3HFSdlNyMmH5QI',
                        name: 'Fatma Turgut',
                    }],
                    duration_ms: 132526,
                    external_urls: {
                      spotify: 'https://open.spotify.com/track/0nN6jOrfJL72IThPB0v0cu',
                    },
                      id: '0nN6jOrfJL72IThPB0v0cu',
                      name: 'Selamiler Diyarı',
                    },
                  liked: true,
                },
                {
                  added_at: '1970-01-01T00:00:00Z',
                  track: {
                    album: {
                      external_urls: {
                        spotify: 'https://open.spotify.com/album/1rAOed7VySBV8B2EbHLqd3' },
                        id: '1rAOed7VySBV8B2EbHLqd3',
                        images:
                          [{
                            height: 640,
                            url: 'https://i.scdn.co/image/ab67616d0000b273a4270d88e52e8e986310b366',
                            width: 640,
                          }],
                        name: 'Selamiler Diyarı',
                      },
                    artists: [{
                        external_urls: {
                          spotify: 'https://open.spotify.com/artist/1dsKaRPU3HFSdlNyMmH5QI',
                        },
                        id: '1dsKaRPU3HFSdlNyMmH5QI',
                        name: 'Fatma Turgut',
                    }],
                    duration_ms: 132526,
                    external_urls: {
                      spotify: 'https://open.spotify.com/track/0nN6jOrfJL72IThPB0v0cu',
                    },
                      id: '0nN6jOrfJL72IThPB0v0cu',
                      name: 'Selamiler Diyarı',
                    },
                  liked: true,
                },
                {
                  added_at: '1970-01-01T00:00:00Z',
                  track: {
                    album: {
                      external_urls: {
                        spotify: 'https://open.spotify.com/album/1rAOed7VySBV8B2EbHLqd3' },
                        id: '1rAOed7VySBV8B2EbHLqd3',
                        images:
                          [{
                            height: 640,
                            url: 'https://i.scdn.co/image/ab67616d0000b273a4270d88e52e8e986310b366',
                            width: 640,
                          }],
                        name: 'Selamiler Diyarı',
                      },
                    artists: [{
                        external_urls: {
                          spotify: 'https://open.spotify.com/artist/1dsKaRPU3HFSdlNyMmH5QI',
                        },
                        id: '1dsKaRPU3HFSdlNyMmH5QI',
                        name: 'Fatma Turgut',
                    }],
                    duration_ms: 132526,
                    external_urls: {
                      spotify: 'https://open.spotify.com/track/0nN6jOrfJL72IThPB0v0cu',
                    },
                      id: '0nN6jOrfJL72IThPB0v0cu',
                      name: 'Selamiler Diyarı',
                    },
                  liked: true,
                },
              ],
              total: 5,
            },
            followers: {
              total: '2',
            },
            id: Math.ceil(Math.random(16000) * 1000000),
            owner: {
              id: 123222,
              display_name: 'Meeyzt',
            },
            description: 'Boş bir playlist',
          });
        });
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
      };

      axios.post('https://api.spotify.com/v1/users/them4nq4/playlists', playlistDatas).then((res) => {
        commit('currentUser/addPlaylistToCurrentUserLikedPlaylists', res.data, { root: true });
      });
    },
  },
};
