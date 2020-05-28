import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Lx from './modules/lx'
Router.prototype.isBack = false
Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    component: Home,
    children: [
      ...Lx,
    ]
  }]
})