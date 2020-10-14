import TaskService from '@/service/TaskService'

export const namespaced = true

export const state = {
  tasks: [],
  task: {}
}

export const mutations = {
  ADD_TASK(state, task) {
    state.tasks.push(task)
  },
  SET_TASKS(state, tasks) {
    state.tasks = tasks
  },
  SET_TASK(state, task) {
    state.task = task
  }
}
export const actions = {
  fetchTasks({ commit }) {
    TaskService.getTasks()
      .then(response => {
        commit('SET_TASKS', response.data)
      })
      .catch(error => {
        console.log(
          'There was a problem with fetching the events ' + error.message
        )
      })
  },
  editTaskTitle({ commit }, task) {
    let tasks = state.tasks
    TaskService.editTaskTitle(task.id, task.title)
      .then(() => {
        for (const i in tasks) {
          if (tasks[i].id === task.id) {
            tasks[i].title = task.title
            commit('SET_TASKS', tasks)
            break
          }
        }
      })
      .catch(error => {
        console.log(
          'There was a problem with edititing the title of the event ' +
            error.message
        )
      })
  },
  deleteTask({ commit }, id) {
    TaskService.deleteTask(id)
      .then(() => {
        let tasks = state.tasks
        for (const i in tasks) {
          if (tasks[i].id === id) {
            tasks.splice(i, 1)
            commit('SET_TASKS', tasks)
            break
          }
        }
      })
      .catch(error => {
        console.log(
          'There was a problem with deleting the task' + error.message
        )
      })
  },
  setNewTask({ commit }, title) {
    const id = Math.floor(Math.random() * 20000)
    const task = {
      title: title,
      id: id
    }
    return TaskService.postTask(task)
      .then(() => {
        commit('ADD_TASK', task)
      })
      .catch(error => {
        console.log('There was a problem with adding the task' + error.message)
      })
  }
}

export const getters = {
  getTaskByID: state => id => {
    return state.tasks.find(task => task.id === id)
  }
}
