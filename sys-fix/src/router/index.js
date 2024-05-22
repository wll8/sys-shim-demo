import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/FixIng',
      name: 'FixIng',
      component: () => import('../views/FixIng.vue')
    },
    {
      path: '/FixRes',
      name: 'FixRes',
      component: () => import('../views/FixRes.vue')
    },
    {
      path: '/DoFix',
      name: 'DoFix',
      component: () => import('../views/DoFix.vue')
    },
  ]
})

export default router