  <script>
  import axios from 'axios';
  
  export default {
    logindetails() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        axios.post('http:/url', {
          username: this.username,
          password: this.password
        })
        .then(response => {
          console.log(`Login successful.${this.response.logindetails}`);
        })
        .catch(error => {
          console.log(`Login failed.${this.error}`);
        });
      }
    }
  }
  </script>

<template>
    <div>
      <input v-model="username" placeholder="Username">
      <input v-model="password" placeholder="Password">
      <button @click="login">Login</button>
    </div>
  </template>
  