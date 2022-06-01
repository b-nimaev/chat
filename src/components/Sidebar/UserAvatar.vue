<template>
  <div v-if="avatar">
    <img
      :src="require(`@${avatar}`)"
      alt=""
    />
  </div>
</template>

<style lang="scss" scoped>
$sidebar-width: 200px;
div {
  height: calc($sidebar-width/1.5 - 2rem);
  width: calc($sidebar-width/1.5 - 2rem);
  background: #ffffff0a;
  border-radius: 50%;
  margin: 0 auto 0.5rem;
  display: flex;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin: auto;
  }
}
</style>

<script>
export default {
  computed: {
    avatar: function () {
      let str = this.$store.getters.userinfo
      return str.avatar.replace("src", "")
      // require(`@${this.$store.getters.userinfo.avatar.replace("src", '')}`)
    },
    picture: function () {
    //  let temp = 
      // console.log(temp)
      // return temp
      return true
    }
  },
};
</script>