import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '@/App.vue';
import VillainsList from '@/components/VillainsList';
import OrdersList from '@/components/OrdersList';
import NotFound from '@/components/NotFound';

Vue.config.productionTip = false;

import "@/assets/global.css";

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/villains' },
    { path: '/villains', name: 'villains', component: VillainsList },
    { path: '/orders/:id', name: 'orders', component: OrdersList },
    { path: '*', component: NotFound }
  ]
});

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
