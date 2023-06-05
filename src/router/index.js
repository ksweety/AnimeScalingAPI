import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardPage from '../views/DashboardPage.vue'
import AboutPage from '../views/AboutPage.vue'
import CharacterPage from "../views/CharacterPage.vue" 
import ScalingPage from "../views/ScalingPage.vue"

const routes = [
   {
      path: '/',
      component: DashboardPage
   },
   {
    path: '/about',
    component: AboutPage
 },  
 {
    path: "/character", 
    component: CharacterPage
 }, 
 { 
    path: "/scaling", 
    component: ScalingPage

 }
 
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})
export default router
