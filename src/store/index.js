import Vue from 'vue';
import Vuex from 'vuex';
import { storage } from '../utils/tokenLocalStore';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      /**
       * 
       * 
       */
      token: storage.localStorageToken || ''
    }
  },
  mutations: {
    refreshToken(token) {
      state.user.token = token
      storage.localStorageToken = token
    },
    logout() {
      state.user.token = ''
      storage.localStorageToken
    }
  },
  actions: {
  },
  modules: {
  }
})
