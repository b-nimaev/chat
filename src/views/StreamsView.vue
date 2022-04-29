<template>
  <div class="streams">
    <div class="find">
      <div class="header">
        <h4>Base</h4>
        <p class="time">05:00</p>
      </div>
      <form>
        <div class="input-group">
          <input type="checkbox" id="geo" v-model="preset.geoposition" />
          <label :class="{ active: preset.geoposition }" for="geo"
            >Geolocation active</label
          >
        </div>
        <div class="input-group">
          <input type="checkbox" id="registered" v-model="preset.registered" />
          <label :class="{ active: preset.registered }" for="registered"
            >Only registered</label
          >
        </div>
        <div class="gender-group">
          <div class="input-group">
            <input
              type="checkbox"
              id="male"
              value="male"
              v-model="preset.gender.male"
            />
            <label :class="{ active: preset.gender.male }" for="male"
              >Male</label
            >
          </div>
          <div class="input-group">
            <input
              @change="changed"
              type="checkbox"
              id="female"
              value="female"
              v-model="preset.gender.female"
            />
            <label :class="{ active: preset.gender.female }" for="female"
              >Female</label
            >
          </div>
        </div>
        <button class="search">Search</button>
      </form>
      <p class="concern"><span></span>243 concern users</p>
      <ul style="list-style-type: none; text-align: left">
        <li>Geo: {{ preset.geoposition }}</li>
        <li>Reg: {{ preset.registered }}</li>
        <li>Male: {{ preset.gender.male }}</li>
        <li>Female: {{ preset.gender.female }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    preset: function () {
      return this.$store.getters.base_search;
    },
  },
  methods: {
    changed: function () {
      console.log("changed");
    },
  },
};
</script>

<style lang="scss" scoped>
.concern {
  display: flex;
  padding: 10px 0;
  justify-content: center;
  margin: 0;
  span {
    display: inline-block;
    width: 5px;
    height: 5px;
    margin: auto 5px auto 0;
    background: $green;
    border-radius: 50%;
  }
}
form {
  button {
    margin-top: 1.5rem;
    background: $green-700;
  }
}

.radio-group,
.gender-group {
  display: flex;
  .input-group {
    width: 50%;
    margin: 0;
  }
  label {
    width: 100%;
    padding: 5px 10px;
    background: $green-700;
  }
}

.input-group {
  display: flex;
  width: 100%;
  margin-bottom: 5px;
  label,
  input {
    cursor: pointer;
    user-select: none;
  }
  input {
    margin: auto 0;
    display: none;
  }
  label {
    width: 100%;
    padding: 5px 10px;
    background: $green-800;
    border-radius: $border-radius-lg;
    margin-left: 5px;
    transition: 300ms;
    &.active {
      background: $green-700;
    }
  }
}

.find {
  background: #0000000f;
  width: 400px;
  padding: 1.5rem;
  border-radius: $border-radius-lg;

  .header {
    user-select: none;
    h4 {
      color: $primary;
      margin-bottom: 5px;
    }
    .time {
      color: #888;
    }
  }

  button {
    border: 0;
    border-radius: $border-radius-lg;
    transition: 300ms;
    &.search {
      background: $green-700;
      padding: 5px 20px;
      font-size: 14px;
      line-height: 24px;
      color: #fff;
      &:hover {
        background: $green;
        color: $dark;
      }
    }
  }
}
</style>