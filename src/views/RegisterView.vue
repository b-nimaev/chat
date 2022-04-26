<template>
  <div class="row">
    <div class="col col-lg-6 col-xl-5 m-auto">
      <form>
        <h4 class="title"><span>a</span>noname</h4>
        <h5 class="subtitle">another social network for dating</h5>
        <div class="input-group">
          <div class="label">
            <label for="username">Username</label>
            <p class="error dangerous" v-if="error">{{ error }}</p>
          </div>
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
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-bind:class="{ valid: passwordValid, invalid: !passwordValid }"
            v-model="password"
            autocomplete="off"
          />
          <p v-if="!passwordValid" class="text-dangerous">
            Minimum 8 characters!
          </p>
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password2"
            v-bind:class="{ valid: passwordValid2, invalid: !passwordValid2 }"
            v-model="password2"
            autocomplete="off"
          />
          <p v-if="!passwordValid2" class="text-dangerous">
            passwords are different
          </p>
        </div>
        <!-- <button @click.prevent="auth">Login</button> -->
        <button @click.prevent="register">Register</button>
        <p class="privacy">
          By creating an account, I agree to Anoname's Terms of Service and
          Privacy Policy
        </p>
        <p class="yet">
          Already have an account? <router-link to="/auth">login</router-link>
        </p>
        <p v-if="!passwordLengthValid" class="text-dangerous">
          Minimum 8 characters!
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      trust: false,
      usernameValid: true,
      passwordValid: true,
      passwordValid2: true,
      passwordLengthValid: true,
      error: "",
    };
  },
  methods: {
    register() {
      if (
        this.username.length == 0 ||
        this.password.length == 0 ||
        this.usernameValid == false ||
        this.passwordValid == false ||
        this.passwordValid2 == false
      )
        return;

      axios({
        method: "post",
        url: "http://192.168.1.3:3000/user/register",
        params: {
          username: this.username.toLowerCase(),
          password: this.password,
        },
      }).then((res) => {
        if (res.data.code == 11000) {
          this.error = "Username is registered!";
        }
      });
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

    password2: function () {
      if (this.password2 !== this.password) {
        this.passwordValid2 = false;
      } else {
        this.passwordValid2 = true;
        if (this.password2.length < 8 || this.password2.length > 24) {
          this.passwordLengthValid = false;
        }
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
.subtitle {
  color: #777;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
  user-select: none;
}
.error {
  text-align: left;
  color: $red;
}
p.privacy {
  margin: 15px auto 0;
  width: 300px;
}
p.yet {
  margin: 15px auto 0;
  a {
    margin-left: 3px;
  }
}
form {
  color: #fff;
  background: $black;
  padding: 2rem 2.5rem 3rem;
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
      color: #777;
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
      color: #777;
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

    .label {
      display: flex;
      label {
        margin: auto 0;
      }
      p {
        margin: auto 0 auto auto;
        font-size: 12px;
        line-height: 1;
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

@media screen and (max-width: 576px) {
  form {
  }
}

@media screen and (max-width: 576px) {
  form {
  }
}
</style>