<template>
  <div class="settings">
    <div class="left-side">
      <ul>
        <li>
          <router-link to="/settings/personal-settings"
            >Личные данные</router-link
          >
        </li>
        <li>
          <router-link to="/settings/personal-private-settings"
            >Настройки приватности</router-link
          >
        </li>
        <li>
          <router-link to="/settings/personal-common-settings"
            >Общие настройки</router-link
          >
        </li>
      </ul>
    </div>
    <div class="right-side">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate: function () {
    this.$router.push("/settings/personal-settings");
  },
};
</script>

<style lang="scss">
.left-side {
  padding: 0.5rem 0;
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    li {
      overflow: hidden;
      a {
        padding: 10px 15px;
        display: block;
        color: #fff;
        transition: 200ms;
        position: relative;
        text-align: left;

        &:after {
          content: "";
          display: block;
          position: absolute;
          background: #56ffb5;
          transition: 200ms;
          height: 100%;
          top: 0;
          width: 15px;
          right: calc(100% + 5px);
        }
        &.router-link-active {
          color: $link-color;
          left: 3px;
          background: #1f1d1d36;
          &:after {
            right: 100%;
          }
        }
      }
    }
  }
}
.right-side {
  padding: 1rem;
  background: rgb(0 0 0 / 5%);
  flex: 1;
  margin-left: 1rem;
  border-radius: 8px;
}

.settings {
  display: flex;
  padding: 0;
  aside {
    display: flex;
    p {
      margin: auto 0;
    }
    margin: 0 0 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.white-theme {
  .right-side {
    background: rgb(255 53 127);
  }
}

@media screen and (max-width: 768px) {
  .left-side ul li a {
    font-size: 12px;
  }
}

</style>