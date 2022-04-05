<template>
  <ul class="switcher">
    <li>
      <a v-bind:class="{ active: isActive.light }" @click.prevent="switchTheme">
        <span>Yes</span>
      </a>
    </li>
    <li>
      <a v-bind:class="{ active: isActive.dark }" @click.prevent="switchTheme">
        <span>No</span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      isActive : {
        light: false,
        dark: true
      }
    }
  },
  methods: {
    switchTheme () {
      if (this.isActive.light) {
        this.isActive.light = false
        this.isActive.dark = true
      } else {
        this.isActive.light = true
        this.isActive.dark = false
      }
    }
  }
}
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
$success: #2bc333;
ul {
  list-style-type: none;
}

.switcher {
  background: #fff;
  border-radius: 30px;
  user-select: none;
  cursor: pointer;
  width: 80px;
  display: flex;
  margin: 0;
  padding: 0;
  li {
    margin: 0;
    position: relative;
    a {
      border-radius: 30px;
      height: 40px;
      width: 40px;
      background: #fff;
      display: flex;
      padding: 0;
      transition: 200ms;
      span {
        color: $secondary;
        margin: auto;
        text-align: center;
        width: 100%;
      }
      svg {
        width: 20px;
        height: 20px;
        margin: auto;
        fill: $secondary;
        transition: 200ms;
      }
      &.active {
        background: $success;
        span {
          color: #fff;
        }
        svg {
          fill: #fff;
        }
      }
    }
    &:first-child {
      left: -2px;
    }
    &:last-child {
      right: -2px;
    }
  }
}
</style>