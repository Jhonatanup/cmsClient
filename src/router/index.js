import Vue from 'vue'
import Router from 'vue-router'
import addArticles from '@/components/addArticles'
import users from '@/components/users'
import articles from '@/components/articles'

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
    }
  ]
})
