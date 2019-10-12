import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    activeLink: undefined,
    drawer: false,
    links: [
      {
        text: 'Is This You?',
        path: '#products'
      },
      {
        text: 'Data Genie',
        path: '#data-genie'
      },
      {
        text: 'Consulting',
        path: '#consulting'
      },
      {
        text: 'Contact Us',
        path: '#contact'
      }
    ]
  },
  mutations: {
    SET_ACTIVE_LINK (state, link) {
      state.activeLink = link
    },
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  getters: {
    links: (state, getters) => {
      return state.links
    }
  },
  actions: {
    setActiveLink ({ commit }, link) {
      commit('SET_ACTIVE_LINK', link)
    }
  }
})

export default store
