<template>
  <div class="user-list">
    <aside>
      <ul v-if="users">
        <li v-for="user in users" :key="user">
          <div
            :data-userId="user.id"
            class="item"
            @click="selectUser(user.username)"
          >
            <div class="avatar">
              <img
                v-if="user.avatar"
                :src="require(`@/assets/avatars/${user.avatar}.jpg`)"
                alt=""
              />
              <div class="placeholder" v-else>
                <span>A</span>
              </div>
            </div>
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
</template>
<script>
function addClassActive(id) {
  document.querySelector(`[data-userId="${id}"]`).classList.add("active");
}

export default {
  computed: {
    selected_chat() {
      return this.$store.getters.selected_chat;
    },
    users() {
      return this.$store.getters.users;
    },
  },
  methods: {
    selectUser(username) {
      for (let i = 0; i < this.users.length; i++) {
        let current_element = this.users[i];

        if (current_element.username == username) {
          if (document.getElementsByClassName("item active").length > 0) {
            for (
              let i = 0;
              i < document.getElementsByClassName("item active").length;
              i++
            ) {
              document
                .getElementsByClassName("item active")[i].classList.remove("active");
            }
          }

          addClassActive(current_element.id);

          // this.selected_chat = this.users[i];
          this.$store.commit("select_chat", {
            user: current_element,
          });
          this.$store.commit("messages_update");
        }
      }
    },
  },
  mounted() {
    if (this.selected_chat) {
      let id = this.selected_chat.user.id;
      addClassActive(id);
    }
  },
};
</script>
<style lang="scss" scoped>
.user-list {
  height: fit-content;
  margin-right: 2rem;
  aside {
    background: #fff;
    box-shadow: -2px 10px 13px 3px #ebebeb30;
    padding: 0;
    margin: 0;
    max-height: 330px;
    overflow-y: auto;
    border-radius: 10px;
    &::-webkit-scrollbar {
      // width: 5px; /* width of the entire scrollbar */
      display: none;
    }

    &::-webkit-scrollbar-track {
      background: #d3d3d3; /* color of the tracking area */
      border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #fff; /* color of the scroll thumb */
      border-radius: 20px; /* roundness of the scroll thumb */
      border: 3px solid #56ffb5; /* creates padding around scroll thumb */
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
        transition: 200ms;
        img,
        .placeholder {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          margin: auto 0 auto 0;
          object-fit: cover;
          display: flex;
          background: #caadff;
          span {
            margin: auto;
          }
        }
        .userInfo {
          flex: 1;
          text-align: left;
          margin: auto 0 auto 10px;
          span {
            display: block;
            font-size: 14px;
            line-height: 1;
            color: #000;
            &.username {
              font-weight: 300;
              color: #000;
              font-size: 12px;
            }
          }
        }
        &.active {
          background: #fdfbfb;
        }
        &.active:after {
          content: "";
          display: block;
          position: absolute;
          background: #56ffb5;
          height: 100%;
          top: 0;
          width: 5px;
          right: calc(100% - 5px);
        }
      }

      &:hover {
        background-color: #f4f4f4;
      }
    }
  }
}
</style>