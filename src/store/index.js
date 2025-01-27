import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    BaseApi: process.env.VUE_APP_API_BASE_URL
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})
