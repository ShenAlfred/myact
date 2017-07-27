/**
 * Created by shenalfred on 17/5/14.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    all: {
      lists: [],
      pageNumber: 1
    },
    my: {
      lists: [],
      pageNumber: 1
    }
  },
  mutations: {

  }
})

export default store
