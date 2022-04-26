<template>
  <aside>
    <div class="row">
      <div class="col-4 col-sm-4 col-md-3 col-lg-3">
        <div class="left__side">
          <div class="avatar">
            <img v-if="avatar" :src="require(`@/assets/avatars/${avatar}`)" alt="" />
            <div class="add"  v-if="!avatar && visible">
              <button>+</button>
            </div>
          </div>
        </div>
        <button class="edit">Edit</button>
      </div>
      <div class="col">
        <div class="right__side">
          <profile-edit></profile-edit>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>

import ProfileEdit from '@/components/Profile/ProfileFront.vue'

export default {
  data () {
    return {
      visible: false
      // avatar: '98pPYHVTjOs.jpg'
    }
  },
  computed: {
    avatar: function () {
      return this.$store.getters.me.avatar
    }
  },
  components: {
    ProfileEdit
  }
}
</script>

<style lang="scss" scoped>
button {
  &.edit {
    background: $black;
    color: #fff;
    padding: .8rem 1.5rem;
    border: 0;
    border-radius: $border-radius-lg;
    width: 100%;
    margin: 1.5rem 0;
    transition: 200ms;
    &:hover {
      background-color: $gray-900;
    }
  }
}
.left__side {
  padding: 1.5rem;
  color: #fff;
  background-color: $black;
  border-radius: $border-radius-lg;
}
.right__side {
  background: #040507;
  box-shadow: 5px 10px 3px #000;
  padding: 1.5rem;
  border-radius: $border-radius-lg;
  color: #777;
}
.avatar {
  margin: 0 auto;
  height: auto;
  overflow: hidden;
  border-radius: 3px;
  background: #fff;
  height: 200px;
  img {
    width: 200px;
    height: 200px;
    border-radius: 0.3rem;
    object-fit: cover;
    position: relative;
  }
  .add {
    button {
      border: 0;
      padding: 20px 30px;
      font-size: 24px;
      line-height: 1;
      background: #222;
      color: #fff;
    }
  }
}
@media screen and (max-width: 1400px) {

  .avatar {
    width: 100%;
    img {
      width: 100%;
      height: 160px;
    }
  }

  main {
    section {
      &#rating {
        article {
          padding: 15px 0;
          p {
            font-size: 14px;
          }
          span {
            font-size: 16px;
          }
        }
      }
      &#verifiedDetails {
        article {
          span {
            font-size: 14px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .avatar {
    img {
      height: 140px;
    }
  }
}
@media screen and (max-width: 992px) {
  .right__side, .left__side {
    padding: 1rem;
  }
  .avatar {
    width: 130px;
    img {
      width: 100%;
      height: 130px;
    }
  }
}
@media screen and (max-width: 768px) {
  .avatar {
    img {
      height: 130px;
    }
  }
}
@media screen and (max-width: 768px) {
  .avatar {
    width: 100%;
    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>