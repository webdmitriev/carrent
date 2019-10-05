<template>
  <section class="new-post">
    <div class="container">
      <h2>Добавить новый пост (на русском)</h2>
      <form @submit.prevent>
        <AppInput v-model="post.title">Title:</AppInput>
        <AppInput v-model="post.descr">Description:</AppInput>
        <AppInput v-model="post.img">Img Link:</AppInput>
        <AppTextArea v-model="post.content">Content:</AppTextArea>
        <!-- button -->
        <div class="controls">
          <AppButton class="btnDanger" @click="cancel">Cancel</AppButton>
          <AppButton @click="onSubmit">Save</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    postEdit: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      post: this.postEdit
        ? { ...this.postEdit }
        : {
            title: "",
            descr: "",
            img: "",
            content: ""
          }
    };
  },
  methods: {
    onSubmit() {
      this.$emit("submit", this.post);
    },
    cancel() {
      this.$router.push("/admin/");
    }
  }
};
</script>

<style lang="scss" scoped>
.controls {
  margin: 20px 0;
  text-align: center;
}
</style>
