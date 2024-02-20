import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Page from '@/views/Page'
import Pagedetail from '@/views/Pagedetail'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Search from '@/views/Search'
import User from '@/views/User'
import Welcome from '@/views/Welcome'
import Article from '@/views/Article'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/page',
    name: 'page',
    component: Page,
  },
  {
    path: '/pagedetail/:id',
    name: 'pagedetail',
    component: Pagedetail
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/search/:value',
    name: 'search',
    component: Search
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/article',
    name: 'article',
    component: Article
  }
]

const router = new VueRouter({
  routes
})

export default router
