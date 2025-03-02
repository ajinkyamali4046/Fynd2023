<script setup>
import {RouterLink,RouterView} from 'vue-router'
import Login from ',/components/Login.vue'
defineProps({
    data:{
        name:String,
        required:true
    }
})
</script>

<template>
<header>
    <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/login">Login</RouterLink>

    <RouterView/>
    </nav>
</header>

<h1 class="name">This is VueJs</h1>
<h2 class="msg">{{ data}}</h2>
</template>

<style>
.name{
    color: aquamarine;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: large;
}
.msg{
    color: blue;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 20px;
}
</style>