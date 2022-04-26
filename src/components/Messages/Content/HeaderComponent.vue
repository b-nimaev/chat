<template>
  <div class="header">
    <div class="user-info">
      <div class="back" @click="messages_list" v-if="mobile && selected_chat">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M229.9 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L94.569 282H436c6.627 0 12-5.373 12-12v-28c0-6.627-5.373-12-12-12H94.569l155.13-155.13c4.686-4.686 4.686-12.284 0-16.971L229.9 38.101c-4.686-4.686-12.284-4.686-16.971 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971L212.929 473.9c4.686 4.686 12.284 4.686 16.971-.001z"
            />
          </svg>
        </button>
      </div>
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
      <h6>{{ selected_chat.first_name }}</h6>
    </div>
    <button @click.prevent="more" class="more">
      <span></span><span></span><span></span>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    messages_list() {
      return this.$store.commit("select_chat", false);
    },
  },
  computed: {
    mobile() {
      return this.$store.getters.mobile;
    },
    selected_chat() {
      return this.$store.getters.selected_chat.user;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 0.5rem 0.5rem calc(0.5rem + 8px);
}

.header,
.user-info {
  display: flex;

  .back {
    margin: auto 1rem auto 0;
    button {
      padding: 0 9px 3px;
      border: 0;
      border-radius: $border-radius-lg;
      background: $gray-900;
    }
    svg {
      height: 1rem;
      fill: #777;
    }
  }
}
h6 {
  margin: auto 10px;
  color: #fff;
}
.avatar {
  width: 48px;
  height: 48px;
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
</style>