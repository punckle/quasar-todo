import Vue from 'vue'

const state = {
  tasks: {
    'ID1': {
      name: 'Go to shop',
      completed: false,
      dueDate: '2020/11/05',
      dueTime: '18:30'
    },
    'ID2': {
      name: 'Get bananas',
      completed: false,
      dueDate: '2020/11/08',
      dueTime: '18:30'
    },
    'ID3': {
      name: 'Get apples',
      completed: false,
      dueDate: '2020/11/30',
      dueTime: '18:30'
    }
  }
}

const mutations = {
  UPDATE_TASK(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  DELETE_TASK(state, id) {
    Vue.delete(state.tasks, id)
  }
}

const actions = {
  updateTask({ commit }, payload) {
    commit('UPDATE_TASK', payload)
  },
  deleteTask({ commit }, id) {
    commit('DELETE_TASK', id)
  }
}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
