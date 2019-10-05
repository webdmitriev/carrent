<template>
  <section class="main-section">
    <no-ssr>
      <paginate
        name="filterСarList"
        :per="10"
        :list="filterСarList"
        v-if="filterСarList !== ''"
        class="cars-content"
      >
        <li class="item" v-for="(car, key) in paginated('filterСarList')" :key="key">
          <div class="images">
            <img v-if="car.mainImages" :src="car.mainImages" alt="car" />
            <img v-else src="@/assets/img/car/default.png" alt="car" />
          </div>
          <div class="content">
            <p class="price">
              <span>
                <img src="@/assets/img/icons/line.svg" alt="line" />
              </span>
              {{car.priceOne}} ₽ в сутки
            </p>
            <h3 class="title">{{car.nameCar}}</h3>
            <p class="typeCar">{{ car.typeCar }}</p>
            <span class="subTitleCar">Механика, климат-контроль, круиз контроль</span>
          </div>
          <ul class="link">
            <li class="item">
              <!-- <nuxt-link :to="`/carpark/${car.id}`">Выбрать авто</nuxt-link> -->
              <button @click="nextCar(car.id)">Выбрать авто</button>
            </li>
            <li class="item item-icon">
              <p>
                <span>
                  <img src="@/assets/img/icons/door.svg" alt="door" />
                </span>
                {{ car.doorCar }}
              </p>
              <p>
                <span>
                  <img src="@/assets/img/icons/users.svg" alt="users" />
                </span>
                {{ car.usersCar }}
              </p>
            </li>
          </ul>
        </li>
      </paginate>
      <paginate-links
        v-if="carList.length >= 10"
        for="filterСarList"
        :async="true"
        :show-step-links="true"
      ></paginate-links>
    </no-ssr>
  </section>
</template>

<script>
import Vue from "vue";
import VuePaginate from "vue-paginate";
Vue.use(VuePaginate);

import axios from "axios";

let allCars = "https://carrent-3303f.firebaseio.com/posts.json";

export default {
  data() {
    return {
      writeSuccessful: false,
      readSuccessful: false,
      text: "",
      full: null,
      arrays: [],
      carList: [],
      filterСarList: [],
      paginate: ["filterСarList", "carList"]
    };
  },
  mounted() {
    this.showAllCars();
  },
  methods: {
    async showAllCars() {
      return await axios
        .get(allCars)
        .then(res => {
          const addShowAllCars = [];
          for (let key in res.data) {
            addShowAllCars.push({ ...res.data[key], id: key });
          }
          addShowAllCars.reverse();

          this.carList = addShowAllCars;

          this.filterСarList = this.carList;
        })
        .catch(e => console.log(e));
    },
    nextCar(id) {
      this.$router.push(`/carpark/${id}`);
    }
  }
};
</script>

<style lang="scss">
$white: #fff;
$black: #333;

.main-section {
  min-height: 980px;
  padding-top: 60px;
  padding-bottom: 40px;
  background: url("../../assets/img/main-bg.jpg");
  background-attachment: fixed;
}

@media (max-width: 1366px) {
  .main-section {
    .swiper-container {
      .swiper-wrapper {
        .swiper-slide {
          padding: 10px 6px 20px 6px;
          .images {
            img {
              height: 180px;
            }
          }
          .content {
            h3.title {
              font-size: 26px;
            }
            p.typeCar {
              font-size: 16px;
            }
          }
          ul.link {
            margin-top: 20px;
            li.item {
              button {
                padding: 13px 26px;
                font-size: 13px;
              }
              &.item-icon {
                width: 80px;
              }
            }
          }
          &.swiper-slide-next {
            top: -15px;
            padding: 10px 6px 20px 6px;
            &:before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 2px;
              background-color: red;
              z-index: 9;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1199px) {
}

@media (max-width: 991px) {
  .main-section {
    .swiper-container {
      .swiper-wrapper {
        .swiper-slide {
          padding: 10px 6px 10px 6px;
          .images {
            img {
              height: 160px;
            }
          }
          .content {
            h3.title {
              font-size: 22px;
            }
            p.typeCar {
              font-size: 13px;
            }
            span.subTitleCar {
              font-size: 10px;
              line-height: 1;
            }
          }
          ul.link {
            margin-top: 20px;
            li.item {
              width: 100%;
              button {
                display: block;
                width: 100%;
                margin-bottom: 5px;
                padding: 13px 26px;
                font-size: 13px;
                text-align: center;
              }
              &.item-icon {
                width: 100%;
              }
            }
          }
          &.swiper-slide-next {
            top: -15px;
            padding: 10px 6px 10px 6px;
            &:before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 2px;
              background-color: red;
              z-index: 9;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .main-section {
    .swiper-container {
      padding: 20px 0;
      .swiper-wrapper {
        .swiper-slide {
          padding: 10px 6px 10px 6px;
          .images {
            img {
              height: 200px;
            }
          }
          .content {
            p.price {
              text-align: center;
            }
            h3.title {
              font-size: 32px;
              text-align: center;
            }
            p.typeCar {
              font-size: 18px;
              text-align: center;
            }
            span.subTitleCar {
              display: block;
              font-size: 16px;
              line-height: 1;
              text-align: center;
            }
          }
          ul.link {
            margin-top: 20px;
            li.item {
              width: 100%;
              button {
                display: block;
                width: 100%;
                margin-bottom: 5px;
                padding: 13px 26px;
                font-size: 13px;
                text-align: center;
              }
              &.item-icon {
                width: 100%;
              }
            }
          }
          &.swiper-slide-next {
            top: 0;
            padding: 10px 6px 10px 6px;
            transform: scale(1);
            &:before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 2px;
              background-color: red;
              z-index: 9;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 576px) {
}

@media (max-width: 400px) {
}
</style>
