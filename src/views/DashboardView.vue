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
  // background: #110e0fdb;
  // border: .1px solid #201e1e;
  background: #0000007d;
  border-radius: 3px;
  width: 100%;
  padding: 15px;
  color: #222;
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
