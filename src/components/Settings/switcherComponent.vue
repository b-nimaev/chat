<template>
  <ul class="switcher">
    <li>
      <a v-bind:class="{ active: isActive.light }" @click.prevent="switchTheme">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M428.3 367.5c-5.609-9.312-16.08-13.91-26.75-11.97c-42.39 8.188-85.83-2.938-119.2-30.5C248.4 297 228.9 255.5 228.9 211.3c0-52.75 28.2-101.8 73.59-127.8c9.453-5.406 14.38-15.88 12.55-26.66c-1.812-10.75-9.891-19-20.61-21C283.1 33.66 265.3 32 253.9 32C131.5 32 32 132.5 32 256s99.55 224 221.9 224c67.19 0 130-30.25 172.4-83C433.1 388.4 433.9 376.9 428.3 367.5zM253.9 448C149.2 448 64 361.9 64 256s85.19-192 189.9-192c4.891 0 11.53 .4062 18.09 1.031C225.3 98.34 196.9 152.9 196.9 211.3c0 53.84 23.7 104.3 65.05 138.5c36.25 29.94 82.17 43.88 128.5 39.69C354.8 426.8 305.8 448 253.9 448z"
          />
        </svg>
      </a>
    </li>
    <li>
      <a v-bind:class="{ active: isActive.dark }" @click.prevent="switchTheme">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M256 112C247.2 112 240 104.8 240 96V16C240 7.156 247.2 0 256 0s16 7.156 16 16V96C272 104.8 264.8 112 256 112zM272 496V416c0-8.844-7.156-16-16-16S240 407.2 240 416v80c0 8.844 7.156 16 16 16S272 504.8 272 496zM512 256c0-8.844-7.156-16-16-16H416c-8.844 0-16 7.156-16 16s7.156 16 16 16h80C504.8 272 512 264.8 512 256zM112 256c0-8.844-7.156-16-16-16H16C7.156 240 0 247.2 0 256s7.156 16 16 16H96C104.8 272 112 264.8 112 256zM380.5 154.2l56.56-56.59c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0l-56.56 56.59c-6.25 6.25-6.25 16.37 0 22.62c3.125 3.125 7.219 4.691 11.31 4.691S377.3 157.3 380.5 154.2zM97.61 437l56.56-56.59c6.25-6.25 6.25-16.37 0-22.62s-16.38-6.253-22.62-.0031l-56.56 56.59c-6.25 6.25-6.25 16.38 0 22.62c3.125 3.125 7.219 4.688 11.31 4.688S94.48 440.2 97.61 437zM437 437c6.25-6.25 6.25-16.38 0-22.62l-56.56-56.59c-6.25-6.25-16.38-6.247-22.62 .0031s-6.25 16.37 0 22.62l56.56 56.59c3.125 3.125 7.219 4.688 11.31 4.688S433.9 440.2 437 437zM154.2 154.2c6.25-6.25 6.25-16.37 0-22.62L97.61 74.97c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l56.56 56.59c3.125 3.125 7.219 4.688 11.31 4.688S151 157.3 154.2 154.2zM368 256c0-61.75-50.25-112-112-112S144 194.3 144 256s50.25 112 112 112S368 317.8 368 256zM336 256c0 44.13-35.89 80-80 80S176 300.1 176 256S211.9 176 256 176S336 211.9 336 256z"
          />
        </svg>
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
      svg {
        width: 20px;
        height: 20px;
        margin: auto;
        fill: $secondary;
        transition: 200ms;
      }
      &.active {
        background: $success;
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