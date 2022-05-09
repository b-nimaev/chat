<template>
  <section>
    <div class="avatar-wrapper"></div>
    <router-link class="edit" to="settings">Редактировать</router-link>
    <div v-if="modal_active" class="modal-wrapper">
      <div class="modal">
        <div class="modal-header">
          <h4>Upload new avatar</h4>
          <button @click="close"><span></span><span></span></button>
        </div>
        <div class="modal-body">
          <label for="imageFile">Select some image:</label>
          <input
            type="file"
            id="imageFile"
            ref="file"
            accept="image/*"
            v-on:change="handleFileUpload()"
          />
          <div class="image-wrapper" v-show="showPreview">
            <img v-bind:src="imagePreview" />
          </div>
          <button v-on:click="submitFile()">Submit</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.edit {
  margin: 10px 0;
  display: block;
}
.image-wrapper {
  margin: auto;
  width: 300px;
  height: 300px;
  background: #010101;
  display: flex;
  img {
    margin: auto;
    height: auto;
    width: 100%;
  }
}
.avatar-wrapper {
  width: 200px;
  height: 200px;
  background: #0000000c;
  border-radius: 50%;
  cursor: pointer;
}

.modal-wrapper {
  width: 100%;
  height: 100%;
  background: #000000cc;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  display: flex;
  .modal {
    margin: auto;
    .modal-header {
      display: flex;
      padding: 0 20px;
      button {
        border: 0;
        padding: 0;
        background: transparent;
        padding: 5px 10px;
        margin-left: auto;
        margin-right: 0;
        span {
          width: 15px;
          height: 2px;
          margin: 2px 0;
          display: block;
          background: #eee;
          transition: 300ms;
          position: relative;
          transform-origin: top;
          top: 0;
          left: 0;
          &:first-child {
            transform: skewY(45deg);
          }
          &:last-child {
            transform: skewY(-45deg);
          }
        }
        &:hover {
          span {
            &:first-child {
              top: 3px;
            }
            &:last-child {
              top: -3px;
            }
          }
        }
      }
    }

    .modal-body {
      padding: 10px;
      display: flex;
      flex-direction: column;
      label {
        text-align: left;
        margin-bottom: 8px;
      }
      input {
        display: flex;
        flex-direction: column;
      }
      button {
        margin-top: 8px;
        border: 0;
        padding: 5px 12px;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      modal_active: false,
      file: "",
      showPreview: false,
      imagePreview: "",
    };
  },
  methods: {
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
    submitFile() {
      let formData = new FormData();
      formData.append("file", this.file);
      console.log(this.file)
      this.$axios
        .post("http://localhost:3000/user/file-preview", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function () {
          console.log("SUCCESS!!");
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
    },
    upload_file() {
      this.modal_active = true;
    },
    close() {
      this.modal_active = false;
    },
  },
};
</script>