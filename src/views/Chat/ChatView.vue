<template>
  <div class="chat">
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    sendform: function (e) {
      console.log(e.target);
      console.log("e");
    },
  },
};
</script>

<style lang="scss" scoped>
.message-wrapper {
  display: flex;
  flex-direction: column;
  textarea {
    margin: auto;
    width: 100%;
    margin-bottom: 15px;
  }
  input {
    margin: auto 0 auto auto;
  }
}
textarea {
  outline: none;
  border-radius: 3px;
  padding: 20px;
  min-height: 200px;
  width: 400px;
}

input {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  line-height: 1;
  cursor: pointer;
  outline: none;
  margin: 0;
  border: 1px solid #000;
  box-shadow: 2px 4px 2px 0px #000;
  transition: 200ms ease-in-out;
  transform: scale(1.05);
  &:hover {
    background: #222;
    color: #fff;
    transform: scale(1);
  }
  &:active {
    background: #333;
    color: #fff;
    transform: scale(0.9);
  }
}
</style>