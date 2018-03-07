import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'
import util from '../util/common'
import { removeCookie } from '../util/common'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: 0,
    userId: 0,
    mobile: '',
    avatarUrl: '',
    username: '',
    account: ''
  },
  mutations: {
    [types.CHANGE_TOKEN](state, res) {
      if (res) {
        util.setLocal(res, 'Token', false)
      } else {
        res = util.getLocal('Token')
      }
      if (!res) {
        return
      }
      state.account = res.account
      state.token = res.authToken
      if (res.userId) {
        state.userId = res.userId
      }
    },
    [types.USER_SIGNOUT](state) {
      util.removeLocal('Token')
      Object.keys(state).forEach(element => {
        Vue.delete(state, element)
      })
    }
  }
})

