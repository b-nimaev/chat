<template>
  <aside>
    <h4>Settings</h4>
    <div class="group">
      <h5>Color scheme:</h5>
      <switcherComponent/>
    </div>
    <div class="searchGeoParams">
      <h5>Search for GPS</h5>
      <switcherGPSComponent/>
    </div>
  </aside>
</template>

<script>
import switcherComponent from "@/components/switcherComponent.vue";
import switcherGPSComponent from "@/components/GPSComponent.vue";
export default {
  components: {
    switcherComponent,
    switcherGPSComponent,
  },
};
</script>

<style lang="scss" scoped>
.group, .searchGeoParams {
  display: flex;
  margin: 15px 0;
  h5 {
    margin: auto 15px auto 0;
  }
}
aside {
  padding: 30px
}
</style>