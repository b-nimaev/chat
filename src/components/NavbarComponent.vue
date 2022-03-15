<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/chat">Chat</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar-Component"
}
</script>

<style lang="scss" scoped>
nav {
  margin-bottom: 50px;
}
</style>