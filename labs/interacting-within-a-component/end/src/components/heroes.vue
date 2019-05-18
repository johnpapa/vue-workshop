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
            >
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <div :key="hero.name" class="name">{{ hero.name }}</div>
                    <div>{{ hero.description }}</div>
                  </div>
                </div>
                <footer class="card-footer">
                  <button class="link card-footer-item save-button" @click="selectHero(hero)">
                    <i class="fas fa-check"></i>
                    <span>Select</span>
                  </button>
                </footer>
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
                    <label class="input" name="id" readonly>{{selectedHero.id}}</label>
                  </div>
                  {{selectedHero.fullAddress}}
                  <div class="field">
                    <label class="label" for="fullAddress">Full Address</label>
                    <label class="input" name="fullAddress" readonly>{{fullAddress}}</label>
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
                  <div class="field">
                    <label class="label" for="address">address</label>
                    <input
                      class="input"
                      name="address"
                      type="text"
                      v-model="selectedHero.address"
                    >
                  </div>
                  <div class="field">
                    <label class="label" for="city">city</label>
                    <input
                      class="input"
                      name="city"
                      type="text"
                      v-model="selectedHero.city"
                    >
                  </div>
                  <div class="field">
                    <label class="label" for="state">state</label>
                    <input
                      class="input"
                      name="state"
                      type="text"
                      v-model="selectedHero.state"
                    >
                  </div>
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
</template>

<script>
export default {
  name: "Heroes",
  data() {
    return {
      selectedHero: undefined,
      heroes: [
        {
          id: 10,
          name: "Ella",
          address: "1 Lois Lane",
          city: "Orlando",
          state: "FL",
          description: "fashionista"
        },
        {
          id: 20,
          name: "Madelyn",
          address: "1 Somewhere Street",
          city: "Tampa",
          state: "FL",
          description: "the cat whisperer"
        },
        {
          id: 30,
          name: "Haley",
          address: "1 Nowhere Trail ",
          city: "Miami",
          state: "FL",
          description: "pen wielder"
        }
      ]
    };
  },
  computed: {
    fullAddress() {
      return this.selectedHero
        ? `${this.selectedHero.address}, ${this.selectedHero.city} ${
            this.selectedHero.state
          }`
        : "";
    }
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
