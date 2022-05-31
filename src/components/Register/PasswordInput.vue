<template>
  <div class="input-group">
    <label for="password">Пароль</label>
    <input
      type="password"
      id="password"
      v-bind:class="{ valid: valid, invalid: !valid }"
      v-model="password"
      autocomplete="off"
    />
    <p v-if="err.length" class="text-dangerous">{{ err.length }}</p>
  </div>

  <div class="input-group">
    <label for="password2">Подтверждение пароля</label>
    <input
      type="password"
      id="password2"
      v-bind:class="{ valid: valid2, invalid: !valid2 }"
      v-model="password2"
      autocomplete="off"
    />
    <!-- <p v-if="!passwordValid2" class="text-dangerous">passwords are different</p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: this.$store.getters.register_data.password || "",
      password2: "",
      valid: true,
      valid2: true,
      err: {
        length: "",
      },
    };
  },
  watch: {
    password(password) {
      // Проверка на длину
      if (password.length < 8) {
        this.err.length = "Minimum 8 chars!";
        if (password.length == 0) {
          this.err.length = "";
        }
      } else if (password.length > 24) {
        this.err.length = "Maximum 24 chars!";
      } else {
        this.err.length = false;
        this.checkPassword();
      }
    },

    password2() {
      if (this.password2 == this.password) {
        this.valid2 = true;
        this.checkPassword();
      } else {
        this.valid2 = false;
        this.checkPassword(true);
      }
    },
  },
  methods: {
    checkPassword(bool) {
      if (bool) {
        this.$store.commit("register", {
          username: this.$store.getters.register_data.username,
          password: null,
        });
      } else {
        if (this.password == this.password2) {
          this.valud = true
          this.$store.commit("register", {
            username: this.$store.getters.register_data.username,
            password: this.password,
          });
        } else {
          this.valid2 = false
          this.$store.commit("register", {
            username: this.$store.getters.register_data.username,
            password: null,
          });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>