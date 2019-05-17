import Vue from 'vue';
import Router from 'vue-router';
import VillainsList from './views/villains-list.vue';
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
      path: '/orders',
      name: 'orders',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "orders" */ './views/orders-list.vue')
    },
    { path: '*', component: NotFound }
  ]
});
