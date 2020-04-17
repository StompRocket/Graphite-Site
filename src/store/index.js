import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appUrl: "https://app.graphitewriter.com/"
  },
  getters: {
    appUrl(state) {
      return state.appUrl
    }
  },
  mutations: {
    urlLang(state, lang) {
      state.appUrl = `https://app.graphitewriter.com/?lang=${lang}`
      console.log("set lang", lang)
    }
  },
  actions: {},
  modules: {}
})