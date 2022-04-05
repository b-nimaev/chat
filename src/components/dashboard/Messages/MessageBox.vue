<template>
  <article>
    <MessageFrom message="Привет, как зовут" />
    <MessageTo message="Ghbdtn"></MessageTo>
    <MessageFrom message="Привет, как зовут" />
    <MessageTo message="Ghbdtn"></MessageTo>
    <MessageFrom message="Привет, как зовут" />
    <MessageTo message="Ghbdtn"></MessageTo>
    <MessageFrom message="Привет, как зовут" />
    <MessageTo message="Ghbdtn"></MessageTo>
    <MessageFrom message="Привет, как зовут" />
    <MessageTo message="Ghbdtn"></MessageTo>
    <MessageFrom message="Привет, как зовут" />
    <MessageTo message="Я думал ты гулять ушла"></MessageTo>
    <MessageFrom message="Привет, как зовут" />
    <MessageTo message="ты недавно проснулась же"></MessageTo>
    <MessageFrom message="Привет, как зовут" />
    <MessageTo message="на что уже потратила энергию"></MessageTo>
    <MessageFrom message="Привет, как зовут" />
    <MessageTo message="Ghbdtn"></MessageTo>
    <MessageFrom message="Привет, как зовут" />
    <MessageTo message="Ghbdtn"></MessageTo>
    <MessageFrom message="Привет, как зовут" />
    <MessageTo message="Ghbdtn"></MessageTo>
    <MessageFrom message="Привет, как зовут" />
    <MessageTo message="Ghbdtn"></MessageTo>
  </article>
</template>

<style lang="scss">
article {
  // background: #1e1e1e;
  padding: 15px;
  min-height: 200px;
  margin: 0;
  border-radius: 5px;
  max-height: 440px;
  overflow-y: scroll;
  .message {
    margin: 10px 0;
  }
}
</style>

<script>
import MessageFrom from '@/components/dashboard/Messages/MessageFrom.vue'
import MessageTo from '@/components/dashboard/Messages/MessageTo.vue'
export default {
  components: {
    MessageFrom,
    MessageTo
  }
}
</script>