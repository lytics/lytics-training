import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import ProductView from '../views/ProductView.vue'
import BlogView from '../views/BlogView.vue'
import PostView from '../views/PostView.vue'
import ContactView from '../views/ContactView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import AccountView from '../views/AccountView.vue'
import AllergensView from '../views/AllergensView.vue'
import NutritionView from '../views/NutritionView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuView
  },
  {
    path: '/menu/:id',
    name: 'product',
    component: ProductView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/blog/:slug',
    name: 'post',
    component: PostView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView
  },
  {
    path: '/account',
    name: 'account',
    component: AccountView
  },
  {
    path: '/allergens',
    name: 'allergens',
    component: AllergensView
  },
  {
    path: '/nutrition',
    name: 'nutrition',
    component: NutritionView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
