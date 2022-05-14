<template>
  <aside>
    <p>Цветовая схема:</p>
    <form>
      <div class="input-group" v-for="color in themeColors" :key="color">
        <label :for="color" @click="themeColorChange">{{ color }}</label>
        <input type="radio" v-model="switcher" :value="color" :id="color">
      </div>
    </form>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      switcher: this.$store.getters.themeColor,
      themeColors: ['white', 'dark', 'blue', 'red']
    };
  },
  computed: {
    current_theme: function () {
      return this.$store.getters.themeColor
    }
  },
  methods: {
    themeColorChange: function (e) {
      this.$store.commit("themeColor", e.target.getAttribute("for"));
      localStorage.setItem("theme", e.target.getAttribute("for"));      
      let old = document.querySelector('label[for='+ this.current_theme +']')
      let clicked_label = document.querySelector('label[for='+ e.target.getAttribute("for") +']')
      old.classList.remove("active")
      clicked_label.classList.add("active")

      document.getElementById("body").classList.add(`${this.current_theme}-theme`)
      document.getElementById("app").classList.add(`${this.current_theme}-theme`)
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
      &[for="white"] {
        background: #ffffff;
        color: #000;
      }
      &[for="dark"] {
        background: #00000066;
      }
      &[for="blue"] {
        background: #0062ff91;
      }
      &[for="red"] {
        background: #ff002b91;
      }
    }
    input {
      display: none;
    }
  }
}
</style>