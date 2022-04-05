<template>
  <form @submit.prevent="send">
    <textarea v-model="text"> </textarea>
    <button type="submit">Send</button>
  </form>
</template>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  background: #1e1e1e;
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
  min-height: 90px;
  max-height: 300px;
  border: 0;
  color: #fff;
  outline: none;
  padding: 10px 20px;
  background: transparent;
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
    send() {
      console.log(this.text)
      this.text = ''
    },
  },
};
</script>