<template>
  <div>
    <div class="section content-title-group">
      <h2 class="title">Heroes</h2>
      <div class="columns is-multiline is-variable">
        <div class="column is-8" v-if="heroes">
          <ul v-if="!selectedHero">
            <li
              v-for="hero in heroes"
              :key="hero.id"
              @click="selectHero(hero)"
              :class="{highlight: selectedHero===hero}"
            >
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <div :key="hero.name" class="name">{{ hero.name }}</div>
                    <div class="description">{{ hero.description }}</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div v-if="selectedHero">
            <div class="card edit-detail">
              <header class="card-header">
                <p class="card-header-title">{{ selectedHero.name }}</p>
              </header>
              <div class="card-content">
                <div class="content">
                  <div class="field">
                    <label class="label" for="id">id</label>
                    <input
                      class="input"
                      name="id"
                      placeholder="e.g. 777"
                      readonly
                      type="text"
                      v-model="selectedHero.id"
                    >
                  </div>
                  <div class="field">
                    <label class="label" for="name">name</label>
                    <input
                      class="input"
                      name="name"
                      placeholder="e.g. Colleen"
                      type="text"
                      v-model="selectedHero.name"
                    >
                  </div>
                  <div class="field">
                    <label class="label" for="description">description</label>
                    <input
                      class="input"
                      name="description"
                      placeholder="dance fight!"
                      type="text"
                      v-model="selectedHero.description"
                    >
                  </div>
                </div>
                <footer class="card-footer">
                  <button class="link card-footer-item cancel-button" @click="cancelHero()">
                    <i class="fas fa-undo"></i>
                    <span>Cancel</span>
                  </button>
                  <button class="link card-footer-item save-button" @click="saveHero()">
                    <i class="fas fa-save"></i>
                    <span>Save</span>
                  </button>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Heroes",
  data() {
    return {
      selectedHero: undefined,
      heroes: [
        { id: 10, name: "Ella", description: "fashionista" },
        { id: 20, name: "Madelyn", description: "the cat whisperer" },
        { id: 30, name: "Haley", description: "pen wielder" }
      ]
    };
  },
  methods: {
    selectHero(hero) {
      this.selectedHero = hero;
    },
    cancelHero() {
      this.selectedHero = undefined;
    },
    saveHero() {}
  }
};
</script>
