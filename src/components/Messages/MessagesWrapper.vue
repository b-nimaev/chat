<template>
  <aside v-if="selected_chat">
    <HeaderComponent />
    <MessageBox />
    <KeyboardComponent />
  </aside>

  <aside class="null" v-else>
    <h6>Select chat a start messaging</h6>
  </aside>
</template>

<script>
import HeaderComponent from './Content/HeaderComponent.vue'
import KeyboardComponent from "@/components/Messages/MessageForm.vue";
import MessageBox from "@/components/Messages/MessageBox.vue";

export default {
  computed: {
    selected_chat() {
      return this.$store.getters.selected_chat.user;
    },
    mobile: function () {
      return this.$store.getters.mobile
    },
  },
  components: {
      HeaderComponent,
    KeyboardComponent,
    MessageBox,
  },
};
</script>

<style lang="scss" scoped>
aside {
  padding: 1.5rem;
  width: 100%;
  &.null {
    height: 100%;
    display: flex;
    h6 {
      color: #fff;
      margin: auto;
    }
  }
}

@media screen and (max-width: 768px) {
  aside {
    &.null {
      display: none
    }
  }
}
</style>