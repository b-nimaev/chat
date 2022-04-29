<template>
  <header>

    <app-logotype />
    <app-navbar v-if="!mobile" />

    <div class="user" v-if="logged">
      <div
        @click="toggleActive"
        class="player"
        :class="{ active: playerActive }"
      >
        <img src="@/assets/avatars/cats.jpg" alt="" />
        <span class="angle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M360.5 217.5l-152 143.1C203.9 365.8 197.9 368 192 368s-11.88-2.188-16.5-6.562L23.5 217.5C13.87 208.3 13.47 193.1 22.56 183.5C31.69 173.8 46.94 173.5 56.5 182.6L192 310.9l135.5-128.4c9.562-9.094 24.75-8.75 33.94 .9375C370.5 193.1 370.1 208.3 360.5 217.5z"
            />
          </svg>
        </span>
        <div v-if="playerActive" class="dropdown-block">
          <ul>
            <li>
              <router-link to="/profile">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM224 32c52.94 0 96 43.06 96 96c0 52.93-43.06 96-96 96S128 180.9 128 128C128 75.06 171.1 32 224 32zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM413.3 480H34.66C33.2 480 32 478.8 32 477.3C32 399.4 95.4 336 173.3 336h101.3C352.6 336 416 399.4 416 477.3C416 478.8 414.8 480 413.3 480z"
                  />
                </svg>
                <span>Profile</span>
              </router-link>
            </li>
            <li>
              <router-link to="friends">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M274.7 304H173.3c-95.73 0-173.3 77.6-173.3 173.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM413.3 480H34.66C33.2 480 32 478.8 32 477.3C32 399.4 95.4 336 173.3 336H274.7C352.6 336 416 399.4 416 477.3C416 478.8 414.8 480 413.3 480zM224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM224 32c52.94 0 96 43.06 96 96c0 52.93-43.06 96-96 96S128 180.9 128 128C128 75.06 171.1 32 224 32zM375.1 241C392.9 250.8 412.3 256 432 256C493.8 256 544 205.8 544 144S493.8 32 432 32c-12.83 0-25.39 2.156-37.34 6.391c-8.328 2.953-12.69 12.09-9.734 20.42c2.953 8.344 12.12 12.66 20.42 9.734C413.9 65.53 422.8 64 432 64C476.1 64 512 99.89 512 144S476.1 224 432 224c-14.08 0-27.91-3.703-39.98-10.69c-7.656-4.453-17.44-1.828-21.86 5.828C365.7 226.8 368.3 236.6 375.1 241zM490.7 320H448c-8.844 0-16 7.156-16 16S439.2 352 448 352h42.67C555.4 352 608 404.6 608 469.3C608 475.2 603.2 480 597.3 480H496c-8.844 0-16 7.156-16 16s7.156 16 16 16h101.3C620.9 512 640 492.9 640 469.3C640 386.1 573 320 490.7 320z"
                  />
                </svg>
                <span>Friends</span>
              </router-link>
            </li>
            <li>
              <router-link to="messages">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M576 128H448v32h128c17.64 0 32 14.36 32 32v192c0 17.64-14.36 32-32 32h-64v49.57L424.4 416H320c-17.64 0-32-14.36-32-32v-32l-32-.0039v31.98c0 35.25 28.75 63.1 63.1 63.1L416 448l108.9 61.63C527.1 511.3 529.6 512 532 512C538.3 512 544 507.1 544 500v-52.03h32c35.25 0 64-28.75 64-63.1V191.1C640 156.7 611.3 128 576 128zM416 256V63.1C416 28.75 387.3 0 352 0H64C28.75 0 0 28.75 0 63.1v192C0 291.3 28.75 320 64 320l32 .0106V372C96 379.1 101.8 384 108 384c2.375 0 4.875-.75 7.125-2.375L224 320l128-.075C387.3 319.9 416 291.3 416 256zM215.6 288L128 337.6V288H64C46.36 288 32 273.6 32 256V64c0-17.64 14.36-32 32-32h288c17.64 0 32 14.36 32 32v192c0 17.64-14.36 32-32 32H215.6z"
                  />
                </svg>
                <span>Messages</span>
              </router-link>
            </li>
            <li>
              <router-link to="/settings">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M160 256C160 202.1 202.1 160 256 160C309 160 352 202.1 352 256C352 309 309 352 256 352C202.1 352 160 309 160 256zM256 208C229.5 208 208 229.5 208 256C208 282.5 229.5 304 256 304C282.5 304 304 282.5 304 256C304 229.5 282.5 208 256 208zM293.1 .0003C315.3 .0003 334.6 15.19 339.8 36.74L347.6 69.21C356.1 73.36 364.2 78.07 371.9 83.28L404 73.83C425.3 67.56 448.1 76.67 459.2 95.87L496.3 160.1C507.3 179.3 503.8 203.6 487.8 218.9L463.5 241.1C463.8 246.6 464 251.3 464 256C464 260.7 463.8 265.4 463.5 270L487.8 293.1C503.8 308.4 507.3 332.7 496.3 351.9L459.2 416.1C448.1 435.3 425.3 444.4 404 438.2L371.9 428.7C364.2 433.9 356.1 438.6 347.6 442.8L339.8 475.3C334.6 496.8 315.3 512 293.1 512H218.9C196.7 512 177.4 496.8 172.2 475.3L164.4 442.8C155.9 438.6 147.8 433.9 140.1 428.7L107.1 438.2C86.73 444.4 63.94 435.3 52.85 416.1L15.75 351.9C4.66 332.7 8.168 308.4 24.23 293.1L48.47 270C48.16 265.4 48 260.7 48 255.1C48 251.3 48.16 246.6 48.47 241.1L24.23 218.9C8.167 203.6 4.66 179.3 15.75 160.1L52.85 95.87C63.94 76.67 86.73 67.56 107.1 73.83L140.1 83.28C147.8 78.07 155.9 73.36 164.4 69.21L172.2 36.74C177.4 15.18 196.7 0 218.9 0L293.1 .0003zM205.5 103.6L194.3 108.3C181.6 113.6 169.8 120.5 159.1 128.7L149.4 136.1L94.42 119.9L57.31 184.1L98.81 223.6L97.28 235.6C96.44 242.3 96 249.1 96 256C96 262.9 96.44 269.7 97.28 276.4L98.81 288.4L57.32 327.9L94.42 392.1L149.4 375.9L159.1 383.3C169.8 391.5 181.6 398.4 194.3 403.7L205.5 408.4L218.9 464H293.1L306.5 408.4L317.7 403.7C330.4 398.4 342.2 391.5 352.9 383.3L362.6 375.9L417.6 392.1L454.7 327.9L413.2 288.4L414.7 276.4C415.6 269.7 416 262.9 416 256C416 249.1 415.6 242.3 414.7 235.6L413.2 223.6L454.7 184.1L417.6 119.9L362.6 136.1L352.9 128.7C342.2 120.5 330.4 113.6 317.7 108.3L306.5 103.6L293.1 48H218.9L205.5 103.6z"
                  />
                </svg>
                <span>Settings</span>
              </router-link>
            </li>
            <li>
              <a href="javascript:void(0)" @click.prevent="logout">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M192 456C192 469.3 181.3 480 168 480H96c-53.02 0-96-42.98-96-96V128c0-53.02 42.98-96 96-96h72C181.3 32 192 42.74 192 56C192 69.25 181.3 80 168 80H96C69.6 80 48 101.6 48 128v256c0 26.4 21.6 48 48 48h72C181.3 432 192 442.7 192 456zM505.5 239.6l-127.1-136c-9.094-9.688-24.28-10.12-33.91-1.031c-9.656 9.062-10.12 24.25-1.031 33.91L432.4 232H183.1C170.7 232 160 242.8 160 256s10.75 24 23.1 24h248.4l-89.92 95.56c-9.094 9.656-8.625 24.84 1.031 33.91C348.2 413.8 354.1 416 359.1 416c6.375 0 12.75-2.531 17.47-7.562l127.1-136C514.2 263.2 514.2 248.8 505.5 239.6z"
                  />
                </svg>
                <span>Sign out</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import logotype from '@/components/Header/HeaderLogotype.vue'
