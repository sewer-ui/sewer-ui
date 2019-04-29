<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  
import {baseURL} from './config/config.js';
export default {
  name: 'App',
  created(){
    // alert(baseURL)
    // console.log("------",process.argv)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
