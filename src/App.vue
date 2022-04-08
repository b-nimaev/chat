<template>
  <HeaderComponent />
  <router-view />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue"
export default {
  components: {
    HeaderComponent
  }
}
</script>

<style lang="scss">
$box-shadow: -3px 2px 5px 0px #d5d5d5;
$marginSiize: 20px;

*::-webkit-scrollbar {
  width: 5px; /* width of the entire scrollbar */
}

*::-webkit-scrollbar-track {
  background: #000000; /* color of the tracking area */
}

*::-webkit-scrollbar-thumb {
  background-color: black; /* color of the scroll thumb */
  border-radius: 20px; /* roundness of the scroll thumb */
  border: 3px solid orange; /* creates padding around scroll thumb */
}

html {
  padding: 0;
}
body {
  background: #cec7c7;
  // background-image: linear-gradient(16deg, #000000d9 40%, #41434d);
  background-repeat: no-repeat;
  min-height: 100vh;
  background-size: cover;
  color: #fff;
  padding: 10px;
}

#app {
  // font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: linear-gradient(45deg, #41cc94, #a02791b5);
  margin: 10px;
  border-radius: 10px;
  padding: 20px;
  // box-shadow: 9px 6px 0px 1px #ffffff;
  display: flex;
  min-height: calc(100vh - 40px);
  height: 100%;
  flex-direction: column;
  transition: 400ms;
  background-color: #eee;
}


@media screen and (max-width: 576px) {
  body {
    padding: 2px;
  }
  #app {
    padding: 20px 4px;
    margin: 2px;
  }
}
</style>