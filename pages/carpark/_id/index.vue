<template>
  <div>
    <Header />

    <div class="carpark preveiwCar">
      <div class="container">
        <post :post="post" :postId="postId" />
      </div>

      <div class="container">
        <busketPost :post="post" :postId="postId" @submit="onSubmitted" />
      </div>
    </div>

    <partners />

    <feedback />

    <Footer />
  </div>
</template>

<script>
import axios from "axios";

import post from "@/components/Parts/PreveiwCar.vue";
import busketPost from "@/components/Parts/busketPost";
import partners from "@/components/Parts/Partners";

import Header from "@/components/system/Header.vue";
import Footer from "@/components/system/Footer.vue";

import feedback from "@/components/Parts/Feedback";

export default {
  components: {
    post,
    busketPost,
    partners,
    Header,
    Footer,
    feedback
  },
  async asyncData(context) {
    let [post, comments] = await Promise.all([
      axios.get(
        `https://carrent-3303f.firebaseio.com/posts/${context.params.id}.json`
      )
    ]);

    return {
      post: post.data,
      postId: context.params.id
    };
  },
  data() {
    return {};
  },
  mounted() {
    // console.log(post);
  },
  methods: {
    onSubmitted(postData, context) {
      this.$store.dispatch("busketPost", postData).then(() => {
        // this.$router.go();
        console.log(this.postId);
        this.deletePost(this.postId);
      });
    },
    deletePost(id) {
      axios
        .delete(`https://carrent-3303f.firebaseio.com/posts/${id}.json`)
        .then(res => {
          this.$store.getters.getPostsLoaded;
          this.$router.push("/");
        });
    }
  }
};
</script>

<style lang="scss">
.preveiwCar {
  padding-top: 60px;
  background: url("../../../assets/img/main-bg.jpg") center no-repeat;
  background-size: cover;
  .preveiwCar-wrapper {
    margin-bottom: 45px;
    padding: 20px;
    background-color: #fff;
    box-sizing: border-box;
    .breadcrumbs {
      margin-bottom: 10px;
      a {
        font-size: 17px;
        color: #a3a3a3;
        span {
          margin-right: 8px;
        }
      }
    }
    .preveiwCar-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      .preveiwCar-left {
        width: 44%;
        .images {
          width: 100%;
          img {
            width: 100%;
          }
        }
        .images-preveiw {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;
          margin-top: 25px;
          .preveiw-img {
            width: 22%;
            p {
              // height: 100px;
            }
            img {
              width: 100%;
              height: 80px;
              object-fit: cover;
            }
          }
        }
      }
      .preveiwCar-right {
        width: 50%;
        h1.title {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: center;
          font-size: 36px;
          font-weight: 500;
          span {
            margin-left: 45px;
            font-size: 14px;
            &:nth-child(2) {
              margin-left: 15px;
            }
          }
        }
        ul.shape {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
          width: 70%;
          margin-top: 15px;
          li.item {
            margin: 5px 0;
            span {
              font-size: 16px;
            }
          }
        }
        p.text {
          margin-top: 20px;
          font-size: 16px;
          line-height: 1.4;
          span {
            display: block;
            font-weight: 700;
          }
        }
        span.prices-title {
          display: block;
          width: 100%;
          margin-top: 30px;
          margin-bottom: 10px;
          font-size: 16px;
          line-height: 1.4;
          font-weight: 700;
          text-align: left;
        }
        .preveiwCar-right__bottom {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          width: 100%;
          ul.prices {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: flex-start;
            width: 70%;
            text-align: center;
            li.item {
              width: 20%;
              span.item-top {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                width: 100%;
                min-height: 60px;
                padding: 5px 0;
                background-color: #f5f5f5;
              }
              span.item-bottom {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                width: 100%;
                min-height: 48px;
                padding: 5px 0;
                color: #fff;
                background-color: #002b5a;
              }
            }
          }
          button.prices-btn {
            width: 28%;
            font-size: 12px;
            font-weight: 700;
            color: #fff;
            background-color: #002b5a;
            border: 1px solid #002b5a;
            transition: all 0.5s;
            &:hover {
              color: #002b5a;
              background-color: #fff;
            }
          }
        }
      }
    }
  }
  form.form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 45px;
    .form-group {
      width: 32%;
      margin-bottom: 10px;
      input {
        width: 100%;
        height: 60px;
        padding-left: 19px;
        font-size: 20px;
        color: #002b5a;
        background-color: rgba(255, 255, 255, 0.7);
        border: 1px solid #ffffff;
        box-sizing: border-box;
        &.preveiwCarNameCar {
          display: none;
        }
      }
      p {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;
        height: 60px;
        padding-left: 19px;
        font-size: 20px;
        color: #002b5a;
        background-color: rgba(255, 255, 255, 0.7);
        border: 1px solid #ffffff;
        box-sizing: border-box;
      }
      button {
        width: 100%;
        height: 60px;
        color: #fff;
        background-color: #dc291a;
      }
    }
  }
}

