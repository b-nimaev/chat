<template>
  <article id="box" v-if="messages">
    <div class="message" :key="message" v-for="message in messages">
      <div v-if="sender" class="text sender">
        <span>
          {{ message.message.text }}
        </span>
        <p class="date">{{ message.message.date }}</p>
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
  padding: 1rem;
  border-radius: 10px;
  background-color: #00000014;
  height: 390px;
  overflow-y: auto;
  margin-bottom: 1.5rem;
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
  &:last-child {
    margin-bottom: 0;
  }
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
    display: flex;
    font-family: "Montserrat", sans-serif;
    span {
      white-space: pre-line;
      display: block;
      padding: 3px 0 3px 8px;
      color: #fff;
      font-size: 14px;
      border-radius: 3px;
      margin: auto 0;
      font-weight: 400;
    }
    &.sender {
      margin: 0 auto auto 0;
    }
    .date {
      font-weight: 100;
      color: #fff;
      font-size: 10px;
      margin: auto 5px;
      line-height: 20px;
    }
  }
}

@media screen and (max-width: 768px) {
  article {
    height: 250px
  }
}
</style>
