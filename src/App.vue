<template>
<div class="flex flex-col min-h-screen justify-between">


   
<navbar-comp/>
  
  <router-view/>
  <footer-comp/>
</div>
</template>
<script>
// import FooterComp from "./components/FooterComp.vue";
import FooterComp from "./components/FooterComp.vue";
import NavbarComp from "./components/NavbarComp.vue";



export default{
    components: { FooterComp, NavbarComp }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
body{
  background-color:#decdcd7a;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
