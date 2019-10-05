<template>
  <div class="preveiwCar-wrapper">
    <div class="breadcrumbs">
      <nuxt-link to="/en/carpark/">
        <span>
          <img src="@/assets/img/icons/prev.svg" alt="prev" />
        </span> Back to model selection
      </nuxt-link>
    </div>

    <div class="preveiwCar-content">
      <div class="preveiwCar-left">
        <div class="images">
          <img v-if="post.mainImages" :src="post.mainImages" alt="car" />
          <img v-else src="@/assets/img/car/default.png" alt="car" />
        </div>
        <div class="images-preveiw">
          <div class="preveiw-img">
            <img v-if="post.imagesOne" :src="post.imagesOne" alt="car" />
            <img v-else src="@/assets/img/car/default.png" alt="car" />
          </div>
          <div class="preveiw-img">
            <img v-if="post.imagesTwo" :src="post.imagesTwo" alt="car" />
            <img v-else src="@/assets/img/car/default.png" alt="car" />
          </div>
          <div class="preveiw-img">
            <img v-if="post.imagesTree" :src="post.imagesTree" alt="car" />
            <img v-else src="@/assets/img/car/default.png" alt="car" />
          </div>
          <div class="preveiw-img">
            <img v-if="post.imagesFour" :src="post.imagesFour" alt="car" />
            <img v-else src="@/assets/img/car/default.png" alt="car" />
          </div>
        </div>
      </div>
      <div class="preveiwCar-right">
        <h1 class="title">
          {{post.nameCarEn}}
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
              KPP {{post.kppCar}}
            </span>
          </li>
          <li class="item">
            <span>
              <img src="@/assets/img/icons/shape.svg" alt="shape" />
              Year of issue: {{post.ageCar}}
            </span>
          </li>
          <li class="item">
            <span>
              <img src="@/assets/img/icons/shape.svg" alt="shape" />
              Drive unit: {{post.gearCar}}
            </span>
          </li>
        </ul>
        <p class="text">
          <span>Short description:</span>
          {{post.descrCarEn}}
        </p>
        <span class="prices-title">Rent price:</span>
        <div class="preveiwCar-right__bottom">
          <ul class="prices">
            <li class="item">
              <span class="item-top">
                1-2
                <br />day
              </span>
              <span class="item-bottom">{{post.priceOne}} ₽</span>
            </li>
            <li class="item">
              <span class="item-top">
                3-6
                <br />day
              </span>
              <span class="item-bottom">{{post.priceTwo}} ₽</span>
            </li>
            <li class="item">
              <span class="item-top">
                7-14
                <br />day's
              </span>
              <span class="item-bottom">{{post.priceTree}} ₽</span>
            </li>
            <li class="item">
              <span class="item-top">
                15-30
                <br />day's
              </span>
              <span class="item-bottom">{{post.priceFour}} ₽</span>
            </li>
            <li class="item">
              <span class="item-top">
                31+
                <br />day's
              </span>
              <span class="item-bottom">{{post.priceFive}} ₽</span>
            </li>
          </ul>
          <!-- <button class="prices-btn">RESERVE CAR</button> -->
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
    }
  },
  data() {
    return {};
  }
};
</script>