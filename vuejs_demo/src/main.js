// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'

import LearnEnergys from './components/LearnEnergys'

import HelloWorld from './components/HelloWorld'

import Childlearnenergy from './components/Childlearnenergy'

import BootstrapVue from 'bootstrap-vue'

import store from './store/index'

import Done from './components/Done'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App,
    HelloWorld,
    LearnEnergys,
    BootstrapVue,
    Childlearnenergy,
    Done
  },
  template: '<App/>'
})
