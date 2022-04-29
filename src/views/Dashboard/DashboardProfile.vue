<template>
  <div class="profile">
    <front-page />
    <right-side />
  </div>
</template>

<style lang="scss" scoped>
.profile {
  display: flex;
}

section {
  background: #0000000f;
  padding: 1rem;
  border-radius: $border-radius-lg;
  &:first-child {
    margin-right: .5rem
  }
  &:last-child {
    // margin-left: .5rem
  }
}

@media screen and (max-width: 1400px) {

}
@media screen and (max-width: 1200px) {

}
@media screen and (max-width: 992px) {

}
@media screen and (max-width: 768px) {

}
</style>

<script>
import frontpage from "@/components/Profile/ProfileFront.vue";
import rightside from "@/components/Profile/RightSide.vue";

export default {
  data() {
    return {
      visible: false,
      // avatar: '98pPYHVTjOs.jpg'
    };
  },
  computed: {
    avatar: function () {
      return this.$store.getters.me.avatar;
    },
  },
  components: {
    "front-page": frontpage,
    "right-side": rightside
  },
};
</script>
