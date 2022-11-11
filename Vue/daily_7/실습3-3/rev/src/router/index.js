import Vue from 'vue'
import VueRouter from 'vue-router'
import SsaFlower from '@/views/SsaFlower'
import NoColor from '@/views/NoColor'
import SsaFleaf from '@/views/SsaFleaf'
import SsaFling from '@/views/SsaFling'
import NotFound404 from '@/views/NotFound404'
import HomePage from '@/views/HomePage'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/ssaflower',
    name: 'ssaflower',
    component: SsaFlower
  },
  {
    path: '/nocolor',
    name: 'nocolor',
    component: NoColor
  },
  {
    path: '/ssafleaf',
    name: 'ssafleaf',
    component: SsaFleaf
  },
  {
    path: '/ssafling',
    name: 'ssafling',
    component: SsaFling
  },
  {
    path: '/NotFound404',
    name: '404-not-found',
    component: NotFound404
  },
  {
    path: '*',
    redirect: '/NotFound404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
