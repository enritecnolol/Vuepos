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
                    class="navbar-nav-link active"
            >
              <i class="icon-home4 mr-2"></i>
              Inicio
            </router-link>
          </li>

          <li class="nav-item nav-item-levels mega-menu-full">
            <a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
              <i class="icon-make-group mr-2"></i>
              Navegación
            </a>

            <div class="dropdown-menu dropdown-content">
              <div class="dropdown-content-body">
                <div class="row">
                  <div class="col-md-6">
                    <div
                      class="font-size-sm line-height-sm font-weight-semibold text-uppercase mt-1"
                    >Procesos</div>
                    <div class="dropdown-divider mb-2"></div>
                    <div class="dropdown-item-group mb-3 mb-md-0">
                      <ul class="list-unstyled">
                        <li>
                          <router-link
                                  to="/products"
                                  class="dropdown-item rounded"
                          >
                            <i class="icon-cart"></i>
                            Productos
                          </router-link>
                        </li>
                        <li>
                          <a href="#" class="dropdown-item rounded">
                            <i class="icon-width"></i>
                            Item 2
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div
                      class="font-size-sm line-height-sm font-weight-semibold text-uppercase mt-1"
                    >Consultar</div>
                    <div class="dropdown-divider mb-2"></div>
                    <div class="dropdown-item-group mb-3 mb-md-0">
                      <ul class="list-unstyled">
                        <li>
                          <a href="#" class="dropdown-item rounded">
                            <i class="icon-width"></i>
                            Item 1
                          </a>
                        </li>
                        <li>
                          <a href="#" class="dropdown-item rounded">
                            <i class="icon-width"></i>
                            Item 2
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
              <i class="icon-strategy mr-2"></i>
              Starter kit
            </a>

            <div class="dropdown-menu">
              <div class="dropdown-header">Basic layouts</div>
              <div class="dropdown-submenu">
                <a href="#" class="dropdown-item dropdown-toggle">
                  <i class="icon-grid2"></i> Sidebars
                </a>
                <div class="dropdown-menu">
                  <a href="../seed/sidebar_none.html" class="dropdown-item">No sidebar</a>
                  <a href="../seed/sidebar_main.html" class="dropdown-item">1 sidebar</a>
                  <div class="dropdown-submenu">
                    <a href="#" class="dropdown-item dropdown-toggle">2 sidebars</a>
                    <div class="dropdown-menu">
                      <a
                        href="../seed/sidebar_secondary.html"
                        class="dropdown-item"
                      >Secondary sidebar</a>
                      <a href="../seed/sidebar_right.html" class="dropdown-item">Right sidebar</a>
                    </div>
                  </div>
                  <div class="dropdown-submenu">
                    <a href="#" class="dropdown-item dropdown-toggle">3 sidebars</a>
                    <div class="dropdown-menu">
                      <a
                        href="../seed/sidebar_right_hidden.html"
                        class="dropdown-item"
                      >Right sidebar hidden</a>
                      <a
                        href="../seed/sidebar_right_visible.html"
                        class="dropdown-item"
                      >Right sidebar visible</a>
                    </div>
                  </div>
                  <a href="../seed/sidebar_sections.html" class="dropdown-item">Sectioned sidebar</a>
                  <a href="../seed/sidebar_stretched.html" class="dropdown-item">Stretched sidebar</a>
                </div>
              </div>
              <div class="dropdown-submenu">
                <a href="#" class="dropdown-item dropdown-toggle">
                  <i class="icon-paragraph-justify3"></i> Navbars
                </a>
                <div class="dropdown-menu">
                  <a href="../seed/navbar_main_fixed.html" class="dropdown-item">Main navbar fixed</a>
                  <a
                    href="../seed/navbar_main_hideable.html"
                    class="dropdown-item"
                  >Main navbar hideable</a>
                  <a
                    href="../seed/navbar_secondary_sticky.html"
                    class="dropdown-item"
                  >Secondary navbar sticky</a>
                  <a href="../seed/navbar_both_fixed.html" class="dropdown-item">Both navbars fixed</a>
                </div>
              </div>
              <div class="dropdown-header">Optional layouts</div>
              <a href="../seed/layout_boxed.html" class="dropdown-item">
                <i class="icon-align-center-horizontal"></i> Boxed layout
              </a>
            </div>
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
                <i class="icon-user-lock"></i> Account security
              </a>
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
export default {};
</script>

<style lang="scss" scoped>
</style>