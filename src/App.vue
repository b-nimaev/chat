<template>
  <app-navbar></app-navbar>
  <router-view />
</template>

<style lang="scss">
@import "@/assets/styles/_variables";

html {
  padding: 0;
}
body {
  background: #cec7c7;
  background-image: linear-gradient(209deg, #68072a, #080b1cfa);
  background-repeat: no-repeat;
  min-height: 100vh;
  background-size: cover;
  margin: 0;
}

#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  padding: 90px 0;
}

nav {
  display: flex;
  justify-content: center;
  margin: auto;
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    li {
      list-style-type: none;
      margin: 0 15px;
      font-size: 1.5rem;
      a {
        padding: 0 10px;
        color: $primary;
        font-weight: 500;
        display: block;
        overflow: hidden;
        // border-radius: 3px;
        border: 1px solid #000;
        position: relative;
        transition: 200ms ease-in;
        font-weight: 100;
        z-index: 1;
        transform: scale(1);
        box-shadow: 2px 4px 2px 0px #000;
        &:after {
          opacity: 0;
          content: "";
          display: block;
          height: 100%;
          width: 100%;
          background: $dark;
          // border-radius: 3px;
          position: absolute;
          // box-shadow: -2px -1px 5px 0px #120310;
          transition: 300ms ease-in;
          top: 0;
          left: 100%;
          z-index: -1;
        }

        &:hover {
          transform: scale(1.05);
          &:after {
            opacity: 1;
            left: 70%;
          }
        }
        &:active {
          transform: scale(1);
          box-shadow: 2px 4px 2px 0px #333;
          &:after {
            background: #333;
          }
        }

        &.router-link-exact-active {
          transform: scale(1.1);
          color: $primary;
          &::after {
            opacity: 1;
            left: 0;
          }
        }
      }
    }
  }
}

a {
  text-decoration: none;
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
    console.log(user)
  });
});

socket.on("user connected", (user) => {
  initReactiveProperties(user);
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