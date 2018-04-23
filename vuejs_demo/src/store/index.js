import Vue from 'vue'
import Vuex from 'vuex'
import commentModule from './modules/commentModule/comment'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    comment: commentModule
  }
})

export default store
