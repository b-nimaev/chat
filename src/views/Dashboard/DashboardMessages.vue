<template>
  <div class="chat__list">
    <user-list v-if="(mobile && !selected_chat) || !mobile"></user-list>
    <messages-wrapper v-if="selected_chat"></messages-wrapper>
  </div>
</template>

<script>
import UserList from "@/components/Messages/UserList.vue";
import MessagesWrapper from "@/components/Messages/MessagesWrapper.vue";

export default {
  computed: {
    mobile: function () {
      return this.$store.getters.mobile
    },
    selected_chat() {
      return this.$store.getters.selected_chat.user;
    },
  },
  components: {
    UserList,
    MessagesWrapper
  },
  methods: {
    tosearch () {
      this.$router.push('/streams')
    }
  }
};
</script>

<style lang="scss" scoped>
  .chat__list {
    display: flex;
    background: #000;
  }
</style>