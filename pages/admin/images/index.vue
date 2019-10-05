<template>
  <div class="div">
    <addImages @submit="onSubmitted" />
  </div>
</template>

<script>
import addImages from "@/components/Admin/AddImages.vue";

// Advanced Use - Hook into Quill's API for Custom Functionality
import { VueEditor, Quill } from "vue2-editor";

export default {
  components: {
    addImages,
    VueEditor
  },
  layout: "admin",
  data() {
    return {
      content: "<h1>Some initial content</h1>"
    };
  },
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch("addImages", postData).then(() => {
        this.$router.push("/admin");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 45px;
  text-align: center;
  font-size: 28px;
  font-weight: 900;
}
</style>
