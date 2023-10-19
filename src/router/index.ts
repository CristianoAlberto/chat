import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import chat from '../views/chat.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'chat',
    component: chat
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
