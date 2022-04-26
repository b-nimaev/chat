<template>
  <div class="container">
    <header-app />
    <router-view></router-view>
  </div>
</template>
<script>
import header from "@/components/HeaderApp.vue";
export default {
  components: {
    "header-app": header,
  },
  computed: {
    mobile: function () {
      return this.$store.getters.mobile;
    },
    logged: function () {
      return this.$store.getters.token;
    },
  },
  created() {
    if (window.innerWidth < 992) {
      this.$store.commit("mobile", true);
    }
    window.addEventListener("resize", this.myEventHandler);
  },
  mounted() {
    this.$socket.on("chat message", (arg) => {
      this.$store.commit("add_message", {
        message_id: 4,
        sender_id: 1,
        message: {
          type: "text",
          text: `${arg}`,
          date: new Date(),
        },
      });

      console.log(arg)
            var objDiv = document.getElementById("box");
      
        setTimeout(() => {
          objDiv.scroll({ top: objDiv.scrollHeight, behavior: 'smooth' });
          console.log('srolled')
        }, 50);
    });
  },
  unmounted() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  methods: {
    myEventHandler(e) {
      // your code for handling resize...
      if (e.target.innerWidth < 992) {
        this.$store.commit("mobile", true);
      } else {
        this.$store.commit("mobile", false);
      }
    },
  },
};
</script>

<style lang="scss">
body {
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  background-size: cover;
  background-image: linear-gradient(45deg, #286663, #276763);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0px;
  margin: 0;
  background-image: linear-gradient(45deg, #334955, #11a07d);
  display: flex;
  width: 100%;
  flex-direction: column;
  transition: 400ms;
  margin: 30px;
  padding: 12px 36px;
}

@media screen and (max-width: 1400px) {
  .row {
    --bs-gutter-x: 0.5rem !important;
  }
  .row > * {
    padding-right: calc(var(--bs-gutter-x) * 0.5) !important;
    padding-left: calc(var(--bs-gutter-x) * 0.5) !important;
  }
}

@media screen and (max-width: 1200px) {
}

@media screen and (max-width: 992px) {
}

@media screen and (max-width: 768px) {
  #app {
    margin: 0;
    padding: 0 0 30px;
  }
}
</style>