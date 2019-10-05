<template>
  <div class="orderedgoods">
    <h2>Заказанные машины</h2>
    <span class="preloader" v-if="orderPosts == ''">
      <svg width="200" height="200" viewBox="0 0 40 60">
        <polygon
          class="triagle"
          points="16,1 32,32 1,32"
          fill="none"
          stroke-width="1"
          stroke="#333"
        />
        <text class="webplaneta" x="0" y="45" fill="#333">Загрузка...</text>
      </svg>
    </span>
    <ul class="orderedgoods-wrapper" v-else>
      <li
        class="orderedgoods-items"
        :class="{ primary: post[0].primary }"
        v-for="post in orderPosts"
        :key="post.id"
      >
        <form @submit.prevent>
          <h4 class="title">
            <span class="basked-remove" @click="deletePost(post.id)">×</span> Новый заказ:
            <span class="todoDate">{{post[0].userDate}}</span>
          </h4>
          <div class="images">
            <img :src="post[0].mainImages" alt="car" />
          </div>
          <h3 class="title">{{post[0].nameCar}}</h3>
          <span class="vincode">Vin Code - {{ post[0].vinCode }}</span>
          <ul class="user">
            <li class="user-item">Данные заказчика:</li>
            <li class="user-item">{{post[0].userName}}</li>
            <li class="user-item">{{post[0].userPhone}}</li>
            <br />
            <li class="user-item">Даты заказа:</li>
            <li class="user-item">С: {{post[0].startDate}}</li>
            <li class="user-item">По: {{post[0].expirationDate}}</li>
          </ul>
          <button class="orderedgoods-btn orderedgoods-btn-primary" @click="onSubmit">Забронирована</button>
          <button
            class="orderedgoods-btn orderedgoods-btn-delete"
            @click="deletePost(post.id)"
          >Завершить заказ</button>
        </form>
      </li>
      <!-- <li class="orderedgoods-items" v-for="value in posts" :key="value.id">{{ value[0].nameCar }}</li> -->
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  layout: "admin",
  data() {
    return {
      orderPosts: [],
      orderedGoodsPrimary: false,
      post: this.orderPosts
        ? { ...this.orderPosts }
        : {
            primary: true
          }
    };
  },
  mounted() {
    this.busketPost();
  },
  methods: {
    async busketPost() {
      return await axios
        .get("https://carrent-3303f.firebaseio.com/busketpost.json")
        .then(res => {
          const busketPostArray = [];
          for (let key in res.data) {
            busketPostArray.push({ ...res.data[key], id: key });
          }

          this.orderPosts = busketPostArray.reverse();
        })
        .catch(e => console.log(e));
    },
    async deletePost(key) {
      axios
        .delete(`https://carrent-3303f.firebaseio.com/busketpost/${key}.json`)
        .then(res => {
          this.$store.getters.getBusketPost;
          this.$router.push("/admin");
        });
    },
    onSubmit() {
      this.$emit("submit", this.post);
      this.busketPost();
      setTimeout(() => console.log(this.post), 3000);
    }
  }
};
</script>

<style lang="scss">
// @import "~/assets/scss/products.scss";

.orderedgoods {
  ul.orderedgoods-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin-top: 45px;
    li.orderedgoods-items {
      position: relative;
      width: 19%;
      margin-bottom: 55px;
      margin-right: 3px;
      padding: 5px;
      border: 1px solid #888;
      box-sizing: border-box;
      &.primary {
        background-color: green;
      }
      h4.title {
        position: absolute;
        top: -20px;
        left: 0;
        width: 100%;
        margin-bottom: 10px;
        font-size: 14px;
        color: #001529;
        span.basked-remove {
          color: red;
          cursor: pointer;
        }
      }
      .images {
        width: 100%;
        margin-bottom: 6px;
        p {
          width: 100%;
          height: 120px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
      h3.title {
        font-size: 20px;
      }
      span.vincode {
        font-size: 12px;
      }
      ul.user {
        margin-top: 12px;
      }
      button.orderedgoods-btn {
        width: 100%;
        margin-top: 5px;
        text-align: center;
      }
    }
  }
}
</style>
