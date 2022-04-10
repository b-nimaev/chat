<template>
  <form @submit.prevent="">
    <textarea v-model="text" @keydown.enter.prevent="handleEnter"> </textarea>
    <button @click="sendMessage">Send</button>
  </form>
</template>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: -2px 10px 13px 3px #ebebeb30;;
  border-radius: 10px;
  margin: 15px 0;
  button {
    border: 0;
    background: #1cb41c;
    color: #fff;
    padding: 10px;
    display: block;
    margin: 10px 10px 10px auto;
    border-radius: 30px;
    width: 100px;
    text-align: center;
  }
}
textarea {
  width: 100%;
  min-height: 50px;
  max-height: 300px;
  border: 0;
  color: #7b7b7b;
  outline: none;
  padding: 10px 20px;
  background: transparent;
  transition: 200ms;
  resize: none;
  &:focus {
    
  }
}
</style>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    handleEnter(e) {
      if (e.shiftKey) {
        console.log("y");
        this.text += "\n";
      } else {
        this.sendMessage();
      }
    },
    sendMessage() {
      let user = this.$store.getters.selected_chat.user;
      if (user.messages) {
        console.log(user.messages);
      }
      this.$store.commit("add_message", {
        message_id: 4,
        sender_id: 1,
        message: {
          type: "text",
          text: this.text,
          date: "06.04.2022",
        },
      });
      this.text = null;
    },
  },
};
</script>