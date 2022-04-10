<template>
  <article v-if="messages">
    <div class="message" :key="message" v-for="message in messages">
      <div v-if="sender" class="text sender">
        <span>
          {{ message.message.text }}
        </span>
      </div>
      <div v-else class="text">
        <span>
          {{ message.message.text }}
        </span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      id: 1,
      sender: true,
    };
  },
  computed: {
    messages() {
      return this.$store.getters.messages;
    },
  },
};
</script>

<style lang="scss" scoped>
article {
  // background: #1e1e1e;
  padding: 15px;
  min-height: 200px;
  background: #fff;
  margin: 0;
  border-radius: 5px;
  max-height: 440px;
  overflow-y: auto;
  box-shadow: -2px 10px 13px 3px #ebebeb30;
  &::-webkit-scrollbar {
    width: 5px; /* width of the entire scrollbar */
    // display: none;
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
  .message {
    margin: 10px 0;
  }
}
.message {
  display: flex;
  justify-content: flex-end;
  &.from {
    justify-content: flex-start;
  }
  .text {
    max-width: 70%;
    margin: 0 0 auto 0;
    background: #eeeeeea3;
    padding: 5px 8px;
    border-radius: 5px;
    span {
      color: #7b7b7b;
    }
    &.sender {
      margin: 0 auto auto 0;
    }
  }
}
</style>
