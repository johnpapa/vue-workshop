<template>
  <div>
    <div class="card edit-detail">
      <header class="card-header">
        <p class="card-header-title">{{ fullName }}</p>
      </header>
      <div class="card-content">
        <div class="content">
          <div class="field">
            <label class="label" for="id">id</label>
            <label class="input" name="id" readonly>{{clonedHero.id}}</label>
          </div>
          <div class="field">
            <label class="label" for="firstName">first name</label>
            <input class="input" name="firstName" type="text" v-model="clonedHero.firstName">
          </div>
          <div class="field">
            <label class="label" for="lastName">last name</label>
            <input class="input" name="lastName" v-model="clonedHero.lastName">
          </div>
          <div class="field">
            <label class="label" for="description">description</label>
            <input class="input" name="description" type="text" v-model="clonedHero.description">
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
</template>

<script>
export default {
  name: "HeroDetail",
  props: {
    hero: {
      type: Object,
      default: () => {}
    }
  },
data() {
  return {
    clonedHero: { ...this.hero },
    // clonedHero: {  },
    message: ""
  };
},
  computed: {
    fullName() {
      return `${this.clonedHero.firstName} ${this.clonedHero.lastName}`;
    }
  },
  methods: {
    cancelHero() {
      // this.$emit("cancel");
    },
    saveHero() {
      // this.$emit("save", this.clonedHero);
    }
  }
};
</script>
