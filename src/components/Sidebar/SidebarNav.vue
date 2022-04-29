<template>
  <ul>
    <li>
      <router-link to="/profile">
        <span>Мой профиль</span>
      </router-link>
    </li>
    <li>
      <router-link to="friends">
        <span>Контакты</span>
      </router-link>
    </li>
    <li>
      <router-link to="messages">
        <span>Сообщения</span>
      </router-link>
    </li>
    <li>
      <router-link to="settings">
        <span>Настройки</span>
      </router-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
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
</style>