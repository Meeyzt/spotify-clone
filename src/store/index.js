import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import collectionData from '@/collectionData.json';

Vue.use(Vuex);

const config = {
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer BQCybnE4YgcLrWZJlVX5cjsKtRtDYFCVkXEnUsEvKBKPoM1NaU7UxyeZq7D67aa6mYSaXBeO0OfZ7aGTa6Qgj1DqZLThKtMAUmT1c_zt7R0DfJdLVEBUfQSB8mtqPB7fsB7Yeel4FB3k51kkW1Ik',
    'Content-Type': 'application/json',
  },
};

const config2 = {
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer BQDmG0FGj4gEGsKv_zoOpQvVHGQ948lXK_EMdw_ah-LytUSFeMNHI3xOZpSPguzKNb8UwT04EK_T4P6KrX3Vvleg6mH0O-k2yB9oSN2-Xakrx7HAV5h2AHMDQYvgbwROjgkUeNA4hTmkU8FSHiimKJWYT13qbvvuI1AW',
    'Content-Type': 'application/json',
  },
};

export default new Vuex.Store({
  state: {
    isAuthenticated: true,
    collectionData,
    playlists: {},
    categories: {},
    featured: {},
    artists: {},
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
  },
  actions: {
    getplaylistData(context) {
      axios.get('https://api.spotify.com/v1/browse/featured-playlists?country=TR&limit=6', config)
        .then((res) => context.commit('setPlaylists', res.data.playlists.items))
        .catch((e) => console.log(e));
    },
    getCategoryData(context) {
      axios.get('https://api.spotify.com/v1/browse/categories?country=TR&locale=TR&limit=6&offset=5', config)
        .then((res) => context.commit('setCategories', res.data.categories.items))
        .catch((e) => console.log(e));
    },
    getFeatured(context) {
      axios.get('https://api.spotify.com/v1/browse/featured-playlists?country=TR&locale=TR&timestamp=2021-10-18T09%3A00%3A00.000Z&limit=10&offset=5', config)
        .then((res) => context.commit('setFeatured', res.data.playlists.items))
        .catch((e) => console.log(e));
    },
    getArtists(context) {
      axios.get('https://api.spotify.com/v1/me/following?type=artist&limit=50', config2)
        .then((res) => context.commit('setArtists', res.data.artists.items))
        .catch((e) => console.log(e));
    },
  },
  modules: {
  },
});
