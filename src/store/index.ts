import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    places: []
  },
  mutations: {
    setPlaces(state, places) {
      state.places = places
    }
  },
  actions: {},
  modules: {}
})
