import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  { path: '/', component: 'HomePage' },
  { path: '/about', component: 'AboutPage' },
  { path: '/test', component: 'ApiTest'},
  { path: '/DBtest', component: 'DbTest'},
  { path: '*', component: 'NotFound' },
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})

Vue.use(Router)

export default new Router({
  routes,
  mode: 'history'
})