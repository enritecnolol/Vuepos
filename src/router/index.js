import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Sale.vue";
import Login from "../views/Login";
import store from '../store'

Vue.use(Router);

export const requireAuth = (to, from, next) => {
  if(store.getters['account/isLogged']){
    next();
    return
  }
  next('/login');
};

export const requireGuest = (to, from, next) => {
  if(!store.getters['account/isLogged']){
    next();
    return
  }
  next('/');
};


export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      beforeEnter: requireAuth
    },
    {
      path: "/products",
      name: "products",
      meta: { requiresAuth: true },
      component: () => import("../views/Products.vue"),
      beforeEnter: requireAuth
    },
    {
      path: "/dashboard",
      name: "dashboard",
      meta: { requiresAuth: true },
      component: () => import("../views/Dashboard.vue"),
      beforeEnter: requireAuth
    },
    {
      path: "/holdSale",
      name: "holdSale",
      meta: { requiresAuth: true },
      component: () => import("../views/HoldSale.vue"),
      beforeEnter: requireAuth
    },
    {
      path: "/login",
      name: "Login",
      component:Login,
      beforeEnter: requireGuest
    }
  ]
});
