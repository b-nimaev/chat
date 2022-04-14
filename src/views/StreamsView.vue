<template>
  <aside>
    <div class="row">
      <div class="col-md-5 col-lg-4">
        <div class="find">
          <div class="header">
            <h4>Base</h4>
            <p class="time">05:00</p>
          </div>
          <form>
            <div class="input-group">
              <input type="checkbox" id="geo" v-model="geo" />
              <label :class="{active: geo}" for="geo">Geoposition active</label>
            </div>
            <div class="input-group">
              <input type="checkbox" id="registered" v-model="reg" />
              <label :class="{ active: reg }" for="registered">Only registered</label>
            </div>
            <!--
            <div class="radio-group">
              <div class="input-group">
                <input type="radio" id="male" value="male" v-model="gender" />
                <label for="male" @click="genderChange">Male</label>
              </div>
              <div class="input-group">
                <input
                  type="radio"
                  id="female"
                  value="female"
                  v-model="gender"
                />
                <label for="female" @click="genderChange">Female</label>
              </div>
            </div>
             -->
             <div class="gender-group">
               <div class="input-group">
                 <input type="checkbox" id="male" value="male" v-model="male">
                 <label :class="{ active: male }" for="male">Male</label>
               </div>
               <div class="input-group">
                 <input type="checkbox" id="female" value="female" v-model="female">
                 <label :class="{ active: female }" for="female">Female</label>
               </div>
             </div>
            <button class="search">Search</button>
          </form>
          <p class="concern"><span></span>243 concern users</p>
          <ul style="list-style-type: none; text-align: left">
            <li>Geo: {{ geo }}</li>
            <li>Reg: {{ reg }}</li>
            <li>Male: {{ male }}</li>
            <li>Female: {{ female }}</li>
          </ul>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      geo: false,
      reg: false,
      male: false,
      female: false
    };
  },
  methods: {

  }
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
aside {
  border-radius: $border-radius-lg;
  // background: linear-gradient(327deg, #010c0712, #00000021);
  min-height: 400px;
  color: #fff;
}
form {
  button {
    margin-top: 1.5rem;
    background: $green-700
  }
}

.radio-group, .gender-group {
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
  background: $black;
  padding: 1.5rem;
  border-radius: $border-radius-lg;
  box-shadow: $box-shadow;

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