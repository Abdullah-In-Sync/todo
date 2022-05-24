import { createApp,  } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
// import firebase from './firebase'
import './firebase/index'

// import axios from 'axios'

// Vue.prototype.$axios = axios
// Vue.config.productionTip = false
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhpYH2YYk2hiPiaYJh-ShiePPwcAf-VJ8",
  authDomain: "my-todo-app-fdf5a.firebaseapp.com",
  projectId: "my-todo-app-fdf5a",
  storageBucket: "my-todo-app-fdf5a.appspot.com",
  messagingSenderId: "1065601241359",
  appId: "1:1065601241359:web:723b911c118a4d144f6e7a",
  measurementId: "G-FJH02NSMRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { auth }
// const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
let appp;
 auth.onAuthStateChanged( user=>{
  if (!appp) {
    if(user){
      console.log(user.uid);
    }
    appp=  createApp(App).use(store).use(router).mount('#app')
    
  }
})

