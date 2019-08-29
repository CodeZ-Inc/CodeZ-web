import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    activeLink: undefined
  },
  mutations: {
    SET_ACTIVE_LINK (state, link) {
      state.activeLink = link
    }
  },
  getters: {},
  actions: {
    setActiveLink ({ commit }, link) {
      commit('SET_ACTIVE_LINK', link)
    }
  }
})

export default store
