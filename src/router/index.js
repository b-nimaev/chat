import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChatSearch from '@/views/Chat/ChatSearch.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/ProfileView.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import( /* webpackChunkName: "chat" */ '@/views/Chat/ChatView.vue'),
    children: [
      {
        path: '',
        component: ChatSearch
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
