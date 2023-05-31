import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'

const routes = [
   {
      path: '/',
      component: HomePage
   },
   {
    path: '/',
    component: AboutPage
 },
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})
export default router
