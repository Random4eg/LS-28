import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
   
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../views/FavoritesView.vue')
    },
    {
      path: '/sidebar',
      name: 'sidebar',
      component: () => import('../views/SidebarView.vue')
    },
    {
      path: '/trending',
      name: 'trending',
      component: () => import('../views/TrendingView.vue')
    }
  ]
})

export default router
