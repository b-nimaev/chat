<template>
  <div class="wrapper">
    <div class="row">
      <div class="d-none d-lg-block col-lg-4 col-xl-3 user-list">
        <aside>
          <ul v-if="users">
            <li v-for="user in users" :key="user">
              <div
                :data-userId="user.id"
                class="item"
                @click="selectUser(user.username)"
              >
                <img
                  :src="require(`@/assets/avatars/${user.avatar}.jpg`)"
                  alt=""
                />
                <div class="userInfo">
                  <span class="name">{{
                    user.first_name + " " + user.last_name
                  }}</span>
                  <span class="username">{{ user.username }}</span>
                </div>
              </div>
            </li>
          </ul>
        </aside>
      </div>
      <div class="col message-box" v-if="selected_chat">
        <aside>
          <div class="header">
            <div class="user-info">
              <div class="avatar">
                <img
                  :src="require(`@/assets/avatars/${selected_chat.avatar}.jpg`)"
                  alt=""
                />
              </div>
              <h4>{{ selected_chat.first_name }}</h4>
            </div>
            <button @click.prevent="more" class="more">
              <span></span><span></span><span></span>
            </button>
          </div>

          <MessageBox :messages="selected_chat.messages" />
          <KeyboardComponent />
        </aside>
      </div>
      <div class="col message-box null" v-else>
        <aside>
          <h6>Select chat a start messaging</h6>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import KeyboardComponent from "@/components/dashboard/Messages/MessageForm.vue";
import MessageBox from "@/components/dashboard/Messages/MessageBox.vue";

export default {
  data() {
    return {
      selected_chat: "",
      users: [
        {
          id: 1,
          first_name: "Alexandr",
          last_name: "Balzhinimaev",
          username: "@alexandrbnimaev",
          avatar: "cats",
          messages: [
            {
              message_id: 1,
              sender_id: 2,
              message: {
                type: "text",
                text: "Привет!",
                date: "06.04.2022",
              },
            },
            {
              message_id: 2,
              sender_id: 1,
              message: {
                type: "text",
                text: "Ну привет",
                date: "06.04.2022",
              },
            },
            {
              message_id: 3,
              sender_id: 1,
              message: {
                type: "text",
                text: "Как зовут?",
                date: "06.04.2022",
              },
            },
            {
              message_id: 4,
              sender_id: 1,
              message: {
                type: "text",
                text: "меня Саша",
                date: "06.04.2022",
              },
            },
          ],
        },
        {
          id: 2,
          first_name: "Ekaterina",
          last_name: "Abramova",
          username: "@katyabramova",
          avatar: "katya",
          messages: [
            {
              message_id: 1,
              sender_id: 2,
              message: {
                type: "text",
                text: "Привет!",
                date: "06.04.2022",
              },
            },
            {
              message_id: 2,
              sender_id: 1,
              message: {
                type: "text",
                text: "Ну привет",
                date: "06.04.2022",
              },
            },
          ],
        },
        {
          id: 3,
          first_name: "Sasha",
          last_name: "b-nimaev",
          username: "@sblzh",
          avatar: "me",
        },
        {
          id: 4,
          first_name: "Sakura",
          last_name: "Haruno",
          username: "@sakuraharuno",
          avatar: "sakura",
        },
        {
          id: 5,
          first_name: "Summer",
          last_name: "Smith",
          username: "@summersmith",
          avatar: "summer",
        },
        {
          id: 6,
          first_name: "Awesome",
          last_name: "Killer",
          username: "@username",
          avatar: "killer",
        },
        {
          id: 7,
          first_name: "Summer",
          last_name: "Smith",
          username: "@summersmith",
          avatar: "summer",
        },
      ],
    };
  },
  components: {
    KeyboardComponent,
    MessageBox,
  },
  computed: {
    image() {
      return require(`@/assets/avatars/${this.avatar}.jpg`);
    },
  },
  methods: {
    handler: function (e) {
      //do stuff
      e.preventDefault();
      console.log(e);
    },
    selectUser(username) {
      console.log(username);
      console.log(this.$data.users);
      for (let i = 0; i < this.users.length; i++) {
        console.log(this.users[i]);
        if (this.users[i].username == username) {
          let element = document.querySelector(
            `[data-userId="${this.users[i].id}"]`
          );
          // var rect = element.getBoundingClientRect();

          element.classList;
          this.selected_chat = this.users[i];
          this.first_name = this.users[i].first_name;
          this.avatar = this.users[i].avatar;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$dark-neon: #000002;
$primary: #926ce4;
$light: #f8f8f8;
.wrapper {
  padding: 30px;
}

aside {
  padding: 0 15px;
  &.messages {
    height: 400px;
    margin-bottom: 30px;
  }
}

.user-list {
  height: fit-content;
  aside {
    background: #0000007d;
    padding: 0;
    margin: 0;
    max-height: 330px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 1px; /* width of the entire scrollbar */
      // display: none;
    }

    &::-webkit-scrollbar-track {
      background: #d3d3d3; /* color of the tracking area */
      border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #fff; /* color of the scroll thumb */
      border-radius: 20px; /* roundness of the scroll thumb */
      border: 3px solid #4ed59c; /* creates padding around scroll thumb */
    }
  }
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    li {
      position: relative;
      margin: 0;
      transition: 200ms;
      transform: scale(1);
      background-color: transparent;
      left: 0;
      .item {
        padding: 10px 30px;
        display: flex;
        color: #000;
        cursor: pointer;
        img {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          margin: auto 0 auto 0;
          object-fit: cover;
          display: block;
        }
        .userInfo {
          flex: 1;
          margin: auto 0 auto 10px;
          span {
            display: block;
            font-size: 14px;
            line-height: 1;
            color: #fff;
            &.username {
              font-weight: 300;
              color: #fff;
              font-size: 12px;
            }
          }
        }
        &.active:after {
          content: "";
          display: block;
          position: absolute;
          background: #56ffb5;
          height: calc(100% + 20px);
          top: -10px;
          width: 5px;
          right: calc(100% + 10px);
        }
      }

      &:hover {
        background-color: #6f808b;
      }
    }
  }
}

.header {
  border-bottom: 1px solid #ffffff1a;
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
  color: #fff;
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

.message-box {
  &.null {
    aside {
      min-height: 200px;
      display: flex;
    }
    h6 {
      margin: auto;
      text-align: center;
      color: #fff;
    }
  }
  aside {
    padding: 15px;
  }
}
</style>