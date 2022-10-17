import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Add from '../views/Add.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Add',
    name: 'Add',
    component: Add
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
