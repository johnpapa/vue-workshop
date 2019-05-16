<template>
  <div id="app">
    <h1>Villains and Orders App</h1>
    <!-- <VillainsList :villains="evilPeople" />
    <br />
    <OrdersList /> -->
    <router-view />
  </div>
</template>

<script>
import VillainsList from '@/components/VillainsList.vue';
import OrdersList from '@/components/OrdersList.vue';

export default {
  name: 'app',
  // components: {
  //   VillainsList,
  //   OrdersList
  // },
  // data: function() {
  //   return {
  //     evilPeople: [
  //       { id: 1, name: 'Cape Killer', description: 'Hater of capes' },
  //       { id: 2, name: 'Wave Curler', description: 'Controls water' },
  //       { id: 3, name: 'Ted', description: 'Just a bad guy' },
  //       { id: 4, name: 'Kelp Crusher', description: 'Destroys the sea' },
  //     ]
  //   };
  // }
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
