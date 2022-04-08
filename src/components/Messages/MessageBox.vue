<template>
  <article>
    <div class="message" v-for="message in messages" :key="message">
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
  data () {
    return {
      id: 1,
      sender: true
    }
  },
  props: ["messages"],
}
</script>

<style lang="scss" scoped>
article {
  // background: #1e1e1e;
  padding: 15px;
  min-height: 200px;
  margin: 0;
  border-radius: 5px;
  max-height: 440px;
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
    background: #ffffff1a;
    padding: 15px;
    border-radius: 5px;
    span {
      color: #fff;
    }
    &.sender {
      margin: 0 auto auto 0;
    }
  }
}
</style>
