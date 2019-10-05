<template>
  <section class="main-section carpark">
    <div class="breadcrumbs">
      <div class="container">
        <div class="breadcrumbs-wrapper">
          <button class="breadcrumbs-btn breadcrumbs-btn-active" @click="categoryEconomy">
            <span class="breadcrumbs-economy">
              <img src="@/assets/img/carclass/economy.png" alt="economy" />
            </span> Economy
          </button>
          <button class="breadcrumbs-btn" @click="categoryStandart">
            <span class="breadcrumbs-middle">
              <img src="@/assets/img/carclass/middle.png" alt="middle" />
            </span>
            Standard
          </button>
          <button class="breadcrumbs-btn" @click="categoryBusiness">
            <span class="breadcrumbs-business">
              <img src="@/assets/img/carclass/business.png" alt="business" />
            </span>
            Business
          </button>
          <button class="breadcrumbs-btn" @click="categoryPremium">
            <span class="breadcrumbs-vip">
              <img src="@/assets/img/carclass/vip.png" alt="vip" />
            </span>
            Premium
          </button>
          <button class="breadcrumbs-btn" @click="categorySuvs">
            <!-- suvs -->
            <span class="breadcrumbs-suv">
              <img src="@/assets/img/carclass/suv.png" alt="suv" />
            </span>
            Suvs
          </button>
          <button class="breadcrumbs-btn" @click="categoryCommercial">
            <!-- minibuses -->
            <span class="breadcrumbs-commercial">
              <img src="@/assets/img/carclass/commercial.png" alt="commercial" />
            </span>
            Minibuses
          </button>
          <button class="breadcrumbs-btn" v-if="allCars" @click="filterCarListShow">All cars</button>
        </div>
        <div class="swiper-main-prev" slot="button-prev">
          <img src="@/assets/img/icons/left-arrow.svg" alt="left" />
        </div>
        <div class="swiper-main-next" slot="button-next">
          <img src="@/assets/img/icons/right-arrow.svg" alt="right" />
        </div>
      </div>
    </div>
    <div
      class="block-array"
      v-if="!categoryEconomyShow && !categoryStandartShow && !categoryBusinessShow && !categoryPremiumShow && !categorySuvsShow && !categoryCommercialShow"
    >
      <span class="preloader" v-if="filterCarList == ''">
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
          <swiper-slide v-for="car in filterCarList" :key="car.id">
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
    </div>
    <div class="block-array">
      <no-ssr v-if="categoryEconomyShow">
        <swiper :options="swiperOption">
          <swiper-slide v-for="car in categoryEconomyShowArray" :key="car.id">
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
              <h3 class="title">{{car.nameCarEn}}</h3>
              <p class="typeCar">{{ car.typeCarEn }}</p>
              <span class="subTitleCar">Механика, климат-контроль, круиз контроль</span>
            </div>
            <ul class="link">
              <li class="item">
                <nuxt-link :to="`/carpark/${car.id}`">Выбрать авто</nuxt-link>
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
    </div>
    <div class="block-array">
      <no-ssr v-if="categoryStandartShow">
        <swiper :options="swiperOption">
          <swiper-slide v-for="car in categoryStandartShowArray" :key="car.id">
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
              <h3 class="title">{{car.nameCarEn}}</h3>
              <p class="typeCar">{{ car.typeCarEn }}</p>
              <span class="subTitleCar">Механика, климат-контроль, круиз контроль</span>
            </div>
            <ul class="link">
              <li class="item">
                <nuxt-link :to="`/carpark/${car.id}`">Выбрать авто</nuxt-link>
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
    </div>
    <div class="block-array">
      <no-ssr v-if="categoryBusinessShow">
        <swiper :options="swiperOption">
          <swiper-slide v-for="car in categoryBusinessShowArray" :key="car.id">
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
              <h3 class="title">{{car.nameCarEn}}</h3>
              <p class="typeCar">{{ car.typeCarEn }}</p>
              <span class="subTitleCar">Механика, климат-контроль, круиз контроль</span>
            </div>
            <ul class="link">
              <li class="item">
                <nuxt-link :to="`/carpark/${car.id}`">Выбрать авто</nuxt-link>
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
    </div>
    <div class="block-array">
      <no-ssr v-if="categoryPremiumShow">
        <swiper :options="swiperOption">
          <swiper-slide v-for="car in categoryPremiumShowArray" :key="car.id">
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
              <h3 class="title">{{car.nameCarEn}}</h3>
              <p class="typeCar">{{ car.typeCarEn }}</p>
              <span class="subTitleCar">Механика, климат-контроль, круиз контроль</span>
            </div>
            <ul class="link">
              <li class="item">
                <nuxt-link :to="`/carpark/${car.id}`">Выбрать авто</nuxt-link>
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
    </div>
    <div class="block-array">
      <no-ssr v-if="categorySuvsShow">
        <swiper :options="swiperOption">
          <swiper-slide v-for="car in categorySuvsShowArray" :key="car.id">
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
              <h3 class="title">{{car.nameCarEn}}</h3>
              <p class="typeCar">{{ car.typeCarEn }}</p>
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
          </swiper-slide>
          <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        </swiper>
      </no-ssr>
    </div>
    <div class="block-array">
      <no-ssr v-if="categoryCommercialShow">
        <swiper :options="swiperOption">
          <swiper-slide v-for="car in categoryCommercialShowArray" :key="car.id">
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
              <h3 class="title">{{ car.nameCarEn }}</h3>
              <p class="typeCar">{{ car.typeCarEn }}</p>
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
          </swiper-slide>
          <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        </swiper>
      </no-ssr>
    </div>
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
      allCars: false,
      carList: [],
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 30,
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
            spaceBetween: 40
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
      },
      carList: [
        {
          id: 1,
          nameCar: "Chevrolet Tahoe",
          imagesCar: require("@/assets/img/car/car1.jpg"),
          priceCar: "1 995",
          typeCar: "Внедорожник",
          subTitleCar: "Механика, климат-контроль, круиз контроль",
          linkCar: "/",
          doorCar: "5",
          usersCar: "7",
          category: "Эконом"
        },
        {
          id: 2,
          nameCar: "Hyundai Accent",
          imagesCar: require("@/assets/img/car/car2.jpg"),
          priceCar: "1 995",
          typeCar: "Седан",
          subTitleCar: "Механика, климат-контроль, круиз контроль",
          linkCar: "/",
          doorCar: "4",
          usersCar: "5",
          category: "Стандарт"
        },
        {
          id: 3,
          nameCar: "Kia Sportage",
          imagesCar: require("@/assets/img/car/car3.jpg"),
          priceCar: "1 995",
          typeCar: "Кроссовер",
          subTitleCar: "Механика, климат-контроль, круиз контроль",
          linkCar: "/",
          doorCar: "4",
          usersCar: "5",
          category: "Бизнес"
        },
        {
          id: 4,
          nameCar: "Chevrolet Tahoe",
          imagesCar: require("@/assets/img/car/car1.jpg"),
          priceCar: "1 995",
          typeCar: "Внедорожник",
          subTitleCar: "Механика, климат-контроль, круиз контроль",
          linkCar: "/",
          doorCar: "4",
          usersCar: "5",
          category: "Джип"
        },
        {
          id: 5,
          nameCar: "Hyundai Accent",
          imagesCar: require("@/assets/img/car/car2.jpg"),
          priceCar: "1 995",
          typeCar: "Седан",
          subTitleCar: "Механика, климат-контроль, круиз контроль",
          linkCar: "/",
          doorCar: "4",
          usersCar: "5",
          category: "Премиум"
        },
        {
          id: 6,
          nameCar: "Hyundai Accent",
          imagesCar: require("@/assets/img/car/car2.jpg"),
          priceCar: "1 995",
          typeCar: "Седан",
          subTitleCar: "Механика, климат-контроль, круиз контроль",
          linkCar: "/",
          doorCar: "4",
          usersCar: "5",
          category: "Джип"
        }
      ],
      filterCarList: this.posts,
      categoryEconomyShow: false,
      categoryEconomyShowArray: [],
      categoryStandartShow: false,
      categoryStandartShowArray: [],
      categoryBusinessShow: false,
      categoryBusinessShowArray: [],
      categoryPremiumShow: false,
      categoryPremiumShowArray: [],
      categorySuvsShow: false,
      categorySuvsShowArray: [],
      categoryCommercialShow: false,
      categoryCommercialShowArray: []
    };
  },
  mounted() {
    // this.showAllCars();
  },
  methods: {
    nextCar(id) {
      this.$router.push(`/carpark/${id}`);
    },
    filterCarListShow() {
      this.filterCarList = this.posts;
      this.allCars = false;

      this.categoryEconomyShow = false;
      this.categoryStandartShow = false;
      this.categoryBusinessShow = false;
      this.categoryPremiumShow = false;
      this.categorySuvsShow = false;
      this.categoryCommercialShow = false;
    },
    // Эконом
    categoryEconomy() {
      this.allCars = true;

      this.categoryEconomyShowArray = this.filterCarList.filter(function(item) {
        return item.typeCarEn == "Economy";
      });

      this.categoryEconomyShow = true;

      this.categoryStandartShow = false;
      this.categoryBusinessShow = false;
      this.categoryPremiumShow = false;
      this.categorySuvsShow = false;
      this.categoryCommercialShow = false;

      return this.categoryEconomyShowArray;
    },
    // Стандарт
    categoryStandart() {
      this.allCars = true;

      this.categoryStandartShowArray = this.filterCarList.filter(function(
        item
      ) {
        return item.typeCarEn == "Standard";
      });

      this.categoryStandartShow = true;

      this.categoryEconomyShow = false;
      this.categoryBusinessShow = false;
      this.categoryPremiumShow = false;
      this.categorySuvsShow = false;
      this.categoryCommercialShow = false;

      return this.categoryStandartShowArray;
    },
    // Бизнес
    categoryBusiness() {
      this.allCars = true;

      this.categoryBusinessShowArray = this.filterCarList.filter(function(
        item
      ) {
        return item.typeCarEn == "Business";
      });

      this.categoryBusinessShow = true;

      this.categoryStandartShow = false;
      this.categoryEconomyShow = false;
      this.categoryPremiumShow = false;
      this.categorySuvsShow = false;
      this.categoryCommercialShow = false;

      return this.categoryBusinessShowArray;
    },
    // Джип
    categoryJeep() {
      this.allCars = true;

      this.filterCarList = this.carList.filter(function(item) {
        return item.category == "Джип";
      });

      return this.filterCarList;
    },
    // Премиум
    categoryPremium() {
      this.allCars = true;

      this.categoryPremiumShowArray = this.filterCarList.filter(function(item) {
        return item.typeCarEn == "Premium";
      });

      this.categoryPremiumShow = true;

      this.categoryBusinessShow = false;
      this.categoryStandartShow = false;
      this.categoryEconomyShow = false;
      this.categorySuvsShow = false;
      this.categoryCommercialShow = false;

      return this.categoryPremiumShowArray;
    },
    // Внедорожники
    categorySuvs() {
      this.allCars = true;

      this.categorySuvsShowArray = this.filterCarList.filter(function(item) {
        return item.typeCar == "Suv";
      });

      this.categorySuvsShow = true;

      this.categoryEconomyShow = false;
      this.categoryStandartShow = false;
      this.categoryBusinessShow = false;
      this.categoryPremiumShow = false;
      this.categoryCommercialShow = false;

      return this.categorySuvsShowArray;
    },
    // Микроавтобусы
    categoryCommercial() {
      this.allCars = true;

      this.categoryCommercialShowArray = this.filterCarList.filter(function(
        item
      ) {
        return item.typeCar == "Minibus";
      });

      this.categoryCommercialShow = true;

      this.categoryEconomyShow = false;
      this.categoryStandartShow = false;
      this.categoryBusinessShow = false;
      this.categoryPremiumShow = false;
      this.categorySuvsShow = false;

      return this.categoryCommercialShowArray;
    }
  }
};
</script>

