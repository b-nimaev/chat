<template>
  <div class="wrapper">
    <form>
      <div class="input-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="data.username" autocomplete="off" required />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="data.password" autocomplete="off" required />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password2" v-model="data.password2" autocomplete="off" required />
      </div>
      <button @click.prevent="register">Register</button>
    </form>
    <p>{{ info }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      info: '',
      data: {
        username: '',
        password: '',
        password2: '',
      }
    }
  },
  methods: {
    auth () {
      console.log(this.data.username)
      console.log(this.data.password)
    },
    register () {
      axios({
        method: 'post',
        url: 'http://localhost:3000/user/register',
        params: {
          email: '123@gmail.com',
          name: this.data.username,
          password: this.data.password
        }
      }).then(function(response) {
        console.log('success!')
        console.log(response)
      }).catch(function(error) {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$dark: #333;
$dark-neon: #0e0e0e;
$primary: #926ce4;
$btn-hover: #844ff6;
$btn-active: #6f3ae2;
$box-shadow: 0px 4px 5px 0px #0000002e;
$secondary: #501326;

$form-width: 250px;
form {
  width: $form-width;
  margin: auto;
  .input-group {
    margin: 15px 0;
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
      padding: 10px 15px;
      border-radius: 3px;
      outline: none;
      width: $form-width;
      transition: 200ms;
      font-size: 15px;
      &:focus {
        box-shadow: 2px 3px 5px 0px $secondary;
      }
    }
  }
}
button {
  padding: 10px 30px;
  width: $form-width;
  border: 0;
  border-radius: 3px;
  margin-top: 15px;
  transition: 200ms;
  background: #fff;
  background: $secondary;
  color: #fff;
}
</style>