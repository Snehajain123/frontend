import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Registeration from '../views/Registration.vue'
import Login from '../views/login.vue'
import status from '../views/status.vue'
import addStatus from '../views/addStatus.vue'
import logout from '../views/logout.vue'
import updateStatus from '../views/updateStatus.vue'
import deleteStatus from '../views/deleteStatus'


const routes = [
  {
    path: '/statusupload',
    name: 'Home',
    component: Home
  },
  {
    path: '/deleteStatus/:id',
    name: 'deleteStatus',
    component: deleteStatus
  },
  {
    path: '/updateStatus/:id',
    name: 'updateStatus',
    component: updateStatus
  },
  {
    path: '/logout',
    name: 'logout',
    component: logout
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/addStatus',
    name: 'addStatus',
    component: addStatus
  },
  {
    path: '/Registration',
    name: 'Registeration',
    component: Registeration
  },
  {
      path: '/status/:id',
      name: 'status',
      component: status
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
