<template>
  <div id="app">
    <template>
      <navbar v-if="isLogged" />
      <secondNavBar v-if="isLogged"/>

      <div class="page-header" v-if="$route.name != 'home'">
        <div class="page-header-content header-elements-md-inline">
          <div class="page-title d-flex">
            <h4>
              <i class="icon-arrow-left52 mr-2"></i>
              <span class="font-weight-semibold">{{routerName($route.name)}}</span>
            </h4>
            <a href="#" class="header-elements-toggle text-default d-md-none">
              <i class="icon-more"></i>
            </a>
          </div>

          <div class="header-elements d-none py-0 mb-3 mb-md-0">
            <div class="breadcrumb">
              <a href="index.html" class="breadcrumb-item">
                <i class="icon-home2 mr-2"></i> Home
              </a>
              <span class="breadcrumb-item active">test</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Page content -->
      <div class="page-content pt-0">
        <!-- Main content -->
        <div class="content-wrapper" style="overflow: hidden">
          <!-- Content area -->
          <transition name="fade" mode="out-in" :duration="{ enter: 800, leave: '350ms'}">
            <router-view></router-view>
          </transition>
          <!-- /content area -->
        </div>
        <!-- /main content -->
        <notifications group="foo" position="top right"/>
      </div>
      <!-- /page content -->

      <div
        class="navbar navbar-expand-lg navbar-light d-none d-lg-block d-xl-block navbar-static-bottom navbar-fixed-bottom"
        v-if="$route.name != 'home'"
      >
        <div class="text-center d-lg-none w-100">
          <button
            type="button"
            class="navbar-toggler dropdown-toggle"
            data-toggle="collapse"
            data-target="#navbar-footer"
          >
            <i class="icon-unfold mr-2"></i>
            Footer
          </button>
        </div>

        <div class="navbar-collapse collapse" id="navbar-footer">
          <span class="navbar-text">&copy; 2019 Tomas</span>

          <ul class="navbar-nav ml-lg-auto">
            <li class="nav-item">
              <a href="#" class="navbar-nav-link">
                <i class="icon-lifebuoy"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import "./assets/global_assets/js/main/jquery.min.js";
import "./assets/css/bootstrap.min.css";
import "./assets/css/bootstrap_limitless.min.css";
import "./assets/css/layout.min.css";
import "./assets/css/components.min.css";
import "./assets/css/colors.min.css";
import "./assets/global_assets/css/icons/icomoon/styles.css";
import "bootstrap";
import "./assets/global_assets/js/plugins/loaders/blockui.min.js";
import "./assets/global_assets/js/plugins/ui/slinky.min.js";
import "./assets/global_assets/js/plugins/ui/sticky.min.js";
import "./assets/global_assets/js/plugins/extensions/jquery_ui/interactions.min.js";
import "./assets/js/app.js";

import "./assets/css/animate.css";

import {http} from "./http/axios";
import navbar from "./components/layout/navbar";
import secondNavBar from "./components/layout/secondNavBar";

export default {
  name: "App",
  components: {
    navbar,
    secondNavBar
  },
  data()
  {
    return{
      window: {
        width: 0,
        height: 0
      }
    }
  },
  created(){
    this.setupHttpClient();
    this.handleResize();
  },
  methods: {
    handleResize() {
      this.$store.dispatch('screen/ScreenSize', {
        width:window.innerWidth,
        height:window.innerHeight
      });
    },
    setupHttpClient() {
      http.setToken(localStorage.getItem('token'));
    },
    routerName(name)
    {
      var names = {
        holdSale:'Orden en espera',
        products:'Productos',
        home:'Inicio',
        dashboard:'Vista general'
      }
      return names[name];
    }
  },
  computed:{
    isLogged () {
      return this.$store.getters['account/isLogged'];
    }
  }
};
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900');
  #app{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  body {
    background: url('./assets/images/stripes-light.png') repeat;
    min-width: 100%;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
