<template>
  <a v-if="!mobile" @click.prevent="home" href="#">
    <span>a</span>
    <span class="colored">noname</span>
  </a>

  <div v-else class="mobile-logotype">
    <button><span></span><span></span><span></span></button>
    <a v-if="mobile" @click.prevent="home" href="#"
      ><span>SS</span>Football</a
    >
  </div>
</template>

<script>
export default {
  computed: {
    mobile() {
      return this.$store.getters.mobile;
    },
  },
  methods: {
    home() {
      if (this.$store.getters.token) {
        this.$router.push("/");
      } else {
        this.$router.push("/auth");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile-logotype {
  display: flex;
  button {
    display: flex;
    flex-direction: column;
    background: transparent;
    padding: 5px;
    margin: auto 10px auto 0;
    border: 0;
    span {
      display: block;
      width: 20px;
      height: 2px;
      margin: 2px 0;
      border-radius: 30px;
      background: #fff;
    }
  }
  a {
    display: block;
    width: auto;
    margin: auto 0;
    line-height: 1;
    position: relative;
    top: -1px;
  }
}

div {
  a {
    width: 200px;
    text-align: center;
    font-size: 1rem;
    display: block;
    margin: auto 2rem auto 0;
    color: $white;
    font-weight: 800;
    .colored {
      color: $primary;
    }
  }
}
.white-theme {
  div a {
    color: #000;
  }
  .mobile-logotype {
    button {
      span {
        background: #000;
      }
    }
  }
}
</style>