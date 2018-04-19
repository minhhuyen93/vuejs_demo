import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import LearnEnergys from '@/components/LearnEnergys'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/learnEnergys',
      name: 'LearnEnergys',
      component: LearnEnergys
    }
  ]
})
