<template>
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
            <div class="message">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                omnis aperiam consequuntur.
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </aside>
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
aside {
  height: fit-content;
  padding: 0;
  margin: 0;
  max-height: 100%;
  width: 330px;
  overflow-y: auto;

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
    transition: 400ms;
    background-color: transparent;
    left: 0;
    .item {
      padding: 10px 15px;
      display: flex;
      color: #000;
      cursor: pointer;
      transition: 200ms;
      position: relative;
      left: 0;
      img,
      .placeholder {
        transition: 200ms;
        image-rendering: optimizeQuality;
        width: 46px;
        height: 46px;
        border-radius: 50%;
        margin: auto 0 auto 0;
        object-fit: cover;
        display: flex;
        background: #caadff;
        span {
          margin: auto;
          image-rendering: optimizeQuality;
        }
      }
      .userInfo {
        flex: 1;
        text-align: left;
        transition: 200ms;
        transform: scale(1);
        margin: auto 0 auto 10px;
        span {
          display: block;
          font-size: 13px;
          line-height: 1;
          color: #fff;
        }
        .message {
          p {
            font-weight: 300;
            color: #999;
            font-size: 12px;
            max-width: 110px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin: 0;
          }
        }
      }
      &:after {
        content: "";
        display: block;
        position: absolute;
        background: #56ffb5;
        transition: 200ms;
        height: 100%;
        top: 0;
        width: 15px;
        right: calc(100% + 5px);
      }
      &.active {
        background: $gray-800;
        left: 3px;
        &:after {
          right: 100%;
        }
      }
    }

    &:hover, &:active {
      background-color: $gray-900;
      .item:not(.active) {
        left: 3px;
      }
    }
  }
}
</style>