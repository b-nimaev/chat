<template>
  <div class="d-none d-lg-block col-lg-4 col-xl-3 user-list">
    <aside>
      <ul v-if="users">
        <li v-for="user in users" :key="user">
          <a :data-username="user.username" href="javascript:void(0)"  @click.prevent="selectUser(user.username)">
            <img :src="require(`../../../assets/avatars/${user.avatar}.jpg`)" alt="">
            <div class="userInfo">
              <span class="name">{{ user.first_name + ' ' + user.last_name }}</span>
              <span class="username">{{ user.username }}</span>
            </div>
          </a>
        </li>
      </ul>
    </aside>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: [
        {
          first_name: "Alexandr",
          last_name: "Balzhinimaev",
          username: "@alexandrbnimaev",
          avatar: "cats",
        },
        {
          first_name: "Ekaterina",
          last_name: "Abramova",
          username: "@katyabramova",
          avatar: "katya",
        },
      ],
    };
  },
  methods: {
    handler: function (e) {
      //do stuff
      e.preventDefault();
      console.log(e);
    },
    user() {
      this.$router.push("user/" + this.id);
    },
    userSelected(e) {
      console.log(e.target);
    },
    selectUser (user) {
      console.log(user)
    }
  },
};
</script>
<style lang="scss">
.user-list {
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    li {
      position: relative;
      margin: 15px 0;
      transition: 200ms;
      transform: scale(1);
      left: 0;
      a {
        display: flex;
        color: #000;
        img {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          margin: auto 0 auto 0;
          object-fit: cover;
          display: block;
        }
        .userInfo {
          flex: 1;
          margin: auto 0 auto 10px;
          span {
            display: block;
            font-size: 14px;
            line-height: 1;
            color: #fff;
            &.username {
              font-weight: 300;
              color: #999;
              font-size: 12px;
            }
          }
        }
      }

      &:hover {
        transform: scale(1.1);
        left: 10px;
      }
    }
  }
}
</style>