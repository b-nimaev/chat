<template>
  <div>
    <h5 class="title"><span>a</span>noname</h5>
    <span class="subtitle">another social network for dating</span>
  </div>
</template>

<style lang="scss" scoped>
h5.title {
  cursor: pointer;
  user-select: none;
  span {
    color: $green;
  }
}
.subtitle {
  color: #fff;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
  user-select: none;
}

.white-theme {
  h5, .subtitle {
    color: #000;
  }
}
</style>