<template>
  <div>
    <p>{{ userinfo.username }}</p>
  </div>
</template>

<style lang="scss" scoped>
p {
  font-size: 14px;
}
</style>

<script>
export default {
  computed: {
    userinfo: function () {
      return this.$store.getters.userinfo
    }
  }
}
</script>