<template>
  <div class="col-lg-3 col-xl-3 user-list">
    <aside>
      <ul>
        <UserComponent :v-for="user in users" :imageUrl="katya" />
        <li>
          <a
            href="javascript:void(0)"
            data-id="alexandrbnimaev"
            @contextmenu="handler($event)"
            @click.prevent="userSelected"
          >
            <img src="@/assets/avatars/98pPYHVTjOs.jpg" alt="" />
            <div class="userInfo">
              <span class="name">Alexandr</span>
              <span class="username">@someusername</span>
            </div>
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            data-id="zorigma"
            @click.prevent="userSelected"
          >
            <img src="@/assets/avatars/cats.jpg" alt="" />
            <div class="userInfo">
              <span class="name">Zorigma Muhadanova</span>
              <span class="username">@someusername</span>
            </div>
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            data-id="ekaterina"
            @click.prevent="userSelected"
          >
            <img src="@/assets/avatars/katya.jpg" alt="" />
            <div class="userInfo">
              <span class="name">Ekaterina Abramova</span>
              <span class="username">@someusername</span>
            </div>
          </a>
        </li>
      </ul>
    </aside>
  </div>
</template>
<script>
import UserComponent from "./UserComponent.vue";
export default {
  data() {
    return {
      users: [
        {
          first_name: "Alexandr",
          last_name: "Balzhinimaev",
          username: "@alexandrbnimaev",
          avatar: "@/assets/avatars/katya.jpg",
        },
        {
          first_name: "Ekaterina",
          last_name: "Abramova",
          username: "@katyabramova",
          avatar: "@/assets/avatars/katya.jpg",
        },
      ],
    };
  },
  components: {
    UserComponent,
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
  },
};
</script>
<style lang="scss">
.user-list {
  ul {
    padding: 0;
    margin: -15px 0;
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
          margin: auto 0;
          span {
            display: block;
            font-size: 16px;
            line-height: 1;
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