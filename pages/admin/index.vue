<template>
  <h1>Админ панель</h1>
</template>

<script>
import axios from "axios";

export default {
  layout: "admin",
  computed: {
    postsLoaded() {
      // return this.$store.getters.getPostsLoaded;
    }
  }
};
</script>

<style>
</style>