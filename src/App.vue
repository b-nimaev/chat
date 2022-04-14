<template>
  <HeaderComponent />
  <main>
    <div class="container">
      <div class="row">
        <div class="col-lg-2" v-if="logged && !mobile">
          <NavbarComponent />
        </div>
        <div class="col">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
export default {
  components: {
    HeaderComponent,
    NavbarComponent,
  },
  computed: {
    mobile: function () {
      return this.$store.getters.mobile
    },
    logged: function () {
      return this.$store.getters.token
    }
  },
  created() {
    if (window.innerWidth < 992) {
      this.$store.commit("mobile", true)
    }
    window.addEventListener("resize", this.myEventHandler);
  },
  unmounted() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  methods: {
    myEventHandler(e) {
      // your code for handling resize...
      if (e.target.innerWidth < 992) {
        this.$store.commit("mobile", true)
      } else {
        this.$store.commit("mobile", false)
      }
    }
  }
};
</script>

<style lang="scss">
body {
  font-family: "Poppins", sans-serif;
  background-repeat: no-repeat;
  min-height: 100vh;
  background-size: cover;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // background-image: linear-gradient(90deg, #db6c8f 0, #6b159d 60%, #32019d);
  background-image: linear-gradient(254deg, #320404 0, #2f173d 60%, #0a0515);
  text-align: center;
  padding: 20px;
  display: flex;
  min-height: 100vh;
  height: 100%;
  flex-direction: column;
  transition: 400ms;
}

main {
  display: flex;
  margin: 2rem 0;
  section {
    &.wrapper {
      flex: 1;
    }
  }
}
  #app {
    padding: .8rem 0;
  }
  main {
    margin: 1.5rem 0;
  }
@media screen and (max-width: 1400px) {
  #app {
    padding: .5rem 0;
  }
  main {
    margin: .5rem 0;
  }
  .row {
    --bs-gutter-x: .5rem !important
  }
  .row > * {
    padding-right: calc(var(--bs-gutter-x) * .5) !important;
    padding-left: calc(var(--bs-gutter-x) * .5) !important;
  }
}

@media screen and (max-width: 1200px) {
  #app {
    padding: .5rem 0;
  }
  main {
    margin: .5rem 0;
  }
  .row {
    --bs-gutter-x: .5rem !important
  }
  .row > * {
    padding-right: calc(var(--bs-gutter-x) * .5) !important;
    padding-left: calc(var(--bs-gutter-x) * .5) !important;
  }
}

@media screen and (max-width: 992px) {
  #app {
    padding: .5rem 0;
  }
  main {
    margin: .5rem 0;
  }
  .row {
    --bs-gutter-x: .5rem !important
  }
  .row > * {
    padding-right: calc(var(--bs-gutter-x) * .5) !important;
    padding-left: calc(var(--bs-gutter-x) * .5) !important;
  }
}

</style>