import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  {
    path: '/home',
    name: 'apartments',
    component: () => import(/* webpackChunkName: "apartments" */ '../views/Apartments.vue'),
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/createapartment',
    name: 'createapartment',
    component: () => import(/* webpackChunkName: "createapartment" */ '../views/createApartment.vue'),
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/editapartment/:id',
    name: 'editapartment',
    component: () => import(/* webpackChunkName: "editapartment" */ '../views/editApartment.vue'),
    meta: { 
      requiresAuth: true
    }
  },
  // {
  //   path: '/reviews',
  //   name: 'reviews',
  //   component: () => import(/* webpackChunkName: "reviews" */ '../views/reviews.vue')
  // },
  {
    path: '/createroomtype',
    name: 'createroomtype',
    component: () => import(/* webpackChunkName: "createroomtype" */ '../views/createRoomType.vue'),
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/editroomtype/:bid/:rid',
    name: 'editroomtype',
    component: () => import(/* webpackChunkName: "editroomtype" */ '../views/editRoomType.vue'),
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/bugreport',
    name: 'bugreport',
    component: () => import(/* webpackChunkName: "bugreport" */ '../views/bugReport.vue'),
    meta: { 
      requiresAuth: true
    }
  }
  
]

const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/') 
  } else {
    next() 
  }
})
export default router
