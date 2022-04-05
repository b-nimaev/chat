<template>
  <div class="wrapper">
    <div class="avatar">
      <img src="./../../assets/avatars/98pPYHVTjOs.jpg" alt="" />
    </div>
    <div class="about">
      <h4>Alexandr Balzhinimaev</h4>
      <p class="status">Awesome text Lorem, ipsum dolor.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  padding: 30px;
  .avatar {
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 20px;
    img {
      width: 100%;
      object-fit: contain;
      position: relative;
      top: -40px;
    }
  }

  .about {
    padding: 30px;
    h4 {
      margin-bottom: 2px;
    }
    .status {
      font-size: 15px;
      margin: 0;
      color: #999;
      text-align: left;
      font-weight: 400;
    }
  }
}
</style>