<style lang="scss">
$white: #fff;
$black: #333;

.breadcrumbs {
  position: relative;
  margin-top: 10px;
  button.breadcrumbs-btn {
    position: relative;
    padding: 8px 18px;
    font-size: 20px;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 100px;
    &.breadcrumbs-btn-active {
      // background-color: #023975;
      // border: 1px solid #023975;
    }
    span.breadcrumbs-economy,
    span.breadcrumbs-middle,
    span.breadcrumbs-business,
    span.breadcrumbs-vip,
    span.breadcrumbs-suv,
    span.breadcrumbs-commercial {
      position: absolute;
      top: -25px;
      left: 50%;
      width: 80px;
      transform: translateX(-50%);
      img {
        width: 100%;
      }
    }
    span.breadcrumbs-middle {
      top: -23px;
    }
    span.breadcrumbs-business,
    span.breadcrumbs-vip {
      top: -22px;
    }
    span.breadcrumbs-commercial {
      top: -25px;
    }
    &:hover {
      background-color: transparent;
      border: 1px solid rgba(255, 255, 255, 0.5);
    }
  }
}
.carpark {
  .breadcrumbs {
    margin-bottom: 30px;
  }
}

@media (max-width: 1366px) {
}

@media (max-width: 1199px) {
}

@media (max-width: 991px) {
}

@media (max-width: 768px) {
}

@media (max-width: 576px) {
}

@media (max-width: 400px) {
}
</style>
