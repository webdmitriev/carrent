<template>
  <section class="post-list">
    <div class="container">
      <ul class="admin-posts-list">
        <postPreview v-for="post in posts" :key="post.id" :admin="admin" :post="post" />
      </ul>
    </div>
  </section>
</template>

<script>
// PostPreview
import postPreview from "@/components/Parts/PostPreview.vue";
export default {
  components: {
    postPreview
  },
  props: {
    posts: {
      type: Array,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  },
  methods: {}
};
</script>

<style lang="scss">
ul.admin-posts-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}
</style>
