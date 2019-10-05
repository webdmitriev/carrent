<template>
  <section class="main-section">
    <div class="breadcrumbs">
      <div class="container">
        <div class="swiper-main-prev" slot="button-prev">
          <img src="@/assets/img/icons/left-arrow.svg" alt="left" />
        </div>
        <div class="swiper-main-next" slot="button-next">
          <img src="@/assets/img/icons/right-arrow.svg" alt="right" />
        </div>
      </div>
    </div>
    <span class="preloader" v-if="carList == ''">
      <svg width="200" height="200" viewBox="0 0 40 60">
        <polygon
          class="triagle"
          points="16,1 32,32 1,32"
          fill="none"
          stroke-width="1"
          stroke="#fff"
        />
        <text class="webplaneta" x="0" y="45" fill="#fff">Loading...</text>
      </svg>
    </span>
    <no-ssr v-else>
      <swiper :options="swiperOption">
        <swiper-slide v-for="car in posts" :key="car.id">
          <div class="images">
            <img v-if="car.mainImages" :src="car.mainImages" alt="car" />
            <img v-else src="@/assets/img/car/default.png" alt="car" />
          </div>
          <div class="content">
            <p class="price">
              <span>
                <img src="@/assets/img/icons/line.svg" alt="line" />
              </span>
              {{car.priceOne}} ₽ per day
            </p>
            <h3 class="title">{{car.nameCarEn}}</h3>
            <p class="typeCar">{{ car.typeCarEn }}</p>
            <span class="subTitleCar">Mechanics, climate control, cruise control</span>
          </div>
          <ul class="link">
            <li class="item">
              <!-- <nuxt-link :to="`/en/carpark/${car.id}`">Choose a car</nuxt-link> -->
              <button @click="nextCar(car.id)">Choose a car</button>
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
        </swiper-slide>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      </swiper>
    </no-ssr>
  </section>
</template>

<script>
import axios from "axios";

let allCars = "https://carrent-3303f.firebaseio.com/posts.json";

export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      writeSuccessful: false,
      readSuccessful: false,
      text: "",
      full: null,
      arrays: [],
      carList: this.posts,
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
        loopFillGroupWithBlank: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true
        // },
        navigation: {
          nextEl: ".swiper-main-next",
          prevEl: ".swiper-main-prev"
        },
        breakpoints: {
          1576: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          1199: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    };
  },
  mounted() {
    this.showAllCars();
  },
  methods: {
    nextCar(id) {
      this.$router.push(`/en/carpark/${id}`);
    },
    // Открываем все машины
    async showAllCars() {
      return await axios
        .get(allCars)
        .then(res => {
          const addShowAllGirls = [];
          for (let key in res.data) {
            addShowAllGirls.push({ ...res.data[key], id: key });
          }
          addShowAllGirls.reverse();

          this.carList = addShowAllGirls;
        })
        .catch(e => console.log(e));
    }
  }
};
</script>

<style lang="scss">
$white: #fff;
$black: #333;

.main-section {
  padding-top: 60px;
  background: url("../../assets/img/main-bg.jpg") center no-repeat;
  background-size: cover;
  .swiper-container {
    min-height: 490px;
    padding: 45px 0;
    .swiper-wrapper {
      .swiper-slide {
        position: relative;
        padding: 10px 14px 25px 14px;
        background-color: #fff;
        box-sizing: border-box;
        transform: scale(0.9);
        transition: all 0.5s;
        .images {
          width: 100%;
          p {
            width: 100%;
          }
          img {
            width: 100%;
            height: 200px;
            object-fit: contain;
          }
        }
        .content {
          p.price {
            font-size: 14px;
            span {
              margin-right: 4px;
              img {
                width: 15px;
              }
            }
          }
          h3.title {
            margin: 5px 0;
            font-size: 32px;
            font-weight: 500;
          }
          p.typeCar {
            font-size: 18px;
            font-weight: 500;
          }
          span.subTitleCar {
            font-size: 12px;
          }
        }
        ul.link {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin-top: 26px;
          li.item {
            a {
              padding: 13px 36px;
              font-size: 14px;
              text-transform: uppercase;
              color: #fff;
              background-color: #023975;
              border: 1px solid #023975;
              transition: all 0.5s;
              &:hover {
                color: #023975;
                background-color: #fff;
              }
            }
            &.item-icon {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              align-items: center;
              width: 80px;
              p {
                display: block;
                width: auto;
              }
            }
          }
        }
        &.swiper-slide-next {
          top: -15px;
          padding: 17px 23px 32px 23px;
          transform: scale(1.1);
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
              a {
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
              a {
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
              a {
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