import navbar from '@/components/Header/HeaderNavbar.vue'

export default {
  data: () => {
    return {
      playerActive: false,
    };
  },
  components: {
    'app-logotype': logotype,
    'app-navbar': navbar
  },
  methods: {
    toggleActive() {
      if (this.playerActive) {
        this.playerActive = false;
      } else {
        this.playerActive = true;
      }
    },
    tohome() {
      if (this.$store.getters.token) {
        this.$router.push("/");
      } else {
        this.$router.push("/auth");
      }
    },
    logout() {
      this.$store.commit("logout");
      localStorage.setItem("user", "");
      this.$router.push("/auth");
    },
  },
  computed: {
    logged: function () {
      return this.$store.getters.token;
    },
    mobile: function () {
      return this.$store.getters.mobile;
    },
  },
};
</script>

<style lang="scss" scoped>
$padding: 0.8rem;
$background-player-active: #9a7ca7;
.dropdown-block {
  position: absolute;
  right: 0;
  top: 100%;
  background: $black;
  padding: $padding;
  border-radius: 0;
  width: max-content;
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  a {
    color: #eee;
    font-size: 14px;
    display: flex;
    padding: $padding/2;
    &:hover {
      color: #fff;
    }

    svg {
      fill: #fff;
      height: 14px;
      width: 14px;
      margin: auto $padding/2 auto 0;
    }
    span {
      margin: auto 0 auto 0;
    }
    &.router-link-active {
      left: 5px;
      transform: scale(1.05);
      span {
        color: #56ffb5;
      }
      svg {
        fill: #56ffb5;
      }
    }
  }
}

header {
  display: flex;
  margin-bottom: 0;
  padding: 12px 0;
  .user {
    margin: auto 0 auto auto;
    user-select: none;
  }
  .player {
    margin: auto 0 auto auto;
    display: flex;
    transition: 200ms;
    position: relative;
    height: 100%;
    z-index: 1;
    cursor: pointer;
    &.active {
      background-color: transparent;
    }
    img {
      width: 32px;
      height: 32px;
      border-radius: 32px;
      margin: auto 0 auto auto;
    }
    .angle {
      display: block;
      margin: auto 0 auto 5px;
      svg {
        height: 16px;
        width: 16px;
        fill: #7e4a71;
      }
    }
  }
}

.login {
  margin: auto 0 auto auto;
  a {
    color: #fff;
    text-shadow: 0 2px 3px #5bffb5;
    background: #2d2d2d;
    padding: 10px 20px;
    transition: 400ms;
    border-radius: 3px;
    &.router-link-active {
      background-color: #284245;
      color: #5bffb5;
    }
  }
}

@media screen and (max-width: 992px) {
  header {
  }
}

@media screen and (max-width: 768px) {
  header {
    padding: 1.5rem 0;
    margin-bottom: 0;
  }
}

@media screen and (max-width: 576px) {
  header {
    .player {
      padding: 0.5rem;
    }

    .menu {
      .links {
        li {
          a {
            font-size: 14px;
          }
        }
      }
    }
  }
  .dropdown-block {
    right: 0;
  }
}
</style>