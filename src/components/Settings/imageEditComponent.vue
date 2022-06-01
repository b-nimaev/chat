<template>
  <aside>
    <p>Изображение профиля:</p>
    <form @submit.prevent="submitFile">
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
      imagePreview: false,
    };
  },
  methods: {
    logged: function () {
      return this.$store.getters.token;
    },
    // Отправка файла
    submitFile: function (e) {
      e.preventDefault();
      let formData = new FormData();
      formData.append("avatar", this.file);
      formData.append("user_id", this.$store.getters.token);
      console.log(formData);
      this.$axios({
        method: "post",
        url: "//localhost:3000/user/file-preview",
        data: formData,
      })
        .then((response) => {
          if (response.status == 200) {
            this.$axios({
              method: "post",
              url: "//localhost:3000/user/get_userinfo",
              data: {
                token: this.logged,
              },
            }).then((response) => {
              if (response) {
                console.log(response);
                this.$store.commit("userinfo", response.data);
              }
            }).catch(err => {
              console.log(err)
            });
            this.showPreview = false;
            this.imagePreview = false;
          }
          // console.log(document)
        })
        .catch(function (err) {
          console.log(err);
        });
    },

    // Чтение и запись
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
    text-align: left;
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

@media screen and (max-width: 768px) {
  p {
    font-size: $font-size-sm;
  }
  form {
    .input-group {
      label {
        padding: 4px 8px;
        font-size: 12px;
      }
    }
  }
}
.white-theme {
  p {
    color: #fff;
  }
}
</style>