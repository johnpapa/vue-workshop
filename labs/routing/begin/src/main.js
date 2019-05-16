import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '@/App.vue';
import VillainsList from '@/components/VillainsList';
import OrdersList from '@/components/OrdersList';
import NotFound from '@/components/NotFound';

Vue.config.productionTip = false;

import "@/assets/global.css";

// Add VueRouter Here



new Vue({

  render: h => h(App),
}).$mount('#app');
