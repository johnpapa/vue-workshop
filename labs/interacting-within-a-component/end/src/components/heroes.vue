<template>
  <div>
    <div class="section content-title-group">
      <h2 class="title">Hero</h2>
      <div class="columns is-multiline is-variable">
        <div class="column is-8">
          <div class="card edit-detail" v-if="hero && hero.id">
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
                  <label class="label" for="firstName">first name</label>
                  <input class="input" name="firstName" type="text" v-model="hero.firstName">
                </div>
                <div class="field">
                  <label class="label" for="lastName">last name</label>
                  <input class="input" name="lastName" v-model="hero.lastName">
                </div>
                <div class="field">
                  <label class="label" for="description">description</label>
                  <input class="input" name="description" type="text" v-model="hero.description">
                </div>
                <div class="field">
                  <label class="label" for="capeCounter">cape counter</label>
                  <input class="input" name="capeCounter" type="number" v-model="hero.capeCounter">
                </div>
                <div class="field">
                  <label class="label" for="capeMessage">cape message</label>
                  <label class="input" name="capeMessage">{{capeMessage}}</label>
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
          <div class="notification is-info" v-show="message">{{message}}</div>
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
      hero: {},
      capeMessage: "",
      message: ""
    };
  },
  created() {
    this.loadHero();
  },
  computed: {
    fullName() {
      return `${this.hero.firstName} ${this.hero.lastName}`;
    }
  },
  watch: {
    "hero.capeCounter": {
      immediate: true,
      handler(newValue, oldValue) {
        console.log("Watcher evaluated!");
        this.handleTheCapes(newValue);
      }
    }
  },
  methods: {
    cancelHero() {
      this.loadHero();
    },
    async loadHero() {
      this.hero = {};
      this.message = "getting the hero, please be patient";
      this.hero = await this.getHero();
      this.message = "";
    },
    handleTheCapes(newValue) {
      const value = parseInt(newValue, 10);
      switch (value) {
        case 0:
          this.capeMessage = "Where is my cape?";
          break;
        case 1:
          this.capeMessage = "One is all I need";
          break;
        case 2:
          this.capeMessage = "Alway have a spare";
          break;
        default:
          this.capeMessage = "You can never have enough capes";
          break;
      }
    },
    saveHero() {
      alert("Save!");
    },
    async getHero() {
      const hero = {
        id: 20,
        firstName: "Madelyn",
        lastName: "Papa",
        capeCounter: 1,
        description: "the cat whisperer"
      };
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(hero), 2000);
      });
    }
  }
};
</script>
