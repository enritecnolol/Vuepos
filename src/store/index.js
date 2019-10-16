import Vue from "vue";
import Vuex from "vuex";
import { AlertModule } from "./modules/alert";
import {AccountModule} from "./modules/Account";
import {CategoriesModules} from "./modules/Categories";
import {ProductsModules} from "./modules/Products";
import {CartModule} from "./modules/Cart";
import { ScreenDevicesModule } from "./ScreenDevices";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    alert: AlertModule,
    account: AccountModule,
    categories:CategoriesModules,
    products:ProductsModules,
    cart:CartModule,
    screen:ScreenDevicesModule
  },
  state: {},
  mutations: {},
  actions: {}
});
