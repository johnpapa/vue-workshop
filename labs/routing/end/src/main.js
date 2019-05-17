import Vue from 'vue';
// import VueRouter from 'vue-router';

import App from '@/App.vue';
// import VillainsList from '@/components/villains-list';
// import OrdersList from '@/components/orders-list';
// import NotFound from '@/components/not-found';

Vue.config.productionTip = false;

// const router = new VueRouter({
//   mode: 'history',
//   routes: [
//     { path: '/', redirect: '/villains' },
//     { path: '/villains', name: 'villains', component: VillainsList },
//     { path: '/orders/:id', name: 'orders', component: OrdersList },
//     { path: '*', component: NotFound }
//   ]
// });

// Vue.use(VueRouter);

new Vue({
  // router,
  render: h => h(App)
}).$mount('#app');
