<template>
  <aside>
    <p>Изображение профиля:</p>
    <form @submit.prevent="submitFile(e)">
      <div class="input-group">
        <label for="imageFile" v-show="!showPreview"
          >Прикрепить изображение</label
        >
        <input
          name="avatar"
          type="file"
          id="imageFile"
          ref="file"
          accept="image/*"
          v-on:change="handleFileUpload()"
        />
        <div class="mini-wrapper" v-show="showPreview">
          <div class="image-wrapper">
            <img v-bind:src="imagePreview" />
          </div>
          <button type="submit">Отправить</button>
        </div>
      </div>
    </form>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      file: "",
      showPreview: false,
    };
  },
  methods: {
    submitFile() {
      let formData = new FormData();
      formData.append("avatar", this.file);
      formData.append("user_id", this.$store.getters.token);
      console.log(formData)
      this.$axios({
        method: "post",
        url: "//localhost:3000/user/file-preview",
        data: formData,
      })
        .then(function () {
          console.log("SUCCESS!!");
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          this.showPreview = true;
          this.imagePreview = reader.result;
        }.bind(this),
        false
      );
      if (this.file) {
        if (/\.(jpe?g|png|gif)$/i.test(this.file.name)) {
          reader.readAsDataURL(this.file);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.mini-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  background: #0000008a;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  .image-wrapper {
    margin: 0 auto;
  }
  button {
    margin: 8px auto;
    outline: none;
    border: 0;
  }
}
.image-wrapper {
  width: 200px;
  img {
    width: 100%;
  }
}
aside {
  display: flex;
  p {
    margin: auto 0;
  }
}
form {
  display: flex;
  margin: 0 0.5rem;
  .input-group {
    margin: auto 0.5rem;
    label {
      background: #74c2b236;
      transition: 300ms;
      padding: 5px 15px;
      border-radius: 5px;
      cursor: pointer;
      &[for="dark"] {
        background: #00000066;
      }
    }
    input {
      display: none;
    }
  }
}
</style>