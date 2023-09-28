import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Addtask from '../components/Addtask.vue';
import store from "../stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Addtask,
      meta : {
        isAuthenticate : false
    }
    }


   
    
  ]
})


router.beforeEach((to,from,next)=>{
  const state = store()
  if(to.meta.isAuthenticate == true && !state.isAuthenticate){
      next('/')
  }else{
      next()
  }
})

export default router
