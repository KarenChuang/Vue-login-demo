import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    usersList: [
      {
        name: 'Max', age: 11, id: 1, registered: false
      },
      {
        name: 'Mary', age: 15, id: 2, registered: false
      },
      {
        name: 'Karen', age: 21, id: 3, registered: false
      },
      {
        name: 'Davies', age: 21, id: 4, registered: false
      },
    ],
    registrationsList: []
  },
  getters,
  // sync
  mutations,
  // async
  actions
})
