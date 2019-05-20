<template>
  <div>
    <div class="section content-title-group">
      <h2 class="title">Heroes</h2>
      <div class="columns is-multiline is-variable">
        <div class="column is-8" v-if="heroes">
          <!-- <ul v-if="!selectedHero"> -->
          <ul >
            <li v-for="hero in heroes" :key="hero.id">
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <div :key="hero.name" class="name">{{ hero.firstName }} {{ hero.lastName }}</div>
                    <div class="description">{{ hero.description }}</div>
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
          <!-- <HeroDetail
            :hero="selectedHero"
            @save="saveHero"
            @cancel="unselectHero"
            v-if="selectedHero"
          /> -->
          <div class="notification is-info" v-show="message">{{message}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HeroDetail from "@/components/hero-detail";

export default {
  name: "Heroes",
  data() {
    return {
      selectedHero: undefined,
      heroes: []
    };
  },
  // components: {
  //   HeroDetail
  // },
  created() {
    this.loadHeroes();
  },
  methods: {
    async loadHeroes() {
      this.heroes = [];
      this.message = "getting the heroes, please be patient";
      this.heroes = await this.getHeroes();
      this.message = "";
    },
    selectHero(hero) {
      this.selectedHero = hero;
    },
    async getHeroes() {
      const heroes = [
        {
          id: 10,
          firstName: "Ella",
          lastName: "Papa",
          description: "fashionista"
        },
        {
          id: 20,
          firstName: "Madelyn",
          lastName: "Papa",
          description: "the cat whisperer"
        },
        {
          id: 30,
          firstName: "Haley",
          lastName: "Papa",
          description: "pen wielder"
        }
      ];
      return new Promise((resolve) => {
        setTimeout(() => resolve(heroes), 500);
      });
    }
    // saveHero(hero) {
    //   this.selectedHero = undefined;
    //   const index = this.heroes.findIndex(h => h.id === hero.id);
    //   this.heroes.splice(index, 1, hero);
    //   this.heroes = [...this.heroes];
    // },
    // unselectHero() {
    //   this.selectedHero = undefined;
    // }
  }
};
</script>
