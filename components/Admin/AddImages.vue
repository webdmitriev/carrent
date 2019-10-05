<template>
  <section class="new-post">
    <div class="container">
      <h2 class="title">Add Image</h2>
      <form class="new-post-form" @submit.prevent>
        <div class="form-group form-group-upload" v-if="!addImages.image">
          <button @click="onPickFile">
            <span>
              <img src="@/assets/img/icons/uploadimages.svg" alt="uploadimages" />
            </span>
          </button>
          <input
            type="file"
            style="display: none;"
            ref="fileInput"
            accept="image/*"
            @change="onFilePiked"
          />
        </div>

        <div class="form-group form-group-image" v-else>
          <div class="images">
            <img style="width: 100%;" :src="addImages.imageUrl ? addImages.imageUrl : imageUrl" />
          </div>
        </div>

        <div class="form-group">
          <AppButton @click="onCancel">Cancel</AppButton>
          <AppButton type="submit" @click="onSave" :disabled="!addImages.image">Save</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
// Advanced Use - Hook into Quill's API for Custom Functionality
import { VueEditor, Quill } from "vue2-editor";

export default {
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  components: {
    VueEditor
  },
  data() {
    return {
      content: "<h1>Some initial content</h1>",
      imageUrl: "",
      images: "",
      addImages: this.post
        ? { ...this.post }
        : {
            title: "",
            lang: "",
            content: "",
            html: "",
            image: ""
          }
    };
  },
  methods: {
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFilePiked(event) {
      const files = event.target.files;
      let fileName = files[0].name;
      if (fileName.lastIndexOf(".") <= 0) {
        return alert("Please add a valid file!");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.addImages.image = files[0];
    },
    onSave() {
      this.$emit("submit", this.addImages);
    },
    onCancel() {
      this.$router.push("/admin");
    }
  }
};
</script>

<style lang="scss" scoped>
.new-post {
  margin-top: 25px;
  padding: 25px;
  background-color: #fff;
  box-sizing: border-box;
  h2.title {
    font-size: 24px;
    text-align: left;
  }
  form.new-post-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    .form-group {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      width: 70%;
      min-height: 80px;
      .controls {
        width: 100%;
        label {
          display: block;
          text-align: left;
        }
      }
      &.form-group-upload {
        button {
          position: relative;
          width: 240px;
          height: 240px;
          font-size: 22px;
          font-weight: 100;
          line-height: 0;
          background-color: transparent;
          border-color: #777;
          cursor: pointer;
          span {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 120px;
            height: 120px;
            transform: translate(-50%, -50%);
          }
        }
      }
      &.form-group-image {
        .images {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          width: 240px;
          height: 240px;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}

@media (max-width: 1199px) {
}

@media (max-width: 991px) {
}

@media (max-width: 768px) {
}

@media (max-width: 576px) {
}

@media (max-width: 400px) {
}
</style>
