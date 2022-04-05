<template>
  <div class="row">
    <UserList />
    <div class="col">
      <SelectedChat />
    </div>
  </div>
</template>

<script>
import UserList from "@/components/dashboard/Messages/UserList.vue";
import SelectedChat from "@/components/dashboard/Messages/SelectedChat.vue";
export default {
  data() {
    return {
      id: "123",
    };
  },
  components: {
    UserList,
    SelectedChat,
  },
  methods: {
    handler: function (e) {
      //do stuff
      e.preventDefault();
      console.log(e);
    },
  },
};
</script>

<style lang="scss">
$dark-neon: #000002;
$primary: #926ce4;
$light: #f8f8f8;

aside {
  &.messages {
    height: 400px;
    margin-bottom: 30px;
  }
}
</style>