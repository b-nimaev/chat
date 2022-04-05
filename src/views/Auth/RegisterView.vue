<template>
    <!-- <h4>Authorization</h4> -->
    <form>
      <div class="input-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="data.username" autocomplete="off" />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="data.password" autocomplete="off" />
      </div>
      <button @click.prevent="auth">Login</button>
      <button @click.prevent="register">Register</button>
    </form>
</template>