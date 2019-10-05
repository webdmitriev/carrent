<template>
  <div>
    <PostsList :admin="true" :posts="allPosts" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  layout: "admin",
  data() {
    return {
      allPosts: []
    };
  },
  mounted() {
    this.allPost();
  },
  methods: {
    async allPost() {
      return await axios
        .get("https://carrent-3303f.firebaseio.com/posts.json")
        .then(res => {
          const allPostArray = [];
          for (let key in res.data) {
            allPostArray.push({ ...res.data[key], id: key });
          }

          this.allPosts = allPostArray.reverse();
          console.log(this.allPosts);
        })
        .catch(e => console.log(e));
    }
  }
};
</script>

<style>
</style>