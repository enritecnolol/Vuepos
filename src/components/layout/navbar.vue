<template>
  <div>
    <!-- Main navbar -->
    <div class="navbar navbar-expand-md navbar-dark">
      <div class="navbar-brand wmin-0 mr-5">
        <a href="index.html" class="d-inline-block">
          <img src="../../assets/global_assets/images/logo_light.png" alt />
        </a>
      </div>

      <div class="d-md-none">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-mobile"
        >
          <i class="icon-tree5"></i>
        </button>
      </div>

      <div class="collapse navbar-collapse" id="navbar-mobile">
        <ul class="navbar-nav"></ul>

        <span class="ml-md-3 mr-md-auto">&zwnj;</span>

        <ul class="navbar-nav">
          <li class="nav-item dropdown dropdown-user">
            <a
              href="#"
              class="navbar-nav-link d-flex align-items-center dropdown-toggle"
              data-toggle="dropdown"
            >
              <img
                src="../../assets/global_assets/images/placeholders/placeholder.jpg"
                class="rounded-circle mr-2"
                height="34"
                alt
              />
              <span>{{user}}</span>
            </a>

            <div class="dropdown-menu dropdown-menu-right">
              <a href="#" class="dropdown-item">
                <i class="icon-user-plus"></i> My profile
              </a>
              <div class="dropdown-divider"></div>
              <a href="#"  class="dropdown-item" @click="logout">
                <i class="icon-switch2"></i> Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- /main navbar -->
  </div>
</template>

<script>
export default {
  methods:{
    logout(){
      this.$store.dispatch('account/logout').then(res => {
        this.$router.push('/login');
      })
    }
  },
  computed:{
    user()
    {
      return this.$store.state.account.auth_user;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>