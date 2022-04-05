<template>
  <router-view />
  <footer>
    <p>Anonimous social net</p>
  </footer>
</template>

<style lang="scss">
$box-shadow: -3px 2px 5px 0px #d5d5d5;
$marginSiize: 20px;

html {
  padding: 0;
}
body {
  background: #cec7c7;
  background-image: linear-gradient(149deg, #201f35 40%, #7d348c);
  background-repeat: no-repeat;
  min-height: calc(100vh - 20px);
  background-size: cover;
  color: #fff;
}

#app {
  // font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: linear-gradient(45deg, #1a0b28, #38303fe0);
  margin: 20px 20px 0 20px;
  border-radius: 10px;
  height: calc(100vh - 40px);
  padding: 20px;
  box-shadow: -3px 2px 5px 0px #00000029;
  display: flex;
  flex-direction: column;

}

footer {
  margin: auto auto 0;
  color: #fff;
  p {
    font-weight: 500;
  }
  a {
    color: #eee;
    font-weight: 300;
    font-style: italic;
    svg {
      fill: #eee;
      width: 25px;
      height: 25px;
      margin-right: 5px;
    }
    &:hover {
      color: #fff;
      svg {
        color: #fff;
      }
    }
  }
}
</style>

<script>
export default {
  data: () => {
    return {
      show: true,
    };
  },
  mounted: () => {

  },
};
</script>