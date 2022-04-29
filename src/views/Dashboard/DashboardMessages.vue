<template>
  <div class="chat__list">
    <user-list v-if="(mobile && !selected_chat) || !mobile"></user-list>
    <messages-wrapper v-if="selected_chat"></messages-wrapper>
    <aside class="null" v-if="!selected_chat">
      <h6>Select chat a start messaging</h6>
    </aside>
  </div>
</template>

<script>
import UserList from "@/components/Messages/UserList.vue";
import MessagesWrapper from "@/components/Messages/MessagesWrapper.vue";

export default {
  computed: {
    mobile: function () {
      return this.$store.getters.mobile;
    },
    selected_chat() {
      return this.$store.getters.selected_chat.user;
    },
  },
  components: {
    UserList,
    MessagesWrapper,
  },
  methods: {
    tosearch() {
      this.$router.push("/streams");
    },
  },
};
</script>

<style lang="scss" scoped>
.chat__list {
  border-radius: $border-radius;
  overflow: hidden;
  display: flex;
}
aside {
  &.null {
    min-height: 300px;
    height: auto;
    width: 100%;
    max-height: 600px;
    display: flex;
    border-left: 1px solid #e1c5c5;
    background: #ffffff03;
    h6 {
      color: #fff;
      margin: auto;
    }
  }
}

@media screen and (max-width: 992px) {
  aside.null {
    display: none
  }
}
</style>