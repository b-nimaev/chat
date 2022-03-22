<template>
  <i class="fi fi-rr-User"></i>
  <app-navbar></app-navbar>
  <router-view />
</template>

<style lang="scss">
$box-shadow: -3px 2px 5px 0px #d5d5d5;
$marginSiize: 20px;

html {
  padding: 0;
}
body {
  background: #cec7c7;
  // background-image: linear-gradient(117deg, #005dff, #ff2000);
  background-image: linear-gradient(345deg, #e5f1c7 60%, #44d4cdad);
  background-repeat: no-repeat;
  min-height: calc(100vh - $marginSiize);
  background-size: cover;
  margin: 0;
}

#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  background: #fff;
  margin: $marginSiize $marginSiize 0 $marginSiize;
  border-radius: 10px;
  height: calc(100vh - $marginSiize*2);
  padding: 20px;
  box-shadow: $box-shadow;

}

</style>

<script>
import { io } from "socket.io-client";
import NavbarComponent from "@/components/NavbarComponent.vue";

const socket = io("http://localhost:3000");
socket.on("connect", () => {
  console.log(socket.connected); // true
});
socket.on("users", (users) => {
  users.forEach((user) => {
    console.log(user);
  });
});

socket.on("user connected", (user) => {
  this.users.push(user);
});

export default {
  data: () => {
    return {
      show: true,
    };
  },
  components: {
    "app-navbar": NavbarComponent,
  },
};
</script>