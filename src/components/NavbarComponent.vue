<template>
  <aside class="sidebar">
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
        <router-link to="streams">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M576 128H448v32h128c17.64 0 32 14.36 32 32v192c0 17.64-14.36 32-32 32h-64v49.57L424.4 416H320c-17.64 0-32-14.36-32-32v-32l-32-.0039v31.98c0 35.25 28.75 63.1 63.1 63.1L416 448l108.9 61.63C527.1 511.3 529.6 512 532 512C538.3 512 544 507.1 544 500v-52.03h32c35.25 0 64-28.75 64-63.1V191.1C640 156.7 611.3 128 576 128zM416 256V63.1C416 28.75 387.3 0 352 0H64C28.75 0 0 28.75 0 63.1v192C0 291.3 28.75 320 64 320l32 .0106V372C96 379.1 101.8 384 108 384c2.375 0 4.875-.75 7.125-2.375L224 320l128-.075C387.3 319.9 416 291.3 416 256zM215.6 288L128 337.6V288H64C46.36 288 32 273.6 32 256V64c0-17.64 14.36-32 32-32h288c17.64 0 32 14.36 32 32v192c0 17.64-14.36 32-32 32H215.6z"
            />
          </svg>
          <span>Streams</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  width: 100%;
  height: fit-content;
  background: $black;
  box-shadow: $box-shadow;
  border-radius: $border-radius-lg;
  ul {
    li {
      a {
        span {
          color: #fff;
        }
        svg {
          fill: #fff;
        }
      }
    }
  }
}
ul {
  display: block;
  margin: 0;
  padding: 1rem;
  list-style-type: none;
  li {
    a {
      display: flex;
      padding: 0.8rem 1rem;
      span {
        display: block;
        color: #fff;
        font-weight: 500;
        text-align: left;
        font-size: 18px;
        display: flex;
        position: relative;
        transform: scale(1);
        margin: auto 0 auto 10px;
        left: 0;
      }
      svg {
        width: 20px;
        height: 20px;
        margin: auto 0;
        fill: #fff;
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
}

@media screen and (max-width: 1200px) {
  ul {
    li {
      a {
        padding: 0.4rem .5rem;
        svg {
          width: 16px;
          height: 16px;
        }
        span {
          font-size: 14px;
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  aside {
    margin-bottom: 1rem;
  }
  ul {
    display: flex;
  }
}
</style>