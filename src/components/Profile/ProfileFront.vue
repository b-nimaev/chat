<template>
  <div>
    <article id="about">
      <div>
        <div class="name">
          <h4>Alexandr Balzhinimaev</h4>
        </div>
        <p class="status">Awesome text Lorem, ipsum dolor.</p>
      </div>
      <div class="net_status">
        <p><span></span> Online</p>
      </div>
    </article>
    <article id="rating">
      <h5>Rating</h5>
      <ul>
        <li>
          <p>Successful dialogs<span>85%</span></p>
        </li>
        <li>
          <p>Average rating<span>8 of 10</span></p>
        </li>
        <li>
          <p>Rating<span>195</span></p>
        </li>
      </ul>
    </article>
  </div>
</template>

<style lang="scss" scoped>
h4,
p.status {
  cursor: pointer;
  user-select: none;
  transition: 300ms;
  &:hover {
    color: #fff;
  }
}
article {
  padding: 0;
  margin: 0 0 1.5rem;
  text-align: left;
  &:last-child {
    margin-bottom: 0;
  }
  h4 {
    margin-bottom: 2px;
  }
  .status {
    font-size: 15px;
    margin: 0;
    color: #777;
    text-align: left;
    font-weight: 400;
  }
  &#about {
    display: flex;
    .net_status {
      margin: auto 0 auto auto;
      p {
        margin: 0;
        display: flex;
        cursor: pointer;
        user-select: none;
        span {
          display: block;
          height: 8px;
          width: 8px;
          margin: auto 5px;
          background: $green;
          border-radius: 50%;
        }
      }
    }
  }
  &#rating {
    li {
      margin: 1rem;
      padding: 30px;
      border-radius: 3px;
      width: 100%;
      background: $black;
      display: flex;
      p {
        margin: auto;
        color: #35e1d1;
        font-size: 18px;
      }
      span {
        display: block;
        text-align: center;
        color: orange;
        font-size: 18px;
        font-weight: 700;
        text-shadow: -1px 1px 6px orange;
        margin: auto;
      }
    }
  }
}

ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  margin: 0 -1rem;
}

@media screen and (max-width: 992px) {
  article {
    h4 {
      font-size: 18px;
    }
    .status {
      font-size: 12px;
    }
    &#rating {
      h5 {
        margin-bottom: 1rem;
      }
      ul {
        margin: 0 auto;
        li {
          padding: 1rem 0;
          margin: 0 1rem 0 0;
          p, span {
            font-size: 14px;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  article {
    h4 {
      font-size: 1.5rem;
    }
    .status {
      font-size: .875rem;
    }
    &#rating {
      h5 {
        margin-bottom: .5rem;
      }
      ul {
        margin: 0 auto;
        flex-wrap: wrap;
        li {
          padding: 0;
          margin: 0;
          background-color: unset;
          p {
            text-align: left;
            font-size: 14px;
            margin: 0;
          }
          span {
            display: inline;
            font-size: 14px;
            line-height: 1;
            position: relative;
            top: 1px;
            margin-left: 5px;
          }
        }
      }
    }
  }
}
</style>