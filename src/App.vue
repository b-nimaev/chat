<template>
  <header-app />
  <div class="wrapper">
    <sidebar-app v-if="logged && !mobile" />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import header from "@/components/HeaderApp.vue";
import sidebar from "@/components/SidebarApp.vue";

export function getTime() {
  let date = new Date();
  let hours = "0" + date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();

  /*
  let day = "0" + date.getDate();
  let month = "0" + (date.getMonth() + 1);
  let year = date.getFullYear();
  */

  let result =
    hours.substr(-2) +
    ":" +
    minutes.substr(-2) +
    ":" +
    seconds.substr(-2);
    return result
}


export default {
  components: {
    "header-app": header,
    "sidebar-app": sidebar,
  },
  computed: {
    mobile: function () {
      return this.$store.getters.mobile;
    },
    logged: function () {
      return this.$store.getters.token;
    },
    theme: function () {
      return this.$store.getters.themeColor
    }
  },
  created() {
    if (window.innerWidth < 992) {
      this.$store.commit("mobile", true);
    }

    window.addEventListener("resize", this.myEventHandler);
  },
  beforeMount () {
    if (this.theme == 'dark') {
      document.getElementById("body").classList.add("dark-theme")
      document.getElementById("app").classList.add("dark-theme")
    } else {
      document.getElementById("body").classList.remove("dark-theme")
      document.getElementById("app").classList.remove("dark-theme")
    }
  },
  mounted() {
    if (this.logged) {
      this.$axios({
        method: "post",
        url: "http://192.168.1.3:3000/user/get_userinfo",
        params: {
          token: this.logged
        },
      }).then((response) => {
        if (response) {
          console.log(response)
          this.$store.commit("userinfo", response.data)
        } else {
          this.$router.push("auth")
        }
      })
    }
    
    this.$socket.on("chat message", (arg) => {
      this.$store.commit("add_message", {
        message_id: 4,
        sender_id: 1,
        message: {
          type: "text",
          text: `${arg}`,
          date: getTime(),
        },
      });

      console.log(arg);
      var objDiv = document.getElementById("box");

      setTimeout(() => {
        objDiv.scroll({ top: objDiv.scrollHeight, behavior: "smooth" });
        console.log("srolled");
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
  &.dark-theme {
    background-image: linear-gradient(45deg, #0a0a0e, #20182f);
  }
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
  border-radius: 8px;

  &.dark-theme {
    background-image: linear-gradient(45deg, #171313, #1f1f1f)
  }
}

.wrapper {
  display: flex;
  height: 100%;
  #sidebar {
    width: 200px;
  }
  main {
    flex: 1;
    background: #0000000f;
    padding: 1rem;
    border-radius: $border-radius-lg;
  }
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
  #app {
    margin: 8px;
    padding: 8px;
  }
}

@media screen and (max-width: 992px) {
}

@media screen and (max-width: 768px) {
  #app {
    margin: 0;
    border-radius: 0;
    padding: 0 20px 30px;
  }
}
</style>