<template>
  <form @submit.prevent="">
    <textarea
      v-model="text"
      @keydown.enter.prevent="handleEnter"
    >
    </textarea>
    <button @click="sendMessage">Send</button>
  </form>
</template>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  background: #ffffff0a;
  box-shadow: 0 2px 3px #7d7081;
  border-radius: 5px;
  margin: 15px;
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
  color: #fff;
  outline: none;
  padding: 10px 20px;
  background: transparent;
  transition: 200ms;
  resize: none;
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
    handleEnter (e) {
      if (e.shiftKey) {
        console.log('y')
        this.text += '\n'
      } else {
        this.sendMessage()
      }
    },
    sendMessage() {
      console.log(this.text)
      this.text = null
    }
  },
};
</script>