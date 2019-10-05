<template>
  <li class="post-item">
    <nuxt-link class="post-preview" :to="getLink">
      <h3 class="title">{{ post.nameCar }}</h3>
      <p>{{ post.id }}</p>
      <!-- <p>{{ post.content.slice( 0, 130 ) }}</p> -->
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getLink() {
      return this.admin ? `/admin/${this.post.id}` : `/carpark/${this.post.id}`;
    }
  }
};
</script>

<style lang="scss" scoped>
li.post-item {
  width: 100%;
  a.post-preview {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-bottom: 5px;
    padding: 10px;
    background-color: #fff;
    .images {
      width: 10%;
      height: 120px;
      margin-right: 25px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    h3.title {
      width: 30%;
      font-size: 20px;
      font-weight: 700;
      color: #333;
    }
    p {
      width: 55%;
      font-size: 16px;
      color: #666;
    }
  }
}
</style>
