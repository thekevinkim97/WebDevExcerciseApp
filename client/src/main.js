import Vue from 'vue';
import vSelect from 'vue-select'
import App from './App.vue';
import router from './router';
import '@fortawesome/fontawesome-free/js/all';
import 'bulma/css/bulma.css';
import 'vue-select/dist/vue-select.css';

Vue.config.productionTip = false;
Vue.component('v-select', vSelect)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
