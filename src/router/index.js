import Vue from 'vue'
import VueRouter from 'vue-router'
import Plan from '../views/Plan.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Plan',
  //   component: Plan
  // },
  {
    path: '/plan',
    name: 'Plan',
    component: Plan
  },
  {
    path: '/mealplan',
    name: 'MealPlan',
    component: () => import(/* webpackChunkName: "mealplan" */ '../views/MealPlan.vue')
  },
  {
    path: '/favorites',
    name: 'Favorites',
    // route level code-splitting
    // this generates a separate chunk (favorites.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "favorites" */ '../views/Favorites.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (profile.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },
  {
    path: '/',
    name: 'Browse',
    // route level code-splitting
    // this generates a separate chunk (profile.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "browse" */ '../views/Browse')
  },
  {
    path: '/emptyrecipe',
    name: 'EmptyRecipe',
    // route level code-splitting
    // this generates a separate chunk (profile.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "browse" */ '../views/EmptyRecipe.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
