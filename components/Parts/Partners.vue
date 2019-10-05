<template>
  <section class="partners">
    <div class="container">
      <no-ssr>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(partner, key) in partners" :key="key">
            <div class="partners-images">
              <img :src="partner.img" alt="partners" />
            </div>
          </swiper-slide>
          <!-- <div class="swiper-partners-prev" slot="button-prev">
            <img src="@/assets/img/icons/arrow-r.svg" alt="left" />
          </div>
          <div class="swiper-partners-next" slot="button-next">
            <img src="@/assets/img/icons/arrow-r.svg" alt="right" />
          </div>-->
        </swiper>
      </no-ssr>
      <div class="partners-line">
        <h4 class="title">НАМ ДОВЕРЯЮТ</h4>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      partners: [
        {
          img: require("@/assets/img/partners/partners1.png")
        },
        {
          img: require("@/assets/img/partners/partners2.png")
        },
        {
          img: require("@/assets/img/partners/partners3.png")
        },
        {
          img: require("@/assets/img/partners/partners4.png")
        },
        {
          img: require("@/assets/img/partners/partners1.png")
        },
        {
          img: require("@/assets/img/partners/partners2.png")
        },
        {
          img: require("@/assets/img/partners/partners3.png")
        },
        {
          img: require("@/assets/img/partners/partners4.png")
        }
      ],
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-partners-next",
          prevEl: ".swiper-partners-prev"
        },
        breakpoints: {
          1199: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          400: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    };
  }
};
</script>

<style lang="scss">
$white: #fff;
$black: #333;

.partners {
  position: relative;
  padding: 30px 0;
  background-color: $white;
  .container {
    position: relative;
  }
  .swiper-container {
    min-height: auto;
    .swiper-wrapper {
      .swiper-slide {
        padding: 0;
        transform: scale(1);
        .partners-images {
          width: 100%;
          img {
            display: block;
            max-width: 100%;
            margin: 0 auto;
          }
        }
        &.swiper-slide-next {
          top: 0;
          padding: 0;
          transform: scale(1);
          &:before {
            content: "";
            display: none;
          }
        }
      }
    }
  }
  .swiper-partners-prev {
    position: absolute;
    top: 36%;
    left: 0;
    width: 30px;
    height: 30px;
    transform: translateY(-50%) rotate(180deg);
    z-index: 22;
    cursor: pointer;
    &.swiper-button-disabled {
      opacity: 0.4;
      cursor: no-drop;
    }
  }
  .swiper-partners-next {
    position: absolute;
    top: 36%;
    right: 0;
    width: 30px;
    height: 30px;
    transform: translateY(-50%);
    z-index: 22;
    cursor: pointer;
    &.swiper-button-disabled {
      opacity: 0.4;
      cursor: no-drop;
    }
  }
  .partners-line {
    width: 100%;
    padding-top: 30px;
    h4.title {
      position: relative;
      font-size: 14px;
      font-weight: 700;
      text-align: center;
      &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 40%;
        height: 1px;
        background-color: #e0e0e0;
        transform: translateY(-50%);
      }
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        width: 40%;
        height: 1px;
        background-color: #e0e0e0;
        transform: translateY(-50%);
      }
    }
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
  .partners {
    padding: 30px 0;
    .partners-line {
      padding-top: 30px;
      h4.title {
        font-size: 14px;
        &:before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          width: 30%;
          height: 1px;
          background-color: #e0e0e0;
          transform: translateY(-50%);
        }
        &:after {
          content: "";
          position: absolute;
          top: 50%;
          right: 0;
          width: 30%;
          height: 1px;
          background-color: #e0e0e0;
          transform: translateY(-50%);
        }
      }
    }
  }
}

@media (max-width: 400px) {
}
</style>
