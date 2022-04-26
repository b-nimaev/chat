<template>
  <a @click.prevent="tohome" href="javascript:void(0)"><span>a</span>noname</a>
</template>

<script>
export default {
  methods: {
    tohome() {
      if (this.$store.getters.token) {
        this.$router.push("/");
      } else {
        this.$router.push("/auth");
      }
    },
  }
}
</script>

<style lang="scss" scoped>
div {
  a {
    font-size: 1.45rem;
    display: block;
    margin: auto 2rem auto 0;
    color: $white;
    span {
      color: #56ffb5;
    }
  }
}
</style>