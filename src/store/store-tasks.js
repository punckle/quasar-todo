import Vue from 'vue'
import { uid } from 'quasar'

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
  },
  ADD_TASK(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task)
  }
}

const actions = {
  updateTask({ commit }, payload) {
    commit('UPDATE_TASK', payload)
  },
  deleteTask({ commit }, id) {
    commit('DELETE_TASK', id)
  },
  addTask({ commit }, task) {
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }
    commit('ADD_TASK', payload)
  }
}

const getters = {
  tasksTodo: (state) => {
    let tasks = {}
    Object.keys(state.tasks).forEach(function (key) {
      let task = state.tasks[key]
      if (!task.completed) {
        tasks[key] = task
      }
    })
    return tasks
  },
  tasksCompleted: (state) => {
    let tasks = {}
    Object.keys(state.tasks).forEach(function (key) {
      let task = state.tasks[key]
      if (task.completed) {
        tasks[key] = task
      }
    })
    return tasks
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
