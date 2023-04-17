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
    path: '/countdown-timer-circle',
    name: 'CountdownTimerCircle',
    component: () => import('../views/CountDownTimerCircleView.vue')
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
    component: () => import('../views/InputTypeRangeView.vue')
  },
  {
    path: '/markdown-editor',
    name: 'MarkdownEditor',
    component: () => import('../views/MarkdownEditorView.vue')
  },
  {
    path: '/ckeditor',
    name: 'CKEditor',
    component: () => import('../views/CKEditorView.vue')
  },
  {
    path: '/accordeon',
    name: 'AccordeonView',
    component: () => import('../views/AccordeonView.vue')
  },
  {
    path: '/dialog',
    name: 'DialogView',
    component: () => import('../views/DialogView.vue')
  },
  {
    path: '/json-formatter',
    name: 'JsonFormatter',
    component: () => import('../views/JsonFormatterView.vue')
  },
  { path: '/:pathMatch(.*)*', name: 'Home', component: Home },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
