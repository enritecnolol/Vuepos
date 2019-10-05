import Vue from "vue";
import Vuex from "vuex";
import { AlertModule } from "./modules/alert";
import {AccountModule} from "./modules/Account";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    alert: AlertModule,
    account: AccountModule
  },
  state: {},
  mutations: {},
  actions: {}
});
