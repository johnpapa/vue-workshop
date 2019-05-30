import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const URL = 'http://localhost:8080/products.json';

export default new Vuex.Store({
  state: {
    cart: [],
    products: []
  },
  mutations: {
    addProduct({ products }, product) {
      products.push(product);
    },
    addToCart({ cart }, product) {
      const itemIndex = cart.findIndex(item => item.id === product.id);
      if (itemIndex === -1) {
        cart.push({ ...product, quantity: 1, total: product.price });
      } else {
        let cartItem = cart[itemIndex];
        cartItem.quantity++;
        cartItem.total = cartItem.price * cartItem.quantity;
      }
    },
    removeFromCart({ cart }, item) {
      const itemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
      cart.splice(itemIndex, 1);
    }
  },
  actions: {
    addToCartAction({ commit }, product) {
      commit('addToCart', product);
    },
    getProductsAction({ state, commit }) {
      if (!state.products.length) {
        fetch(URL)
          .then(res => res.json())
          .then(products => {
            for (let product of products) {
              commit('addProduct', {
                id: product.id,
                name: product.name,
                price: product.price
              });
            }
          });
      }
    },
    removeFromCartAction({ commit }, item) {
      commit('removeFromCart', item);
    }
  },
  getters: {
    cartTotal: ({ cart }) => {
      let total = 0;
      for (let item of cart) {
        total += item.price * item.quantity;
      }
      return total;
    }
  }
});
