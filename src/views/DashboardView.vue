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
import NavbarComponent from '@/components/dashboard/NavbarComponent.vue'
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
  color: #fff;
}

aside {
  display: block;
  background: #0000004a;
  border-radius: 20px;
  width: 100%;
  padding: 15px;
  color: #fff;
  text-align: left;
  // box-shadow: 5px 11px 0px 4px #17101ba6;
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
