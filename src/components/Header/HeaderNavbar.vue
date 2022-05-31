<template>
  <div>
    <ul>
      <li>
        <router-link to="/streams">Игры</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  div {
    display: flex;
    ul {
      list-style-type: none;
      margin: auto 0;
      display: flex;
      padding: 0;
      li {
        a {
          // text-shadow: 0 2px 3px #5bffb5;
          font-size: 16px;
          color: $white;
          &.router-link-active {
            color: #5bffb5;
          }
        }
      }
    }
  }
</style>