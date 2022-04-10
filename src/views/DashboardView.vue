<template>
  <div class="dashboard">
    <div class="container">
      <div class="row">
        <nav class="col-xl-2">
          <NavbarComponent />
        </nav>
        <div class="col">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
export default {
  name: "DashboardView",
  components: {
    NavbarComponent
  },
};
</script>

<style lang="scss">
$dark-neon: #000002;
$primary: #926ce4;
$light: #f8f8f8;

.dashboard {
  padding: 20px 0;
  color: #fff;
}

@media screen and (max-width: 1200px) {
  nav {
    margin-bottom: 30px;
    bottom: 0;
    left: 0;
  }
  aside {
    box-shadow: none;
  }
}
@media screen and (max-width: 576px) {
  nav {
    margin-bottom: 10px;
  }
}
</style>
