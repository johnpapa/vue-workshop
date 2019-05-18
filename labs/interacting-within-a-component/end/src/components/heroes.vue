<template>
  <div>
    <div class="section content-title-group">
      <h2 class="title">Hero</h2>
      <div class="columns is-multiline is-variable">
        <div class="column is-8">
          <div class="card edit-detail">
            <header class="card-header">
              <p class="card-header-title">{{ fullName }}</p>
            </header>
            <div class="card-content">
              <div class="content">
                <div class="field">
                  <label class="label" for="id">id</label>
                  <label class="input" name="id" readonly>{{hero.id}}</label>
                </div>
                <div class="field">
                  <label class="label" for="name">first name</label>
                  <input
                    class="input"
                    name="firstName"
                    placeholder="e.g. Colleen"
                    type="text"
                    v-model="hero.firstName"
                  >
                </div>
                <div class="field">
                  <label class="label" for="name">last name</label>
                  <input
                    class="input"
                    name="lastName"
                    placeholder="e.g. Papa"
                    type="text"
                    v-model="hero.lastName"
                  >
                </div>
                <div class="field">
                  <label class="label" for="description">description</label>
                  <input
                    class="input"
                    name="description"
                    placeholder="dance fight!"
                    type="text"
                    v-model="hero.description"
                  >
                </div>
                <div class="field">
                  <label class="label" for="address">address</label>
                  <input class="input" name="address" type="text" v-model="hero.address">
                </div>
                <div class="field">
                  <label class="label" for="city">city</label>
                  <input class="input" name="city" type="text" v-model="hero.city">
                </div>
                <div class="field">
                  <label class="label" for="state">state</label>
                  <input class="input" name="state" type="text" v-model="hero.state">
                </div>
                <div class="field">
                  <label class="label" for="fullAddress">Full Address</label>
                  <label class="input" name="fullAddress" readonly>{{fullAddress}}</label>
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
</template>

<script>
export default {
  name: "Heroes",
  data() {
    return {
      hero: {
        id: 20,
        firstName: "Madelyn",
        lastName: "Papa",
        address: "1 Somewhere Street",
        city: "Tampa",
        state: "FL",
        description: "the cat whisperer"
      }
    };
  },
  computed: {
    fullAddress: {
      get() {
        return `${this.hero.address}, ${this.hero.city} ${this.hero.state}`;
      }
    },
    fullName: {
      get() {
        return `${this.hero.firstName} ${this.hero.lastName}`;
      }
    }
  },
  methods: {
    cancelHero() {},
    saveHero() {}
  }
};
</script>
