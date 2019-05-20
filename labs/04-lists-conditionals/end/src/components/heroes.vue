<template>
  <div>
    <h2>Hero</h2>
    <ul>
      <li
        v-for="hero in heroes"
        :key="hero.id"
        @click="selectHero(hero)"
        :class="{highlight: selectedHero===hero}"
      >{{ hero.name }}</li>
    </ul>
    <div v-if="selectedHero">You selected {{ selectedHero.name }}</div>
    <div v-show="selectedHero">You selected a hero</div>
  </div>
</template>

<script>
export default {
  name: "Heroes",
  data() {
    return {
      selectedHero: undefined,
      heroes: [
        { id: 10, name: "Ella" },
        { id: 20, name: "Madelyn" },
        { id: 30, name: "Haley" }
      ]
    };
  },
  methods: {
    selectHero(hero) {
      this.selectedHero = hero;
    }
  }
};
</script>

<style lang="css">
li {
  list-style: none;
  width: 200px;
  cursor: pointer;
}
.highlight {
  background-color: yellow;
}
</style>
