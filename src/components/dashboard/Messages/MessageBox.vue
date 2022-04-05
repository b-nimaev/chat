<template>
  <article>
    <MessageFrom message="Привет, как зовут" />
    <MessageTo message="Ghbdtn"></MessageTo>
  </article>
</template>

<style lang="scss" scoped>
article {
  // background: #1e1e1e;
  padding: 30px 0;
  min-height: 400px;
  margin: 15px;
  border-radius: 5px;
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