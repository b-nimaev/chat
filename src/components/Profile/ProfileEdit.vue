<template>
  <div>
    <article id="about">
      <div>
        <h4>Edit component</h4>
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
          <p>Successful dialogs: <span>85%</span></p>
        </li>
        <li>
          <p>Average rating: <span>8 of 10</span></p>
        </li>
        <li>
          <p>Rating: <span>195</span></p>
        </li>
      </ul>
    </article>
    <article id="verified">
      <h5>Verified details</h5>
      <ul>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M240.1 336.1C231.6 346.3 216.4 346.3 207 336.1L151 280.1C141.7 271.6 141.7 256.4 151 247C160.4 237.7 175.6 237.7 184.1 247L224 286.1L319 191C328.4 181.7 343.6 181.7 352.1 191C362.3 200.4 362.3 215.6 352.1 224.1L240.1 336.1zM344.1 43.41C377 39.1 411.6 49.59 437 74.98C462.4 100.4 472.9 134.1 468.6 167.9C494.1 188.2 512 220.1 512 256C512 291.9 494.1 323.8 468.6 344.1C472.9 377 462.4 411.6 437 437C411.6 462.4 377 472.9 344.1 468.6C323.8 494.1 291.9 512 256 512C220.1 512 188.2 494.1 167.9 468.6C134.1 472.9 100.4 462.4 74.98 437C49.6 411.6 39.1 377 43.41 344.1C17.04 323.8 0 291.9 0 256C0 220.1 17.04 188.2 43.42 167.9C39.1 134.1 49.6 100.4 74.98 74.98C100.4 49.6 134.1 39.1 167.9 43.41C188.2 17.04 220.1 0 256 0C291.9 0 323.8 17.04 344.1 43.41L344.1 43.41zM190.1 99.07L172 93.25C150.4 86.6 125.1 91.87 108.9 108.9C91.87 125.1 86.6 150.4 93.25 172L99.07 190.1L81.55 200.3C61.54 210.9 48 231.9 48 256C48 280.1 61.54 301.1 81.55 311.7L99.07 321L93.25 339.1C86.6 361.6 91.87 386 108.9 403.1C125.1 420.1 150.4 425.4 172 418.7L190.1 412.9L200.3 430.5C210.9 450.5 231.9 464 256 464C280.1 464 301.1 450.5 311.7 430.5L321 412.9L339.1 418.8C361.6 425.4 386 420.1 403.1 403.1C420.1 386 425.4 361.6 418.7 339.1L412.9 321L430.5 311.7C450.5 301.1 464 280.1 464 256C464 231.9 450.5 210.9 430.5 200.3L412.9 190.1L418.7 172C425.4 150.4 420.1 125.1 403.1 108.9C386 91.87 361.6 86.6 339.1 93.25L321 99.07L311.7 81.55C301.1 61.54 280.1 48 256 48C231.9 48 210.9 61.54 200.3 81.55L190.1 99.07z"
            />
          </svg>
          <span>Name & Surname</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M240.1 336.1C231.6 346.3 216.4 346.3 207 336.1L151 280.1C141.7 271.6 141.7 256.4 151 247C160.4 237.7 175.6 237.7 184.1 247L224 286.1L319 191C328.4 181.7 343.6 181.7 352.1 191C362.3 200.4 362.3 215.6 352.1 224.1L240.1 336.1zM344.1 43.41C377 39.1 411.6 49.59 437 74.98C462.4 100.4 472.9 134.1 468.6 167.9C494.1 188.2 512 220.1 512 256C512 291.9 494.1 323.8 468.6 344.1C472.9 377 462.4 411.6 437 437C411.6 462.4 377 472.9 344.1 468.6C323.8 494.1 291.9 512 256 512C220.1 512 188.2 494.1 167.9 468.6C134.1 472.9 100.4 462.4 74.98 437C49.6 411.6 39.1 377 43.41 344.1C17.04 323.8 0 291.9 0 256C0 220.1 17.04 188.2 43.42 167.9C39.1 134.1 49.6 100.4 74.98 74.98C100.4 49.6 134.1 39.1 167.9 43.41C188.2 17.04 220.1 0 256 0C291.9 0 323.8 17.04 344.1 43.41L344.1 43.41zM190.1 99.07L172 93.25C150.4 86.6 125.1 91.87 108.9 108.9C91.87 125.1 86.6 150.4 93.25 172L99.07 190.1L81.55 200.3C61.54 210.9 48 231.9 48 256C48 280.1 61.54 301.1 81.55 311.7L99.07 321L93.25 339.1C86.6 361.6 91.87 386 108.9 403.1C125.1 420.1 150.4 425.4 172 418.7L190.1 412.9L200.3 430.5C210.9 450.5 231.9 464 256 464C280.1 464 301.1 450.5 311.7 430.5L321 412.9L339.1 418.8C361.6 425.4 386 420.1 403.1 403.1C420.1 386 425.4 361.6 418.7 339.1L412.9 321L430.5 311.7C450.5 301.1 464 280.1 464 256C464 231.9 450.5 210.9 430.5 200.3L412.9 190.1L418.7 172C425.4 150.4 420.1 125.1 403.1 108.9C386 91.87 361.6 86.6 339.1 93.25L321 99.07L311.7 81.55C301.1 61.54 280.1 48 256 48C231.9 48 210.9 61.54 200.3 81.55L190.1 99.07z"
            />
          </svg>
          <span>Date of birth</span>
        </li>
      </ul>
    </article>
  </div>
</template>

<style lang="scss" scoped>
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
    color: #b3b3b3;
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
        font-size: 12px;
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
  &#verified {
    li {
      background-color: $black;
      margin: 1rem;
      padding: 20px;
      display: flex;
      justify-content: center;
      border-radius: 3px;
      svg {
        fill: #35e1d1;
        width: 18px;
        height: 18px;
        margin: auto 8px auto 0;
      }
      span {
        font-size: 18px;
        color: #fff;
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
</style>