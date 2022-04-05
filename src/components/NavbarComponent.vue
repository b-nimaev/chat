<template>
  <nav>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2">
          <div class="logotype">
            <router-link to="/">axbn.</router-link>
          </div>
        </div>
        <div class="col">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/chat">Chat</router-link></li>
            <li>
              <router-link to="/dashboard/profile">Dashboard</router-link>
            </li>
          </ul>
        </div>
        <div class="col-lg-2">
          <switcherComponent/>
        </div>
        <div class="col-md-2 d-flex">
          <button class="login" @click.prevent="login">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M570.6 244C577.2 249.8 577.8 259.1 571.1 266.6C566.2 273.2 556 273.8 549.4 267.1L512 234.1V432C512 476.2 476.2 512 432 512H144C99.82 512 64 476.2 64 432V234.1L26.59 267.1C19.96 273.8 9.849 273.2 4.003 266.6C-1.844 259.1-1.212 249.8 5.414 244L277.4 4.002C283.5-1.334 292.5-1.334 298.6 4.002L570.6 244zM144 480H208V320C208 302.3 222.3 288 240 288H336C353.7 288 368 302.3 368 320V480H432C458.5 480 480 458.5 480 432V206.7L288 37.34L96 206.7V432C96 458.5 117.5 480 144 480zM240 480H336V320H240V480z"
              />
            </svg>
            <span>Login</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import switcherComponent from '@/components/switcherComponent.vue'
export default {
  name: "Navbar-Component",
  components: {
    switcherComponent
  },
  methods: {
    login() {
      this.$router.push("/auth");
    },
    switchTheme (e) {
      console.log(e.target)
    }
  },
};
</script>

<style lang="scss" scoped>
$dark: #201029;
$dark-neon: #000002;
$primary: #926ce4;
$secondary: #501326;
$secondary-hover: #501326;
$secondary-active: #701431;
$btn-hover: #844ff6;
$btn-active: #6f3ae2;
$box-shadow: 0px 4px 5px 0px #0000002e;

.logotype {
  a {
    font-weight: 900;
    color: #000000;
    font-size: 24px;
    text-shadow: 2px -1px 0px #fff;
  }
}

nav {
  display: flex;
  justify-content: center;
  margin: 0 auto 20px;
  width: 100%;
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    li {
      list-style-type: none;
      margin: 0 5px;
      a {
        padding: 5px 15px;
        display: block;
        border-radius: 3px;
        position: relative;
        transition: 200ms ease-in;
        transform: scale(1);
        z-index: 1;
        color: #fff;

        &:active {
          &:after {
            opacity: 1;
            background: #fff;
          }
        }

        &.router-link-exact-active {
          color: $primary;
          background: $secondary;
          box-shadow: $box-shadow;
          &:hover {
            background: $secondary-hover;
          }
          &:active {
            background: $secondary-active;
          }
        }
      }
    }
  }
}

button {
  border: 0;
  border-radius: 3px;
  padding: 5px 15px;
  margin: auto;
  background: $secondary;
  color: #fff;
  box-shadow: $box-shadow;
  font-size: 1rem;
  display: flex;
  transition: 300ms;
  span {
    margin: auto 0;
  }
  svg {
    height: 1rem;
    width: 1rem;
    margin: auto 6px auto 0;
    path {
      fill: #fff;
    }
  }
  &:hover {
    background: $secondary-hover;
  }
  &:active {
    background: $secondary-active;
  }
}
</style>