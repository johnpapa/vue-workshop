<template>
  <div>
    <h2>Orders for Villain {{ villainId }}</h2>
    <table>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
      <tr v-for="order in orders" :key="order.id">
        <td>{{ order.product }}</td>
        <td>{{ '$' + order.price.toFixed(2) }}</td>
        <td>{{ order.quantity }}</td>
        <td>{{ '$' + total(order.price, order.quantity) }}</td>
      </tr>
    </table>
    <br>
    <!-- Add router-link Here -->
  </div>
</template>

<script>
export default {
  name: "OrdersList",
  methods: {
    total: (price, quantity) => {
      return price * quantity.toFixed(2);
    }
  },
  computed: {},
  data: function() {
    return {
      orders: [
        { id: 1, product: "Blow torch", price: 399.99, quantity: 1 },
        { id: 2, product: "Hammer ", price: 59.99, quantity: 4 },
        { id: 3, product: "TV", price: 899.99, quantity: 2 },
        { id: 4, product: "Surfboard", price: 679.0, quantity: 1 }
      ]
    };
  }
};
</script>

<style scoped>
</style>
