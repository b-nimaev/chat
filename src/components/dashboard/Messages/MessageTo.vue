<template>
  <div class="message">
    <div class="text">
      <span>
        {{ message }}
      </span>
    </div>
    <div class="avatar">
      <img src="@/assets/avatars/98pPYHVTjOs.jpg" alt="katya" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageTo',
  props: ["message"]
}
</script>

<style lang="scss" scoped>
.message {
  display: flex;
  justify-content: flex-end;
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
    margin: 0 15px auto 0;
    background: #1c1c1c;
    padding: 15px;
    border-radius: 5px;
    p {
      margin: 0;
    }
  }
}

</style>