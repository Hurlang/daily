import Vue from 'vue'
import VueRouter from 'vue-router'
// import TheLunch from '@/views/TheLunch'
// import TheLotto from '@/views/TheLotto'

Vue.use(VueRouter)

const routes = [
  {
    path: '/lunch',
    name: 'lunch',
    component: () => import('../views/TheLunch.vue')
  },
  {
    path: '/lotto/6',
    name: 'lotto',
    component: () => import('../views/TheLotto.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
