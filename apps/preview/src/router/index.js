import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../views/Home.vue')
const Episode = () => import('../views/Episode.vue')

export function createRouter() {
  return new Router({
    mode: 'history',
    fallback: false,
    routes: [
      {
        path: '/',
        component: Home,
        name: 'home'
      },
      {
        path: '/episode/:id',
        component: Episode,
        name: 'episode'
      }
    ]
  })
}
