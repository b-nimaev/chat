<template>
  <form>
    <form-heading />

    <div class="input-group">
      <label for="username">Логин</label>
      <input
        type="text"
        id="username"
        v-model="username"
        v-bind:class="{ valid: usernameValid, invalid: !usernameValid }"
        @change="usernameCheck"
        autocomplete="off"
      />
    </div>

    <div class="input-group">
      <label for="password">Пароль</label>
      <input
        type="password"
        id="password"
        v-bind:class="{ valid: passwordValid, invalid: !passwordValid }"
        v-model="password"
        autocomplete="off"
      />
      <p v-if="!passwordValid" class="text-dangerous">Minimum 8 characters!</p>
    </div>

    <button @click.prevent="auth">Login</button>

    <p class="yet">
      У Вас нет аккаунта?
      <router-link to="/register">Регистрация</router-link>
    </p>
  </form>
</template>

<script>
import heading from "@/components/Auth/FormHeading.vue";
export default {
  data() {
    return {
      username: "",
      password: "",
      trust: false,
      usernameValid: true,
      passwordValid: true,
    };
  },
  components: {
    "form-heading": heading,
  },
  methods: {
    auth() {
      if (this.usernameValid == false || this.passwordValid == false) return;

      this.$axios({
        method: "post",
        url: "//localhost:3000/user/auth",
        data: {
          username: this.username,
          password: this.password,
        }
      })
        .then((response) => {
          console.log(response)
          if (response.data == false) {
            this.username = "";
            this.password = "";
          } else {
            this.$store.commit("login", {
              token: response.data._id,
            });
            localStorage.setItem("user", response.data._id);
            this.$store.commit("userinfo", {
              username: response.data.username,
              avatar: response.data.avatar
            });
            this.$router.push("profile");
          }
        })
        .catch(function () {
          this.username = "";
          this.password = "";
        });
    },
    register() {
      this.$router.push("register");
    },
  },
  watch: {
    username: function () {
      if (!/^[a-zA-Z0-9_]+$/.test(this.username)) {
        this.usernameValid = false;
      } else {
        this.usernameValid = true;
      }
      if (this.username.length == 0) {
        this.usernameValid = true;
      }
    },

    password: function () {
      if (this.password.length < 8 || this.password.length > 24) {
        this.passwordValid = false;
      } else {
        this.passwordValid = true;
      }

      if (this.password.length == 0) {
        this.passwordValid = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$form-width: 250px;
h4.title {
  cursor: pointer;
  user-select: none;
  span {
    color: $green;
  }
}

p.yet {
  margin: 15px auto 0;
  a {
    margin-left: 3px;
  }
}
form {
  // background: #0000000f;
  width: 500px;
  color: #fff;
  padding: 2rem 2.5rem 3rem;
  margin: auto;
  border-radius: $border-radius-lg;
  .input-group {
    margin: 15px 0;

    .text-dangerous {
      color: $red;
      margin: 10px 0 0;
      font-weight: 500;
      text-align: left;
    }

    &:first-child {
      margin-top: 0;
    }
    label {
      display: block;
      text-align: left;
      margin-right: 0;
      margin-bottom: 5px;
      padding: 5px 0;
      color: #fff;
    }
    input {
      border: 0;
      width: 100%;
      padding: 10px 15px;
      border-radius: 3px;
      outline: none;
      transition: 200ms;
      font-weight: 600;
      line-height: 1;
      font-size: 16px;
      border: 0;
      cursor: pointer;
      box-shadow: 0px 1px 3px 1px $green;
      &#username {
        text-transform: lowercase;
      }
      &.valid {
        box-shadow: 2px 3px 3px 1px $green;
        &:focus {
          box-shadow: 1px 2px 3px 1px $green-500;
        }
        &:hover {
          box-shadow: 1px 2px 3px 1px $green-500;
        }
      }
      &.invalid {
        box-shadow: 2px 2px 3px 1px #ff7e7e;
        &:focus {
          box-shadow: 1px 2px 3px 1px #ff7e7e;
        }
        &:hover {
          box-shadow: 1px 2px 3px 1px #ff7e7e;
        }
      }
    }
  }
}
button {
  padding: 10px 30px;
  width: 100%;
  border: 0;
  border-radius: 3px;
  margin-top: 15px;
  transition: 200ms;
  background: #fff;
  background: #42b97e;
  color: #fff;
  &:hover {
    background-color: $green-700;
  }
  &:active {
    background-color: $green-800;
  }
}
@media screen and (max-width: 768px) {
  form {
    width: 90%;
  }
}
</style>