<template>
    <h5>Personal settings template</h5>
    <section>
      <imageEditComponent />
      <switcherComponent />
    </section>
</template>

<script>
import imageEditComponent from "@/components/Settings/imageEditComponent.vue";
import switcherComponent from "@/components/Settings/switcherComponent.vue";
export default {
  components: {
    imageEditComponent,
    switcherComponent
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  h5 {
    margin-bottom: 20px;
    font-size: 14px;
  }

  section {
    aside {
      margin-bottom: 20px;
      p {
        text-align: left;
      }
    }
  }
}

.white-theme {
  h5 {
    color: #fff;
    font-weight: 500;
  }

  p {
  }
}
</style>