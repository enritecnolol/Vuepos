import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import Notifications from 'vue-notification'
import vSelect from 'vue-select'
import SlimDialog from 'v-slim-dialog'
import './lib/moneyGlobal'
import 'vue-select/dist/vue-select.css';
import 'v-slim-dialog/dist/v-slim-dialog.css'

Vue.use(SlimDialog);
Vue.component('v-select', vSelect);
Vue.use(Notifications);
Vue.use(Vuelidate);
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
