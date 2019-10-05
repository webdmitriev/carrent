<template>
  <div>
    <newPostFormBusket :postBusket="post" />
  </div>
</template>

<script>
import axios from "axios";

import newPostFormBusket from "@/components/Admin/NewPostFormBusket.vue";

export default {
  components: {
    newPostFormBusket
  },
  layout: "admin",
  asyncData(contex) {
    return axios
      .get(
        `https://carrent-3303f.firebaseio.com/busketpost/${contex.params.postId}.json`
      )
      .then(res => {
        return {
          post: { ...res.data, id: contex.params.postId }
        };
      })
      .catch(e => contex.error(e));
  },
  methods: {
    // onSubmit(post) {
    //   console.log("Post Editeng!");
    //   this.$store.dispatch("editPostBusket", post).then(() => {
    //     console.log(post);
    //     this.$router.push("/admin/orderedgoods/");
    //   });
    // }
  }
};
</script>
