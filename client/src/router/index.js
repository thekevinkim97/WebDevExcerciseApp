import Vue from 'vue';
import VueRouter from 'vue-router';
import { User } from "../models/my-fetch";

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Profile from '../views/Profile.vue';
import Exercises from '../views/Exercises.vue';
import AddFriend from '../views/AddFriend';
import AddExercise from '../views/AddExercise';
import DeleteFriend from '../views/DeleteFriend';
import DeleteExercise from '../views/DeleteExercise';
import Login from '../views/Login';
import SignOut from '../views/SignOut';

import ChangeWeight from '../views/ChangeWeight'
import ChangeHeight from '../views/ChangeHeight'

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
    path: '/addfriend',
    name: 'add-friend',
    component: AddFriend,
  },
  {
    path: '/addexercises',
    name: 'add-exercise',
    component: AddExercise,
  },
  {
    path: '/deleteexercises',
    name: 'delete-exercise',
    component: DeleteExercise,
  },
  {
    path: '/deletefriend',
    name: 'delete-friend',
    component: DeleteFriend,
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
    path: '/changeweight',
    name: 'changeheight',
    component: ChangeWeight,
  },
  {
    path: '/changeheight',
    name: 'changeheight',
    component: ChangeHeight,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
