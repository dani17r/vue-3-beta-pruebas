
// initial state
const state = {
  count: 5
}

// getters
const getters = {}

// mutations
const mutations = {
  maxCount (state) {
    state.count++
  },

  minCount (state) {
    state.count--
  }
}

// actions
const actions = {
  updMaxCount ({ commit }) {
    commit('maxCount')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
