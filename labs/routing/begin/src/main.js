import Vue from 'vue';
import App from '@/App.vue';

Vue.config.productionTip = false;

// Add VueRouter Here

new Vue({
  render: h => h(App)
}).$mount('#app');
