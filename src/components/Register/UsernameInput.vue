<template>
  <article>
    <div class="label">
      <label for="username">Логин</label>
    </div>
    <input
      type="text"
      id="username"
      v-model="username"
      v-bind:class="{ valid: valid, invalid: errors.exists || !valid }"
      autocomplete="off"
    />
    <p class="error" v-for="error in errors" :key="error">{{ error }}</p>
  </article>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      valid: true,
      errors: {},
    };
  },
  watch: {
    username: function () {
      if (!/^[a-zA-Z0-9_]+$/.test(this.username)) {
        this.valid = false;
        this.$store.commit("register", {
          username: this.username,
        });
        this.errors.text = "Допустимы только латиница, цифры, и знак _";
      } else {
        this.valid = true;
        this.errors.text = "";
        this.$store.commit("register", {
          username: this.username,
        });
      }
      // If login is empty doesn't commit
      if (this.username.length == 0) {
        this.errors.text = "";
        this.valid = true;
        this.$store.commit("register", {
          username: ""
        });
      }

      this.$axios({
        method: "post",
        url: "http://192.168.1.3:3000/user/username_check",
        params: {
          username: this.username.toLowerCase(),
        },
      }).then((res) => {
        if (res.data) {
          this.errors.exists = "Пользователь существует!";
          this.$store.commit("register", {
            username: ""
          });
        } else {
          this.errors.exists = "";
          this.valid = true;
          this.$store.commit("register", {
            username: this.username,
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
article {
  margin: 0 0 15px;
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

p {
  margin: 10px 0;
  color: $red;
  &.error {
    text-align: left;
  }
}
</style>