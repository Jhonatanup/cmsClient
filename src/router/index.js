import Vue from 'vue'
import Router from 'vue-router'
import addArticles from '@/components/addArticles'
import users from '@/components/users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'addArticles',
      component: addArticles
    },
    {
      path: '/users',
      name: 'users',
      component: users
    }
  ]
})
