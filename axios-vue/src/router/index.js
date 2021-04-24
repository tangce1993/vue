import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/2-2',
    name: 'axios-vue',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/2-2.vue')
  },
  {
    path: '/2-3',
    name: '2-3axiso并发请求',
    component: () => import('@/views/2-3')
  },
  {
    path: '/3-1',
    name: '3-1创建axios实例',
    component: () => import('@/views/3-1')
  },
  {
    path: '/ContactList',
    name: '联系人列表',
    component: () => import('@/views/ContactList')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
