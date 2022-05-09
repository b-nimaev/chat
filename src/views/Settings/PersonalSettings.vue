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