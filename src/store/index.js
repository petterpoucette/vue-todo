import Vue from 'vue'
import Vuex from 'vuex'
import * as task from '@/store/modules/task.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    task
  }
})
