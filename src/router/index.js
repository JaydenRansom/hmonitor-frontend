import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import file from '@/components/filesystem'
import login from '@/components/login'
import header from '@/components/header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/file',
      name: 'file',
      component: file
    }
  ]
})
