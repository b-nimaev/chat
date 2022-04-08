<template>
  <aside :data-id="id">
    <div class="header">
      <div class="user-info">
        <div class="avatar">
          <img :src="image" alt="" />
        </div>
        <h4>{{ first_name }}</h4>
      </div>
      <button @click.prevent="more" class="more">
        <span></span><span></span><span></span>
      </button>
    </div>

    <MessageBox></MessageBox>

    <KeyboardComponent />
  </aside>
</template>

<script>
import KeyboardComponent from "./MessageForm.vue";
import MessageBox from "./MessageBox.vue";
export default {
  data () {
    return {
      avatar: 'cats'
    }
  },
  props: {
    id: Number,
    first_name: String
  },
  components: {
    KeyboardComponent,
    MessageBox,
  },
  computed: {
    image () {
      return require(`@/assets/avatars/${this.avatar}.jpg`)
    }
  },
  methods: {
    user() {
      this.$router.push("user/" + this.id);
    },
    more() {
      console.log("Log");
    },
  },
};
</script>

<style lang="scss" scoped>
aside {
  padding: 0 0 5px;
  
}
.header {
  border-bottom: 1px solid #0f0a13;
  padding: 15px;
  background: transparent;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.header,
.user-info {
  display: flex;
}
h4 {
  margin: auto 10px;
}
.avatar {
  width: 64px;
  height: 64px;
  overflow: hidden;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.about {
  cursor: pointer;
  transition: 200ms;
  margin-bottom: 30px;
  display: flex;
  &:hover {
    background: #141414;
    box-shadow: 3px 7px 0px 2px #17101ba6;
  }
  .user-info {
    margin: auto 10px;
  }
}

.more {
  background: transparent;
  margin: auto 0 auto auto;
  display: block;
  border: 0;
  span {
    display: inline-block;
    width: 3px;
    margin: 3px;
    height: 3px;
    background: #fff;
  }
}
</style>