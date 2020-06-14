import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import Settings from '@/views/Settings.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import { auth } from '@/firebase'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/places',
    name: 'Places',
    component: () => import('../views/Places.vue')
  },
  {
    path: '/places/new',
    name: 'New place',
    component: () => import('../views/NewPlace.vue'),
    meta: {
      authGuard: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta?.authGuard && !auth.currentUser)
    next({ name: 'Login', query: { redirect: to.path } })
  else next()
})

export default router
