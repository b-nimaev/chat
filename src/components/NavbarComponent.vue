<template>
  <aside class="sidebar">
    <ul>
      <li>
        <router-link to="/profile">
          <span>Profile</span>
        </router-link>
      </li>
      <li>
        <router-link to="friends">
          <span>Friends</span>
        </router-link>
      </li>
      <li>
        <router-link to="messages">
          <span>Messages</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  width: 100%;
  height: fit-content;
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
        text-align: left;
        font-size: 18px;
        display: flex;
        position: relative;
        transform: scale(1);
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
    margin: 0 -.7rem;
    li {
      a {
        padding: 0.4rem .7rem;
        svg {
          width: 16px;
          height: 16px;
        }
        span {
          font-size: 16px;
        }

        &.router-link-active {
          left: 0;
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