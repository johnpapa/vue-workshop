import Vue from 'vue';
import Router from 'vue-router';
import VillainsList from './views/villains-list.vue';
import HeroesList from './views/heroes-list.vue';
import NotFound from './views/not-found.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'villains',
      component: VillainsList
    },
    {
      path: '/heroes',
      name: 'HeroesList',
      component: HeroesList
    },
    {
      path: '/orders',
      name: 'orders',
      // route level code-splitting
      // this generates a separate chunk (orders.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "orders" */ './views/orders-list.vue')
    },
    {
      path: '/products',
      name: 'products',
      // route level code-splitting
      // this generates a separate chunk (products.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "products" */ './views/products.vue')
    },
    {
      path: '/purchased',
      name: 'purchased',
      // route level code-splitting
      // this generates a separate chunk (purchased.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "purchased" */ './views/purchased.vue')
    },
    { path: '*', component: NotFound }
  ]
});
