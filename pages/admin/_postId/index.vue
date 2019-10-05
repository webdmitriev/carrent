<template>
  <div>
    <newPostForm :postEdit="post" @submit="onSubmit" />
    <!-- <pre>{{post}}</pre> -->
  </div>
</template>

<script>
import axios from "axios";

import newPostForm from "@/components/Admin/NewPostForm.vue";

export default {
  components: {
    newPostForm
  },
  layout: "admin",
  asyncData(contex) {
    return axios
      .get(
        `https://carrent-3303f.firebaseio.com/posts/${contex.params.postId}.json`
      )
      .then(res => {
        return {
          post: { ...res.data, id: contex.params.postId }
        };
      })
      .catch(e => contex.error(e));
  },
  methods: {
    onSubmit(post) {
      console.log("Post Editeng!");
      this.$store.dispatch("editPost", post).then(() => {
        this.$router.push("/admin");
      });
    }
  }
};
</script>
