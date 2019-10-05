<template>
  <div class="wrapper">
    <Aside />
    <div class="admin-posts">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Header from "@/components/system/Header.vue";
import Aside from "@/components/Admin/Aside.vue";
export default {
  components: {
    Header,
    Aside
  },
  middleware: ["auth"],
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostsLoaded;
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #fff;
}
.admin-posts {
  width: 78%;
  padding-top: 8px;
  margin-left: 20%;
  background-color: #fff;
}

@media (max-width: 1199px) {
  .admin-posts {
    width: 79%;
    margin-left: 20%;
    background-color: #fff;
  }
}
</style>
