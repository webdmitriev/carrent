<template>
  <section v-if="comments" class="comments">
    <div class="container">
      <h3 class="title">Comment for Post</h3>
      <p v-if="comments.length == 0">Никто ещё не оставил комментариев</p>
      <div class="comment" v-for="(comment, index) in comments" :key="index">
        <p class="name">{{ comment.name }}</p>
        <p class="text">{{ comment.text }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      default: null
    }
  }
};
</script>

<style lang="scss">
.comments {
  margin: 30px auto;
  h3.title {
    text-align: center;
  }
  .comment {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 25px;
    padding: 12px;
    background-color: #fff;
    box-sizing: border-box;
    p {
      text-align: center;
      &.name {
        width: 100%;
        margin-bottom: 15px;
        font-size: 24px;
        font-weight: 700;
      }
      &.text {
        width: 100%;
      }
    }
  }
}
</style>
