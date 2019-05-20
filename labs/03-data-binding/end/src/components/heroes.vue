<template>
  <div>
    <h2>Hero</h2>
    <input v-model="hero.name" type="text" @keyup.enter="upperCaseTheName()">
    <p>Hello {{ hero.name }}.</p>
    <p>Your id is {{ hero.id }} and your description is "{{ hero.description }}"</p>
    <button @click="reverseName()">Reverse</button>
  </div>
</template>

<script>
export default {
  name: "Heroes",
  data() {
    return {
      hero: {
        id: 101,
        name: "John",
        description: "Slayer of JavaScript"
      }
    };
  },
  methods: {
    reverseName() {
      this.hero.name = [...this.hero.name].reverse().join("");
    },
    upperCaseTheName() {
      this.hero.name = this.hero.name.toUpperCase();
    }
  }
};
</script>
