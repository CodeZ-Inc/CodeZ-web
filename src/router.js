import Vue from 'vue'
import Router from 'vue-router'
import Parallax from './views/Para'
// import Foundary from './views/foundary'

Vue.use(Router)

export default new Router({
  mode: 'history',
  caseSensitive: false,
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'foundary',
      component: Parallax
    },
    {
      path: '/para',
      name: 'para',
      component: Parallax
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/products',
      name: 'products',
      component: () => import(/* webpackChunkName: "about" */ './views/Products')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "about" */ './views/Contact')
    },
    {
      path: '*',
      name: '404',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
