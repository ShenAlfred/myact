/**
 * Created by shenalfred on 17/5/14.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentIndex: 0
  },
  mutations: {
    setCurrentIndex (state, value) {
      state.currentIndex = value;
    }
  },
  getters: {
    getCurrentIndex: state => {
      return state.currentIndex;
    }
  }
})

export default store
