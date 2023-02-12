import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import contactIndex from '../pages/contact-index.vue'
import contactDetails from '../pages/contact-details.vue'
import contactEdit from '../pages/contact-edit.vue'

const routerOptions = {
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/contact',
      component: contactIndex
    },
    {
      path: '/contact/:_id',
      component: contactDetails
    },
    {
      path: '/contact/edit/:_id?',
      component: contactEdit
    },
    {
      path: '/about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/AboutView.vue')
    }
  ]
}
const router = createRouter(routerOptions)

export default router
