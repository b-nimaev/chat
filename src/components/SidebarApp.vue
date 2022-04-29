<template>
  <aside>
    <user-avatar />
    <user-data />
    <sidebar-nav />
  </aside>
</template>

<script>
import avatar from "@/components/Sidebar/UserAvatar.vue";
import userdata from "@/components/Sidebar/UserData.vue";
import navbar from "@/components/Sidebar/SidebarNav.vue";
export default {
  components: {
    "user-avatar": avatar,
    "user-data": userdata,
    "sidebar-nav": navbar,
  },
};
</script>

<style lang="scss" scoped>
aside {
  color: #fff;
  width: 200px;
  margin-right: 1rem;
  background: #0000000f;
  padding: 1rem;
  border-radius: $border-radius-lg;
}
</style>
