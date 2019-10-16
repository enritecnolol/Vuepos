<template>
  <div>
    <div class="navbar navbar-expand-md navbar-light">
      <div class="text-center d-md-none w-100">
        <button
          type="button"
          class="navbar-toggler dropdown-toggle"
          data-toggle="collapse"
          data-target="#navbar-navigation"
        >
          <i class="icon-unfold mr-2"></i>
          Navigation
        </button>
      </div>

      <div class="navbar-collapse collapse" id="navbar-navigation">
        <ul class="navbar-nav navbar-nav-highlight">
          <li class="nav-item">
            <router-link
                    to="/"
                    class="navbar-nav-link"
                    :class="{'active' : $route.name === 'home'}"
            >
              <i class="icon-home4 mr-2"></i>
              Inicio
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
                    to="/products"
                    class="navbar-nav-link"
                    :class="{'active' : $route.name === 'products'}"
            >
              <i class="icon-cart mr-2"></i>
              Productos
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
                    to="/holdSale"
                    class="navbar-nav-link"
                    :class="{'active' : $route.name === 'holdSale'}"
            >
              <i class="icon-file-download mr-2"></i>
              Orden en espera
            </router-link>
          </li>

        </ul>

        <ul class="navbar-nav ml-md-auto">
          <li class="nav-item dropdown">
            <a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
              <i class="icon-cog3"></i>
              <span class="d-md-none ml-2">Settings</span>
            </a>

            <div class="dropdown-menu dropdown-menu-right">
              <a href="#" class="dropdown-item">
                <i class="icon-statistics"></i> Analytics
              </a>
              <a href="#" class="dropdown-item">
                <i class="icon-accessibility"></i> Accessibility
              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">
                <i class="icon-gear"></i> All settings
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
  }
};
</script>

<style lang="scss" scoped>
</style>