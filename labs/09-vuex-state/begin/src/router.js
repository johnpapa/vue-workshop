import Vue from 'vue';
import Router from 'vue-router';
import NotFound from './views/not-found.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: '/products'
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
