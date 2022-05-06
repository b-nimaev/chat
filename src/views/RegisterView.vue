<template>
  <form>
    <form-heading />

    <username-input></username-input>
    <password-input />
    <button @click.prevent="register">Register</button>
    <p class="yet">
      Already have an account? <router-link to="/auth">login</router-link>
    </p>
  </form>
</template>

<script>
import heading from '@/components/Auth/FormHeading.vue'
import username from '@/components/Register/UsernameInput.vue'
import password from '@/components/Register/PasswordInput.vue'
export default {
  components: {
    'form-heading': heading,
    'username-input': username,
    'password-input': password
  },
  computed: {
    username () {
      return this.$store.getters.register_data.username
    },
    password () {
      return this.$store.getters.register_data.password
    }
  },
  methods: {
    register() {
      if (
        this.username() == false ||
        this.username() == false
      )
        return;

      this.$axios({
        method: "post",
        url: "http://localhost:3000/user/register",
        data: {
          username: this.username(),
          password: this.password(),
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
  // background: #0000000f;
  padding: 2rem 2.5rem 3rem;
  border-radius: $border-radius-lg;
  margin: auto;
  width: 500px;
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


@media screen and (max-width: 1400px) {
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