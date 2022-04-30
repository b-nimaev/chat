<template>
  <form>
    <form-heading />

    <username-input></username-input>

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

    <div class="input-group">
      <label for="password">Подтверждение пароля</label>
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
    <button @click.prevent="register">Register</button>
    <p class="privacy">
      By creating an account, I agree to Anoname's Terms of Service and Privacy
      Policy
    </p>
    <p class="yet">
      Already have an account? <router-link to="/auth">login</router-link>
    </p>
    <p v-if="!passwordLengthValid" class="text-dangerous">
      Minimum 8 characters!
    </p>

  </form>
</template>

<script>
import heading from '@/components/Auth/FormHeading.vue'
import username from '@/components/Register/UsernameInput.vue'
export default {
  data() {
    return {
      password: "",
      password2: "",
      trust: false,
      passwordValid: true,
      passwordValid2: true,
      passwordLengthValid: true,
      error: "",
    };
  },
  components: {
    'form-heading': heading,
    'username-input': username
  },
  methods: {
    register() {
      let username = this.$store.getters.register_data.username,
          password = this.$store.getters.register_data.password

      if (
        username == false ||
        password == false
      )
        return;

      this.$axios({
        method: "post",
        url: "http://localhost:3000/user/register",
        data: {
          username: username,
          password: password,
        },
      }).then((res) => {
        if (res.data.code == 11000) {
          this.error = "Username is registered!";
        } else {
          this.$router.push("profile")
        }
      });
    },
  },
  watch: {

    password: function () {
      if (this.password.length < 8 || this.password.length > 24) {
        this.passwordValid = false;
      } else {
        this.passwordValid = true;
      }

      if (this.password.length == 0) {
        this.passwordValid = true;
        this.$store.commit("register", {
          password: ""
        })
      }
    },

    password2: function () {
      if (this.password2 !== this.password) {
        this.passwordValid2 = false;
        this.$store.commit("register", {
          password: ""
        })
      } else {
        this.$store.commit("register", {
          password: this.password
        })
        this.passwordValid2 = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$form-width: 250px;
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
  background: #0000000f;
  padding: 2rem 2.5rem 3rem;
  border-radius: $border-radius-lg;
  margin: auto;
  width: 500px;
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
        color: #fff;
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
      color: #fff;
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

@media screen and (max-width: 768px) {
  form {
    width: 90%;
  }
}

@media screen and (max-width: 576px) {
  form {
  }
}
</style>