<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Villains</router-link>|
      <router-link to="/heroes">Heroes</router-link>|
      <router-link to="/products">Products</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import "@/assets/global.css";

export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
