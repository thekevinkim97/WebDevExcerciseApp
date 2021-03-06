import Vue from 'vue';
import VueRouter from 'vue-router';
import { User } from "../models/my-fetch";

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Profile from '../views/Profile.vue';
import Exercises from '../views/Exercises.vue';

import Login from '../views/Login';
import SignOut from '../views/SignOut';

import ChangeWeight from '../views/ChangeWeight';
import ChangeHeight from '../views/ChangeHeight';

import MealPlan from '../views/MealPlan';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,

    beforeEnter: (to, from, next) => {
      if(User.User_Id == null) {
        next( { name: "login" } )
      } else {
        next();
      }
    }
  },
  {
    path: '/exercises',
    name: 'exercises',
    component: Exercises,
    
    beforeEnter: (to, from, next) => {
      if(User.User_Id == null) {
        next( { name: "login" } )
      } else {
        next();
      }
    }
  },

  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/signout',
    name: 'signout',
    component: SignOut,
  },
  {
    path: '/changetheweight',
    name: 'change-Weight',
    component: ChangeWeight,
  },
  {
    path: '/changetheheight',
    name: 'change-height',
    component: ChangeHeight,
  },
  {
    path: '/mealplan',
    name: 'mealplan',
    component: MealPlan,
    
    beforeEnter: (to, from, next) => {
      if(User.User_Id == null) {
        next( { name: "login" } )
      } else {
        next();
      }
    }
  },
];

const router = new VueRouter({
  routes,
});

export default router;
