<template>
  <div class="message">
    <div class="text">
      <span>
        {{ message }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageFrom',
  props: ["message"]
}
</script>

<style lang="scss" scoped>
.message {
  display: flex;
  .text {
    max-width: 70%;
    margin: 0 0 auto 0;
    background: #1c1c1c;
    padding: 10px;
    border-radius: 5px;
    p {
      margin: 0;
    }
  }
}

</style>