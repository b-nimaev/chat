<template>
  <div class="chat-search">
    <form @submit.prevent="sendform">
      <div class="container">
        <div class="row">
          <div class="col-md-10 m-auto">
            <div class="wrapper">
              <aside class="left__side">
                <h6>Select your gender</h6>
                <div class="input-group">
                  <input
                    class="form-check-input"
                    type="radio"
                    id="male"
                    value="male"
                    v-model="gender"
                  />
                  <label class="form-check-label" for="male"> Male </label>
                </div>
                <div class="input-group">
                  <input
                    class="form-check-input"
                    type="radio"
                    id="female"
                    value="female"
                    v-model="gender"
                  />
                  <label class="form-check-label checked" for="female">
                    Female
                  </label>
                </div>
              </aside>

              <aside class="right__side">
                <h6>Companion is gender</h6>
                <div class="input-group">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="companion__male"
                    id="companion__male"
                    v-model="checked"
                  />
                  <label class="form-check-label" for="companion__male"> Male </label>
                </div>
                <div class="input-group">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="companion__female"
                    id="companion__female"
                    v-model="checked"
                  />
                  <label class="form-check-label checked" for="companion__female">
                    Female
                  </label>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
      <input type="submit" value="Search" />
    </form>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      gender: '',
      checked: []
    }
  },
  methods: {
    sendform: function (e) {
      console.log(e.target);
      console.log("e");
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  .left__side, .right__side {
    margin: 0 15px
  }
}
.input-group {
  display: block;
  position: relative;
  margin: 10px 0;
  label {
    margin-left: 10px;
    transition: 300ms ease-in;
    cursor: pointer;
    background: #000;
    box-shadow: 0px 3px 0px 1px #000;
    width: 150px;
    padding: 5px;

    &.checked {
      background: #fff;
      color: #000;
    }
  }
}

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
  padding: 10px 20px;
  line-height: 1;
  cursor: pointer;
  outline: none;
  margin: 0;
  border: 1px solid #000;
  box-shadow: 2px 4px 2px 0px #000;
  transition: 200ms ease-in-out;
  transform: scale(1.05);
  &:hover {
    background: #000;
    color: #fff;
    transform: scale(1);
  }
  &:active {
    background: #111;
    color: #fff;
    transform: scale(0.9);
  }
}
</style>