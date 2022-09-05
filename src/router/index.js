import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/about',
    name: 'about',
   component: () => import('../views/about.vue')
  },
  {
    path: '/contact',
    name: 'contact',
   component: () => import('../views/contact.vue')
  },
 {
    path: '/shop',
    name: 'shop',
   component: () => import('../views/shop.vue')
  },
  {
    path: '/shop/:id',
    name: 'item',
   component: () => import('../views/item.vue')
  },
  {
    path: '/cart',
    name: 'cart',
   component: () => import('../views/cart.vue')
  },
  {
    path: '/admin',
    name: 'admin',
   component: () => import('../views/admin.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