@media (max-width: 1199px) {
  .preveiwCar {
    .preveiwCar-wrapper {
      margin-bottom: 45px;
      padding: 20px;
      .breadcrumbs {
        margin-bottom: 10px;
        a {
          font-size: 17px;
          span {
            margin-right: 8px;
          }
        }
      }
      .preveiwCar-content {
        .preveiwCar-left {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;
          .images {
            width: 78%;
            img {
              width: 100%;
              height: 466px;
            }
          }
          .images-preveiw {
            width: 20%;
            margin-top: 0px;
            .preveiw-img {
              width: 100%;
              margin-bottom: 15px;
              img {
                width: 100%;
                height: 105px;
              }
            }
          }
        }
        .preveiwCar-right {
          width: 100%;
          h1.title {
            font-size: 36px;
            font-weight: 500;
            span {
              margin-left: 45px;
              font-size: 14px;
              &:nth-child(2) {
                margin-left: 15px;
              }
            }
          }
          ul.shape {
            width: 70%;
            margin-top: 15px;
            li.item {
              margin: 5px 0;
              span {
                font-size: 16px;
              }
            }
          }
          p.text {
            margin-top: 20px;
            font-size: 16px;
            line-height: 1.4;
            span {
              display: block;
              font-weight: 700;
            }
          }
          span.prices-title {
            display: block;
            width: 100%;
            margin-top: 30px;
            margin-bottom: 10px;
            font-size: 16px;
            line-height: 1.4;
            font-weight: 700;
            text-align: left;
          }
          .preveiwCar-right__bottom {
            ul.prices {
              width: 70%;
              li.item {
                width: 20%;
                span.item-top {
                  width: 100%;
                  min-height: 60px;
                  padding: 5px 0;
                  background-color: #f5f5f5;
                }
                span.item-bottom {
                  width: 100%;
                  min-height: 48px;
                  padding: 5px 0;
                  color: #fff;
                  background-color: #002b5a;
                }
              }
            }
            button.prices-btn {
              width: 28%;
              font-size: 12px;
              font-weight: 700;
              color: #fff;
              background-color: #002b5a;
              border: 1px solid #002b5a;
              transition: all 0.5s;
              &:hover {
                color: #002b5a;
                background-color: #fff;
              }
            }
          }
        }
      }
    }
    form.form {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-bottom: 45px;
      .form-group {
        width: 23%;
        input {
          width: 100%;
          height: 60px;
          padding-left: 14px;
          font-size: 18px;
          color: #002b5a;
          background-color: rgba(255, 255, 255, 0.7);
          border: 1px solid #ffffff;
          box-sizing: border-box;
        }
        button {
          width: 100%;
          height: 60px;
          color: #fff;
        }
      }
    }
  }
}
@media (max-width: 991px) {
  .preveiwCar {
    .preveiwCar-wrapper {
      .preveiwCar-content {
        .preveiwCar-left {
          width: 100%;
          margin-bottom: 15px;
          .images {
            width: 78%;
            img {
              width: 100%;
              height: 365px;
            }
          }
          .images-preveiw {
            width: 20%;
            margin-top: 0px;
            .preveiw-img {
              width: 85%;
              img {
                width: 100%;
                height: 80px;
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .preveiwCar {
    .preveiwCar-wrapper {
      margin-bottom: 15px;
      padding: 8px;
      .breadcrumbs {
        margin-bottom: 10px;
        padding-top: 5px;
        a {
          font-size: 14px;
          span {
            margin-right: 8px;
          }
        }
      }
      .preveiwCar-content {
        .preveiwCar-left {
          width: 100%;
          margin-bottom: 15px;
          .images {
            width: 78%;
            img {
              width: 100%;
              height: 285px;
            }
          }
          .images-preveiw {
            width: 20%;
            margin-top: 0px;
            .preveiw-img {
              width: 85%;
              img {
                width: 100%;
                height: 60px;
              }
            }
          }
        }
        .preveiwCar-right {
          width: 100%;
          h1.title {
            font-size: 36px;
            font-weight: 500;
            span {
              margin-left: 45px;
              font-size: 14px;
              &:nth-child(2) {
                margin-left: 15px;
              }
            }
          }
          ul.shape {
            width: 70%;
            margin-top: 15px;
            li.item {
              margin: 5px 0;
              span {
                font-size: 16px;
              }
            }
          }
          p.text {
            margin-top: 20px;
            font-size: 16px;
            line-height: 1.4;
            span {
              display: block;
              font-weight: 700;
            }
          }
          span.prices-title {
            display: block;
            width: 100%;
            margin-top: 30px;
            margin-bottom: 10px;
            font-size: 16px;
            line-height: 1.4;
            font-weight: 700;
            text-align: left;
          }
          .preveiwCar-right__bottom {
            ul.prices {
              width: 70%;
              li.item {
                width: 20%;
                span.item-top {
                  width: 100%;
                  min-height: 60px;
                  padding: 5px 0;
                  background-color: #f5f5f5;
                }
                span.item-bottom {
                  width: 100%;
                  min-height: 48px;
                  padding: 5px 0;
                  color: #fff;
                  background-color: #002b5a;
                }
              }
            }
            button.prices-btn {
              width: 28%;
              font-size: 12px;
              font-weight: 700;
              color: #fff;
              background-color: #002b5a;
              border: 1px solid #002b5a;
              transition: all 0.5s;
              &:hover {
                color: #002b5a;
                background-color: #fff;
              }
            }
          }
        }
      }
    }
    form.form {
      width: 100%;
      margin-bottom: 35px;
      .form-group {
        width: 48%;
        margin-bottom: 5px;
        input {
          width: 100%;
          height: 60px;
          padding-left: 19px;
          font-size: 20px;
        }
        button {
          width: 100%;
          height: 60px;
        }
      }
    }
  }
}
@media (max-width: 576px) {
  .preveiwCar {
    .preveiwCar-wrapper {
      margin-bottom: 15px;
      padding: 8px;
      .breadcrumbs {
        margin-bottom: 10px;
        padding-top: 5px;
        a {
          font-size: 14px;
          span {
            margin-right: 8px;
          }
        }
      }
      .preveiwCar-content {
        .preveiwCar-left {
          width: 100%;
          margin-bottom: 15px;
          .images {
            width: 100%;
            img {
              width: 100%;
              object-fit: cover;
            }
          }
          .images-preveiw {
            width: 100%;
            margin-top: 25px;
            .preveiw-img {
              width: 23%;
              img {
                width: 100%;
              }
            }
          }
        }
        .preveiwCar-right {
          width: 100%;
          h1.title {
            font-size: 26px;
            span {
              margin-left: 35px;
              font-size: 14px;
              &:nth-child(2) {
                margin-left: 5px;
              }
            }
          }
          ul.shape {
            width: 100%;
            margin-top: 15px;
            li.item {
              margin: 5px 0;
              span {
                font-size: 16px;
              }
            }
          }
          p.text {
            margin-top: 14px;
            font-size: 14px;
            line-height: 1.4;
          }
          span.prices-title {
            margin-top: 30px;
            margin-bottom: 10px;
            font-size: 14px;
            line-height: 1.4;
          }
          .preveiwCar-right__bottom {
            ul.prices {
              width: 100%;
              li.item {
                width: 20%;
                span.item-top {
                  min-height: 60px;
                  padding: 5px 0;
                }
                span.item-bottom {
                  width: 100%;
                  min-height: 48px;
                  padding: 5px 0;
                }
              }
            }
            button.prices-btn {
              width: 100%;
              margin-top: 6px;
              font-size: 16px;
            }
          }
        }
      }
    }
    form.form {
      width: 100%;
      margin-bottom: 35px;
      .form-group {
        width: 48%;
        margin-bottom: 5px;
        input {
          width: 100%;
          height: 50px;
          padding-left: 14px;
          font-size: 16px;
        }
        button {
          width: 100%;
          height: 50px;
          font-size: 14px;
        }
      }
    }
  }
}
@media (max-width: 400px) {
  .preveiwCar {
    .preveiwCar-wrapper {
      margin-bottom: 15px;
      padding: 8px;
      .breadcrumbs {
        margin-bottom: 10px;
        padding-top: 5px;
        a {
          font-size: 14px;
          span {
            margin-right: 8px;
          }
        }
      }
      .preveiwCar-content {
        .preveiwCar-left {
          width: 100%;
          margin-bottom: 15px;
          .images {
            width: 100%;
            img {
              width: 100%;
              height: 220px;
            }
          }
          .images-preveiw {
            width: 100%;
            margin-top: 5px;
            .preveiw-img {
              width: 23%;
              img {
                width: 100%;
              }
            }
          }
        }
        .preveiwCar-right {
          width: 100%;
          h1.title {
            font-size: 22px;
            span {
              margin-left: 35px;
              font-size: 14px;
              &:nth-child(2) {
                margin-left: 5px;
              }
            }
          }
          ul.shape {
            width: 100%;
            margin-top: 15px;
            li.item {
              margin: 5px 0;
              span {
                font-size: 16px;
              }
            }
          }
          p.text {
            margin-top: 14px;
            font-size: 14px;
            line-height: 1.4;
          }
          span.prices-title {
            margin-top: 30px;
            margin-bottom: 10px;
            font-size: 14px;
            line-height: 1.4;
          }
          .preveiwCar-right__bottom {
            ul.prices {
              width: 100%;
              li.item {
                width: 20%;
                span.item-top {
                  min-height: 60px;
                  padding: 5px 0;
                  font-size: 12px;
                }
                span.item-bottom {
                  width: 100%;
                  min-height: 48px;
                  padding: 5px 0;
                  font-size: 12px;
                }
              }
            }
            button.prices-btn {
              width: 100%;
              margin-top: 6px;
              font-size: 12px;
            }
          }
        }
      }
    }
    form.form {
      width: 100%;
      margin-bottom: 35px;
    }
  }
}
</style>