import { createRouter, createWebHistory } from 'vue-router'
import MyTodos from '../views/MyTodos.vue'
// import firebase from 'firebase'
import {
  // getAuth,
  // createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
  // GoogleAuthProvider,
  // signInWithPopup,
  // signOut
  // currentUser
} from "firebase/auth";

const routes = [
  {
    path: '/',
    name: 'MyTodos',
    component: MyTodos,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/LogIn.vue'),
    meta:{
      requiresGuest: true
    }
  },
  {
    path: '/signup',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "SignUp" */ '../views/SignUp.vue'),
    meta:{
      requiresGuest: true
    }
  }
]




const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


// router.beforeEach((to,from,next)=>{
//   //Check for requireAuth guard
//   if(to.matched.some(record=> record.meta.requiresAuth)){
//     //Check if Not Logged in
//     if (!getAuth().currentUser) {
//       console.log("if not user",getAuth().currentUser);
//       // Go to Login
//       next({
//         path:'/login',
//         query:{
//           redirect:to.fullPath
//         }
//       });
//     }
//     else{
//       //proceed to route
//       console.log("not user else-",getAuth().currentUser.uid);
//       next()
//     }
//   }else if(to.matched.some(record=> record.meta.requiresGuest)){
//     //Check if is Logged in
//     if (getAuth().currentUser) {
//       console.log("if user exist");
//       // Go to Login
//       next({
//         path:'/',
//         query:{
//           redirect:to.fullPath
//         }
//       });
//     }
//     else{
//       //proceed to route
//       next()
//       console.log("user else");
//     }
//   }else{
//     //proceed to route
//     next()
//     console.log("last else");
//   }
// })


export default router
