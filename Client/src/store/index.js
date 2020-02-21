/**
 * Vuex 最核心的store管理对象
 */

import Vue from 'vue'
import Vuex from 'vuex'

import state from './modules/state'
import mutations from './modules/mutations'
import actions from './modules/actions'
import getters from './modules/getters'

// 注册 Vuex
Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
