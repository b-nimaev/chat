<template>
  <HeaderComponent />
  <main>
    <NavbarComponent />
    <router-view />
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
};
</script>

<style lang="scss">
body {
    font-family: 'Poppins', sans-serif;
    // background-image: linear-gradient(16deg, #000000d9 40%, #41434d);
    background-image: linear-gradient(16deg, rgb(90 67 67 / 85%) 40%, #3b2b33);
    background-repeat: no-repeat;
    min-height: 100vh;
    background-size: cover;
    color: #fff;
}

#app {
    // font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    // background-image: linear-gradient(45deg, #41cc94, #a02791b5);
    // background-image: linear-gradient(45deg, #1e2824, rgb(0 0 0 / 71%));
    // background-image: linear-gradient(124deg, #47237ddb -20%, #564d84);
    padding: 20px;
    // box-shadow: 9px 6px 0px 1px #ffffff;
    display: flex;
    min-height: 100vh;
    height: 100%;
    flex-direction: column;
    transition: 400ms;
    background-color: #fff;
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
</style>