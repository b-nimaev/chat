<template>
  <section>
    <div class="avatar">
      <img v-if="avatar" :src="require(`@/assets/avatars/${avatar}`)" alt="" />
    </div>
  </section>
</template>