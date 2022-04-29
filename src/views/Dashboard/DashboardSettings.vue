<template>
  <div class="settings">
    <switcherComponent />
  </div>
</template>

<script>
import switcherComponent from "@/components/Settings/switcherComponent.vue";
export default {
  components: {
    switcherComponent
  },
};
</script>

<style lang="scss" scoped>
.settings {
  padding: .5rem;

}
</style>