<template>
  <div id="app">
    <h1>Data Binding</h1>
    <Heroes/>
  </div>
</template>

<script>
import Heroes from "@/components/heroes";

export default {
  name: "app",
  components: {
    Heroes
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
