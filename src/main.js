import Vue from 'vue';
import App from './App.vue';
// import sayHello from './utils';
// import { stringWorld, stringVue } from './constants';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

// sayHello(stringWorld);
// sayHello(stringVue);
