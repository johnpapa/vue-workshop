<template>
  <div id="app">
    <h1>Villains and Orders App</h1>

    <!-- Add router-view here -->


  </div>
</template>

<script>
import VillainsList from '@/components/VillainsList.vue';
import OrdersList from '@/components/OrdersList.vue';

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
