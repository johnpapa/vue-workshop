<template>
  <div>
    <div class="container">
      <div class="products">
        <h2>Villain Products</h2>
        <table class="products">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>&nbsp;</th>
          </tr>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.name }}</td>
            <td>{{ '$' + product.price.toFixed(2) }}</td>
            <td class="buy">
              <button @click="addToCart(product)">Buy</button>
            </td>
          </tr>
        </table>
      </div>
      <Cart class="cart"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Cart from "@/views/cart";

export default {
  name: "Products",
  components: {
    Cart
  },
  created() {
    this.getProducts();
  },
  computed: {
    ...mapState(["products"])
  },
  methods: {
    ...mapActions(["getProducts"]),

    addToCart(product) {
      this.$store.commit("addToCart", product);
    }
  }
};
</script>

<style scoped>
.buy {
  text-align: center;
}

.container {
  display: grid;
  grid-template-columns: [products] 47.5% [spacer] 5% [cart] 47.5%;
}

.products {
  grid-column: products;
}

.cart {
  grid-column: cart;
  justify-self: start;
}
</style>