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
                  <label class="form-check-label" for="female">
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
                  <label class="form-check-label" for="companion__female">
                    Female
                  </label>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
      <button type="submit">
        <span>Search</span>
      </button>
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
$dark: #201029;
$dark-neon: #000002;
$primary: #926ce4;
$secondary: #501326;
$secondary-hover: #501326;
$secondary-active: #701431;
$btn-hover: #844ff6;
$btn-active: #6f3ae2;
$box-shadow: 0px 4px 5px 0px #0000002e;

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
    background: rgb(0, 150, 219);
    width: 150px;
    padding: 5px;
    border-radius: 3px;

    &.checked {
      background: $secondary;
      color: #fff;
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

button {
  padding: 10px 20px;
  line-height: 1;
  cursor: pointer;
  outline: none;
  margin: 0;
  border: 1px solid #000;
  box-shadow: 2px 4px 2px 0px #000;
  transition: 200ms ease-in-out;
  transform: scale(1.05);
  background: $secondary;
  color: #fff;
  &:hover {
    background: $secondary-hover;
    color: #fff;
    transform: scale(1);
  }
  &:active {
    background: $secondary-active;
    color: #fff;
    transform: scale(0.95);
  }
}
</style>