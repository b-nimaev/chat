<script>
export default {
  data () {
    return {
      data: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    send () {
      console.log(this.data.username)
      console.log(this.data.password)
    }
  }
}
</script>

<template>
  <div class="wrapper">
    <!-- <h4>Authorization</h4> -->
    <form @submit.prevent="send">
      <div class="input-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="data.username" autocomplete="off" />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="data.password" autocomplete="off" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
$dark: #333;
$dark-neon: #0e0e0e;
$primary: #926ce4;
$btn-hover: #844ff6;
$btn-active: #6f3ae2;
$box-shadow: 0px 4px 5px 0px #0000002e;
$secondary: #501326;

$form-width: 250px;
.wrapper {
  margin: auto;
}
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