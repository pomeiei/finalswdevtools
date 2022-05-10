import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue') // set home as path '/'
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')// set login as path '/login'
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/profile.vue')// set login as path '/login'
  },
  
  
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
