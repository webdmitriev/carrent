<template>
  <div class="preveiwCar-wrapper">
    <div class="preveiwCar-slider">
      <no-ssr>
        <swiper :options="swiperOption">
          <swiper-slide>
            <div class="images-slider" v-if="post.mainImages">
              <img v-if="post.mainImages" :src="post.mainImages" alt="car" />
              <img v-else src="@/assets/img/car/default.png" alt="car" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="images-slider" v-if="post.imagesOne">
              <img v-if="post.imagesOne" :src="post.imagesOne" alt="car" />
              <img v-else src="@/assets/img/car/default.png" alt="car" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="images-slider" v-if="post.imagesTwo">
              <img v-if="post.imagesTwo" :src="post.imagesTwo" alt="car" />
              <img v-else src="@/assets/img/car/default.png" alt="car" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="images-slider" v-if="post.imagesTree">
              <img v-if="post.imagesTree" :src="post.imagesTree" alt="car" />
              <img v-else src="@/assets/img/car/default.png" alt="car" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="images-slider" v-if="post.imagesFour">
              <img v-if="post.imagesFour" :src="post.imagesFour" alt="car" />
              <img v-else src="@/assets/img/car/default.png" alt="car" />
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </no-ssr>
      <h1 class="title">{{post.nameCar}}</h1>
    </div>

    <div class="container">
      <div class="breadcrumbs">
        <nuxt-link to="/carpark/">
          <span>
            <img src="@/assets/img/icons/prev.svg" alt="prev" />
          </span> Назад к выбору модели
        </nuxt-link>
      </div>
      <div class="preveiwCar-content">
        <div class="preveiwCar-left">
          <div class="preveiwCar-video">
            <iframe
              src="https://www.youtube.com/embed/jGHSQ4aNoXs?list=RDKcl_8-aNAyk"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="preveiwCar-right">
          <h1 class="title">
            {{post.nameCar}}
            <span>
              <img src="@/assets/img/icons/door.svg" alt="door" />
              {{post.doorCar}}
            </span>
            <span>
              <img src="@/assets/img/icons/users.svg" alt="users" />
              {{post.usersCar}}
            </span>
          </h1>
          <span>{{post.typeCar}}</span>
          <ul class="shape">
            <li class="item">
              <span>
                <img src="@/assets/img/icons/shape.svg" alt="shape" />
                КПП {{post.kppCar}}
              </span>
            </li>
            <li class="item">
              <span>
                <img src="@/assets/img/icons/shape.svg" alt="shape" />
                Год выпуска: {{post.ageCar}}
              </span>
            </li>
            <li class="item">
              <span>
                <img src="@/assets/img/icons/shape.svg" alt="shape" />
                Привод: {{post.gearCar}}
              </span>
            </li>
          </ul>
          <p class="text">
            <span>Краткое описание:</span>
            {{post.descrCar}}
          </p>
          <span class="prices-title">Стоимость аренды:</span>
          <div class="preveiwCar-right__bottom">
            <ul class="prices">
              <li class="item">
                <span class="item-top">
                  1-2
                  <br />дня
                </span>
                <span class="item-bottom">{{post.priceOne}} ₽</span>
              </li>
              <li class="item">
                <span class="item-top">
                  3-6
                  <br />дня
                </span>
                <span class="item-bottom">{{post.priceTwo}} ₽</span>
              </li>
              <li class="item">
                <span class="item-top">
                  7-14
                  <br />дней
                </span>
                <span class="item-bottom">{{post.priceTree}} ₽</span>
              </li>
              <li class="item">
                <span class="item-top">
                  15-30
                  <br />дней
                </span>
                <span class="item-bottom">{{post.priceFour}} ₽</span>
              </li>
              <li class="item">
                <span class="item-top">
                  31+
                  <br />дней
                </span>
                <span class="item-bottom">{{post.priceFive}} ₽</span>
              </li>
            </ul>
            <button class="prices-btn">ЗАБРОНИРОВАТЬ АВТО</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    postId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>

<style lang="scss">
</style>