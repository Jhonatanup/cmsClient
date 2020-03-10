import Vue from 'vue'
import Router from 'vue-router'
import addArticles from '@/components/addArticles'
import addUsers from '@/components/addUsers'
import users from '@/components/users'
import articles from '@/components/articles'
import viewArticles from '@/components/viewArticles'
import viewUsers from '@/components/viewUsers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'articles',
      component: articles
    },
    {
      path: '/users',
      name: 'users',
      component: users
    },
    {
      path: '/addArticles',
      name: 'addArticles',
      component: addArticles
    },
    {
      path: '/addUsers',
      name: 'addUsers',
      component: addUsers
    },
    {
      path: '/viewArticles/:viewId',
      name: 'viewArticles',
      component: viewArticles
    },
    {
      path: '/viewUsers/:viewId',
      name: 'viewUsers',
      component: viewUsers
    }
  ]
})
