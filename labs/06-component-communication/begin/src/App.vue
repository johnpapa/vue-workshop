<template>
  <div id="app">
    <h1 class="title">Component Communication</h1>
    <div class="section columns">
      <Heroes class="column"/>
    </div>
  </div>
</template>

<script>
import Heroes from "./components/heroes.vue";

export default {
  name: "app",
  components: {
    Heroes
  }
};
</script>

<style lang="scss">
@import "@/design/index.scss";
</style>