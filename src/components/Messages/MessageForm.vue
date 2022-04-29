<template>
  <form
   @submit.prevent=""
   @click="focusTextarea"
   >
    <textarea
      id="keyboard"
      v-model="text" 
      @keydown.enter.prevent="handleEnter"
      />
    <button @click="sendMessage">Send</button>
  </form>
</template>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: $border-radius-lg;
  margin: 0;
  position: relative;
  border: 1px solid #ccc;
  cursor: pointer;
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
  min-height: 48px;
  border: 0;
  color: #7b7b7b;
  outline: none;
  padding: 10px 20px;
  background: transparent;
  transition: 200ms;
  resize: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 16px;
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
        this.text += "\n\\";
      } else {
        this.sendMessage();
      }
    },
    focusTextarea () {
      document.getElementById("keyboard").focus()
    },
    async sendMessage () {
    let user = this.$store.getters.selected_chat.user;
      if (user.messages) {
        console.log(user.messages);
      }
      this.$socket.emit("chat message", this.text)
      this.text = null;
            var objDiv = document.getElementById("box");
      
        setTimeout(() => {
          objDiv.scroll({ top: objDiv.scrollHeight, behavior: 'smooth' });
        }, 50);
    },
  },
};
</script>