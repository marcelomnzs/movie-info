import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
    },

    {
      path: '/login',
      name: 'LoginPage',
      component: () => import('../views/Login.vue')
    },

    {
      path: '/signUp',
      name: 'SignUp',
      component: () => import('../views/SignUp.vue')
    },

    {
      path: '/goat',
      name: 'GoatList',
      component: () => import('../views/Goat.vue')
    },

    {
      path: '/topTrendings',
      name: 'TopTrendings',
      component: () => import('../views/TopTrendings.vue')
    },

    {
      path: '/search/:item',
      name: 'search',
      component: () => import('../views/Search.vue')
    },
  ]
})

export default router
