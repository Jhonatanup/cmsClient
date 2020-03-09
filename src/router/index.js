import Vue from 'vue'
import Router from 'vue-router'
import addArticles from '@/components/addArticles'
import users from '@/components/users'
import articles from '@/components/articles'
import view from '@/components/view'

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
      path: '/view',
      name: 'view',
      component: view
    }
  ]
})
