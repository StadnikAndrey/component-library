import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/carousel-splide',
    name: 'Splider',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CarouselSplider.vue')
  },
  {
    path: '/countdown-timer',
    name: 'CountdownTimer',     
    component: () => import('../views/CountdownTimer.vue')
  },
  {
    path: '/vue-chartjs',
    name: 'VueChartjs',
    component: () => import('../views/VueChartjs.vue')
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import('../views/Table1.vue')
  },
  {
    path: '/image-upload',
    name: 'LoadFiles',
    component: () => import('../views/ImageUpload.vue')
  },
  {
    path: '/input-type-range',
    name: 'InputTypeRange',
    component: () => import('../views/InputTypeRange.vue')
  },
  { path: '/:pathMatch(.*)*', name: 'Home', component: Home },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
