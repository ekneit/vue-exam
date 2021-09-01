import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allGiveAways: [],
    giveaway: null,
    sortedGiveAways: [],
  },
  mutations: {
    setAllGiveAways(state, playload) {
      state.allGiveAways = playload;
    },
    setGiveAways(state, playload) {
      state.giveaway = playload;
    },
    setSortedGiveAways(state, playload) {
      state.sortedGiveAways = playload;
    },
  },
  actions: {
    async getAllGiveAways({ commit }) {
      const giveaways = await axios.get(
        process.env.VUE_APP_BASE_URL_API + "/giveaways/all"
      );
      commit("setAllGiveAways", giveaways.data);
    },
    async getGiveAway({ commit }, id) {
      const giveaway = await axios.get(
        process.env.VUE_APP_BASE_URL_API + "/giveaways/id/" + id
      );
      commit("setGiveAways", giveaway.data);
    },
    async getSortedGiveAways({ commit }, sortData) {
      const sortedGiveAway = await axios.get(
        `${process.env.VUE_APP_BASE_URL_API}/giveaways/sort/${sortData.platform}/${sortData.type}/${sortData.sortBy}`
      );
      commit("setSortedGiveAways", sortedGiveAway.data);
    },
  },
});
