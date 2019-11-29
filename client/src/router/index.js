import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import Exercises from '../views/Exercises.vue';
import AddFriend from '../views/AddFriend';
import AddExercise from '../views/AddExercise';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
  },
  {
    path: '/exercises',
    name: 'exercises',
    component: Exercises,
  },
  {
    path: '/addfriend',
    name: 'add-friend',
    component: AddFriend,
  },
  {
    path: '/addexercise',
    name: 'add-exercise',
    component: AddExercise,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
