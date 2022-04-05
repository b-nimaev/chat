<template>
  <li>
    <a href="javascript:void(0)">
      <img :src="itemImage" alt="" />
      <div class="userInfo">
        <span class="name">{{ first_name }}</span>
        <span class="name">{{ last_name }}</span>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  data() {
  },
  props: {
    first_name: String,
    last_name: String,
    imageUrl: String,
  },
  computed: {
    itemImage() {
      let fileName = this.imageUrl;
      return require(`@/assets/avatars/${fileName}.jpg`);
    },
  },
};
</script>