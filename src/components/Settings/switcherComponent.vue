<template>
  <aside>
    <p>Цветовая схема:</p>
    <form>
      <div class="input-group">
        <label for="light">Light</label>
        <input
          @change="themeColorChange"
          type="radio"
          v-model="switcher"
          value="light"
          id="light"
        />
      </div>
      <div class="input-group">
        <label for="dark">Dark</label>
        <input
          @change="themeColorChange"
          type="radio"
          v-model="switcher"
          value="dark"
          id="dark"
        />
      </div>
    </form>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      switcher: this.$store.getters.themeColor,
    };
  },
  methods: {
    themeColorChange: function () {
      this.$store.commit("themeColor", this.switcher);
      localStorage.setItem("theme", this.switcher);
      if (this.switcher == "dark") {
        document.getElementById("body").classList.add("dark-theme");
        document.getElementById("app").classList.add("dark-theme");
      } else {
        document.getElementById("body").classList.remove("dark-theme");
        document.getElementById("app").classList.remove("dark-theme");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  margin: 0 0.5rem;
  .input-group {
    margin: auto 0.5rem;
    label {
      background: #74c2b236;
      transition: 300ms;
      padding: 5px 15px;
      border-radius: 5px;
      cursor: pointer;
      &[for="dark"] {
        background: #00000066;
      }
    }
    input {
      display: none;
    }
  }
}
</style>