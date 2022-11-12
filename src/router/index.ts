
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import demo from '../pages/demo.vue'

const history = createWebHistory()

const routes = createRouter({
  history,
  routes: [
    {
      path: '/',
      component:Home,
      name: 'Home',
     
    },
    {
      path: '/demo',
      component:demo,
      name: 'demo',
      
    },
  ]
})


export default routes;


