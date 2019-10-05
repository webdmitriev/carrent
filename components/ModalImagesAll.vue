<template>
  <modals @close="$emit('close')" title="Медиатека">
    <!-- Slot body -->
    <div slot="imagesAll">
      <h3>Загрузка картинок</h3>
      <ul class="allImages">
        <li class="item" v-for="post in posts" :key="post.id">
          <div class="images">
            <img :src="post.imageUrl" alt="images" @click="linkCopy(post.imageUrl)" />
            <!-- <pre>{{ post }}</pre> -->
          </div>
        </li>
      </ul>
    </div>
    <!-- /Slot body -->
  </modals>
</template>

<script>
import Vue from "vue";
import axios from "axios";
var bus = new Vue();

import VueSweetalert2 from "vue-sweetalert2";
Vue.use(VueSweetalert2);

import modals from "@/components/UI/Modal";

// var $video = $('#video'),
// src = $video.attr('src');
// onClick='checkName(this.value)'
// getAttribute()
// document.execCommand('copy')

export default {
  components: {
    modals
  },
  props: ["src"],
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.loadComments();
  },
  methods: {
    loadComments() {
      axios
        .get("https://carrent-3303f.firebaseio.com/images.json")
        .then(res => {
          let postsArray = [];
          Object.keys(res.data).forEach(key => {
            const posts = res.data[key];
            postsArray.push({ ...posts, id: key });
          });
          this.posts = postsArray;
        });
    },
    linkCopy(src) {
      // ===
      var copytext = document.createElement("input");
      copytext.value = src;
      document.body.appendChild(copytext);
      copytext.select();
      document.execCommand("copy");
      document.body.removeChild(copytext);
      // ===
      this.$swal("Ссылка скопирована в буфер!");
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
ul.allImages {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  li.item {
    width: 24%;
    img {
      width: 100%;
      height: 180px;
      object-fit: contain;
    }
  }
}
</style>
