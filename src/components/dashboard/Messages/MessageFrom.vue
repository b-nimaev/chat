<template>
  <div class="message">
    <div class="avatar">
      <img src="@/assets/avatars/katya.jpg" alt="katya" />
    </div>
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
  .avatar {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .text {
    max-width: 60%;
    margin: 0 0 auto 15px;
    background: #1c1c1c;
    padding: 15px;
    border-radius: 5px;
    p {
      margin: 0;
    }
  }
}

</style>