<template>
  <div>
    <no-ssr>
      <ul class="orderPost">
        <li
          class="orderPost-list"
          v-for="orderPost in orderPosts"
          :key="orderPost.id"
          :class="{ primary: orderPost.primary == 'Занята' }"
        >
          <!-- <pre>{{orderPost}}</pre> -->
          <div class="orderPost-top">
            <p>Время заказа: {{orderPost.userDate}}</p>
            <button
              v-if="orderPost.primary != 'Занята'"
              @click="deletePost(orderPost.id)"
            >Вернусь машину в продажу</button>
            <p v-if="orderPost.primary == 'Занята'">Машина находится в прокате</p>
          </div>
          <nuxt-link class="orderPost" :to="`/admin/orderedgoods/${orderPost.id}`">
            <div class="images">
              <img :src="orderPost.mainImages" :alt="orderPost.nameCar" :title="orderPost.nameCar" />
            </div>
            <div class="content">
              <h3 class="title">{{ orderPost.nameCar }}</h3>
              <p class="subTitle">VinCode машины: {{orderPost.vinCode}}</p>
            </div>
            <ul class="content-user">
              <h3 class="title">Данные о заказчике:</h3>
              <li>Имя: {{orderPost.userName}}</li>
              <li>Телефон: {{orderPost.userPhone}}</li>
              <li>Начало проката: {{orderPost.startDate}}</li>
              <li>Сдача проката: {{orderPost.expirationDate}}</li>
              <li style="width: 100%; margin-top: 15px; font-weight: 900;">Дополнительные опции:</li>
              <li>{{orderPost.babyCarSeatTitle}}</li>
              <li>{{orderPost.unlimitedMileageTitle}}</li>
              <li>{{orderPost.deliveryReturnMkadTitle}}</li>
              <li>{{orderPost.deliveryReturnAirportTitle}}</li>
              <li>{{orderPost.completeCarWashClick}}</li>
              <li>{{orderPost.dryCleaningClick}}</li>
              <li>{{orderPost.reRunAutoClick}}</li>
            </ul>
          </nuxt-link>
        </li>
      </ul>
    </no-ssr>
  </div>
</template>

<script>
import axios from "axios";

export default {
  layout: "admin",
  data() {
    return {
      orderPosts: []
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
          console.log(this.orderPosts);
        })
        .catch(e => console.log(e));
    },
    deletePost(id) {
      axios
        .delete(`https://carrent-3303f.firebaseio.com/busketpost/${id}.json`)
        .then(res => {
          this.busketPost();
          this.$router.push("/admin/orderedgoods/");
        });
    }
  }
};
</script>

<style lang="scss">
ul.orderPost {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  li.orderPost-list {
    position: relative;
    width: 100%;
    margin-top: 30px;
    margin-left: 5px;
    margin-bottom: 6px;
    padding: 5px;
    border: 1px solid #001529;
    &.primary {
      background-color: cornflowerblue;
    }
    .orderPost-top {
      position: absolute;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      top: -23px;
      left: 0;
      width: 100%;
      p {
        width: 22%;
      }
    }
    a.orderPost {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
      .images {
        display: block;
        width: 10%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .content {
        width: 30%;
        margin-left: 15px;
        h3.title {
          margin-bottom: 5px;
          font-size: 20px;
          color: #000;
        }
        p.subTitle {
          font-size: 14px;
          color: #000;
        }
      }
      ul.content-user {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        width: 50%;
        h3.title {
          width: 100%;
          font-size: 22px;
          color: #000;
        }
        li {
          width: 40%;
          margin-left: 0;
          padding-left: 0;
          padding-top: 0;
          padding-bottom: 3px;
          font-size: 16px;
          color: #000;
          border: none;
        }
      }
    }
    &:hover {
      -webkit-box-shadow: 0px 3px 14px -1px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 3px 14px -1px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 3px 14px -1px rgba(0, 0, 0, 0.75);
    }
  }
}
</style>