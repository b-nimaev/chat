<template>
  <div class="row">
    <div class="col-md-4 col-lg-3" v-if="(mobile && !selected_chat) || !mobile">
      <user-list />
      <!-- 
      <div class="find-user">
        <button @click="tosearch">+ Search</button>
      </div>
       -->
    </div>
    <div class="col">
      <messages-wrapper />
    </div>
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
.find-user {
  margin-top: 1.5rem; 
  background: transparent;
  button {
    border: 0;
    background: $gray-800;
    color: #fff;
    padding: 10px 20px;
    border-radius: 30px;
    font-weight: 500;
    line-height: 1;
  }
}
</style>