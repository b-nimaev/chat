<template>
  <aside class="wrapper">
    <user-list />

    <div class="message-wrapper" v-if="selected_chat">
      <aside>
        <div class="header">
          <div class="user-info">
            <div class="avatar">
              <img
                v-if="selected_chat.avatar"
                :src="require(`@/assets/avatars/${selected_chat.avatar}.jpg`)"
                alt=""
              />
              <div class="placeholder" v-else>
                <span>A</span>
              </div>
            </div>
            <h4>{{ selected_chat.first_name }}</h4>
          </div>
          <button @click.prevent="more" class="more">
            <span></span><span></span><span></span>
          </button>
        </div>
        <MessageBox />
        <KeyboardComponent />
      </aside>
    </div>

    <div class="col message-wrapper null" v-else>
      <aside>
        <h6>Select chat a start messaging</h6>
      </aside>
    </div>
  </aside>
</template>

<script>
import KeyboardComponent from "@/components/Messages/MessageForm.vue";
import MessageBox from "@/components/Messages/MessageBox.vue";
import UserList from "@/components/Messages/UserList.vue";

export default {
  data() {
    return {
      // selected_chat: ''
    };
  },
  mounted() {
    // console.log(this.selected_chat)
  },
  computed: {
    selected_chat() {
      return this.$store.getters.selected_chat.user;
    },
  },
  components: {
    KeyboardComponent,
    MessageBox,
    UserList,
  },
};
</script>

<style lang="scss" scoped>
aside {
  &.wrapper {
    display: flex;
    flex: 1;
  }
  &.messages {
    height: 400px;
    margin-bottom: 30px;
  }
}

.message-wrapper {
  flex: 1;
  background: #fff;
}
.header {
  border-bottom: 1px solid #fcfcfc;
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
  color: #999;
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
  .placeholder {
    display: flex;
    background: #caadff;
    height: 100%;
    span {
      margin: auto;
    }
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

.message-wrapper {
  &.null {
    aside {
      min-height: 200px;
      display: flex;
    }
    h6 {
      margin: auto;
      text-align: center;
      color: #fff;
      padding: 1rem 3rem;
      background: #312935;
      border-radius: 30px;
    }
  }
}
</style>