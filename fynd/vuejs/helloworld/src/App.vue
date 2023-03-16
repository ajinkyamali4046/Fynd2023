// <template>
//   <img alt="Vue logo" src="./assets/logo.png">
//   <HelloWorld msg="Welcome to Your Vue.js App"/>
// </template>

// <script>
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }
// </script>

<!-- // <style>
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
// </style> -->


<script setup>
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import eg1 from './components/eg1.vue'
</script>

<template>
 <header>
 <div class="wrapper">
 
  <br>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/eg1">Example</RouterLink>
  </nav>
  <br>

 </div>

 </header>

 <RouterView/>

</template>

