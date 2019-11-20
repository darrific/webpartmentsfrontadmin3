import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/apartments',
    name: 'apartments',
    component: () => import(/* webpackChunkName: "apartments" */ '../views/Apartments.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue')
  },
  {
    path: '/createapartment',
    name: 'createapartment',
    component: () => import(/* webpackChunkName: "createapartment" */ '../views/createApartment.vue')
  },
  {
    path: '/editapartment',
    name: 'editapartment',
    component: () => import(/* webpackChunkName: "editapartment" */ '../views/editApartment.vue')
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: () => import(/* webpackChunkName: "reviews" */ '../views/reviews.vue')
  },
  {
    path: '/createroomtype',
    name: 'createroomtype',
    component: () => import(/* webpackChunkName: "createroomtype" */ '../views/createRoomType.vue')
  },
  {
    path: '/editroomtype',
    name: 'editroomtype',
    component: () => import(/* webpackChunkName: "editroomtype" */ '../views/editRoomType.vue')
  },
  {
    path: '/bugreport',
    name: 'bugreport',
    component: () => import(/* webpackChunkName: "bugreport" */ '../views/bugReport.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
