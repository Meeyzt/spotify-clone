import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import collectionData from '@/collectionData.json';

Vue.use(Vuex);

const config = {
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer BQAiMzu_UtFpNQbHR_Ksw7tZW7XghMt3ndxCk6_stsdumMFOz5Cn3f7IsQD_qPU9o7_axtIEwFUJCb27PYhBL5gmWs8UCpeE0_hnp94SraWIHsSQ8hIy4B6JYDFTD9DEn_ytdW1dkgIC9OgbGiJm3luDGztIPIPQyh45BL-qWSvmFQ5o9A0FVAAVwZTVJptB',
    'Content-Type': 'application/json',
  },
};

export default new Vuex.Store({
  state: {
    isAuthenticated: true,
    collectionData,
    playlists: null,
    categories: null,
    featured: null,
    artists: null,
    saved: null,
  },
  getters: {
    playlists(state) {
      return (state.playlists !== null ? state.playlists : collectionData);
    },
    categories(state) {
      return (state.categories !== null ? state.categories : collectionData);
    },
    featureds(state) {
      return (state.featured !== null ? state.featured : collectionData);
    },
    artists(state) {
      return (state.artists !== null ? state.artists : collectionData);
    },
    saved(state) {
      return (state.saved !== null ? state.saved : collectionData);
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
  },
  actions: {
    getplaylistData({ commit }) {
      axios.get('https://api.spotify.com/v1/browse/featured-playlists?country=TR&limit=6', config)
        .then((res) => commit('setPlaylists', res.data.playlists.items))
        .catch((e) => console.log(e));
    },

    getCategoryData({ commit }) {
      axios.get('https://api.spotify.com/v1/browse/categories?country=TR&locale=TR&limit=6&offset=5', config)
        .then((res) => commit('setCategories', res.data.categories.items))
        .catch((e) => console.log(e));
    },
    getFeatured({ commit }) {
      axios.get('https://api.spotify.com/v1/browse/featured-playlists?country=TR&locale=TR&timestamp=2021-10-18T09%3A00%3A00.000Z&limit=10&offset=5', config)
        .then((res) => commit('setFeatured', res.data.playlists.items))
        .catch((e) => console.log(e));
    },
    getArtists({ commit }) {
      axios.get('https://api.spotify.com/v1/me/following?type=artist&limit=50', config)
        .then((res) => commit('setArtists', res.data.artists.items))
        .catch((e) => console.log(e));
    },
    getSaved() {
      axios.get('https://api.spotify.com/v1/me/tracks?market=TR&limit=10&offset=5', config)
        .then((res) => this.commit('setSaved', res.data.items))
        .catch((e) => console.log(e));
    },
  },
});
