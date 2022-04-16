<template>
  <article id="box" v-if="messages">
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
  padding: 1.5rem 0;
  min-height: 200px;
  background: $black;
  margin: 0;
  border-radius: 0 0 5px 5px;
  max-height: 330px;
  overflow-y: auto;
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
    &:first-child {
      margin-top: 0;
    }
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
    background: $purple;
    border-radius: 15px;
    padding: 3px;
    cursor: pointer;
    span {
      white-space: pre-line;
      display: block;
      padding: 3px 8px;
      color: #fff;
      font-size: 13px;
      border-radius: 3px;
    }
    &.sender {
      margin: 0 auto auto 0;
    }
  }
}
</style>
