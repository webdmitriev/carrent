<template>
  <div>
    <HeaderEn />
    <div class="reviews-partners">
      <section class="reviews">
        <div class="breadcrumbs">
          <div class="container">
            <h2 class="title">Reviews about our company</h2>
            <div class="swiper-reviews-prev" slot="button-prev">
              <img src="@/assets/img/icons/left-arrow.svg" alt="left" />
            </div>
            <div class="swiper-reviews-next" slot="button-next">
              <img src="@/assets/img/icons/right-arrow.svg" alt="right" />
            </div>
          </div>
        </div>
        <no-ssr>
          <swiper :options="swiperOption">
            <swiper-slide v-for="(reviews, key) in reviewsList" :key="key">
              <div class="swiper-slide-left">
                <div class="images images-avatar">
                  <img :src="reviews.avatar" :alt="reviews.name" />
                </div>
                <div class="images images-subicon">
                  <img src="@/assets/img/reviews/subicon.png" alt="subicon" />
                </div>
              </div>
              <div class="swiper-slide-right">
                <div class="swiper-slide-right__top">
                  <h3 class="title">{{reviews.name}}</h3>
                  <span class="age">{{reviews.age}} лет</span>
                </div>
                <p class="subTitle">{{reviews.descr}}</p>
                <ul class="social">
                  <li class="item">
                    <a :href="reviews.linkedinLink">
                      <img src="@/assets/img/reviews/linkedin.svg" alt="linkedin" />
                    </a>
                  </li>
                  <li class="item">
                    <a :href="reviews.twitterLink">
                      <img src="@/assets/img/reviews/twitter.svg" alt="twitter" />
                    </a>
                  </li>
                  <li class="item">
                    <a :href="reviews.googleLink">
                      <img src="@/assets/img/reviews/google.svg" alt="google" />
                    </a>
                  </li>
                </ul>
              </div>
            </swiper-slide>
            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
          </swiper>
        </no-ssr>
      </section>

      <partnersEn />
    </div>

    <feedbackEn />

    <FooterEn />
  </div>
</template>

<script>
import partnersEn from "@/components/Parts/PartnersEn";

import HeaderEn from "@/components/system/HeaderEn.vue";
import FooterEn from "@/components/system/FooterEn.vue";

import feedbackEn from "@/components/Parts/FeedbackEn";

export default {
  components: {
    partnersEn,
    HeaderEn,
    FooterEn,
    feedbackEn
  },
  data() {
    return {
      reviewsList: [
        {
          avatar: require("@/assets/img/reviews/person1.png"),
          name: "МАРИЯ ПЕТРОВА",
          age: "29",
          descr:
            "Мы заботимся о наших клиентах и гарантируем лучше качество. Мы всегда готовы предложить своим клиентам одни из лучших цен. Самое высокое  качество работы.",
          linkedinLink: "/",
          twitterLink: "/",
          googleLink: "/"
        },
        {
          avatar: require("@/assets/img/reviews/person2.png"),
          name: "ИВАН ДМИТРИЕВ",
          age: "29",
          descr:
            "Мы заботимся о наших клиентах и гарантируем лучше качество. Мы всегда готовы предложить своим клиентам одни из лучших цен. Самое высокое  качество работы.",
          linkedinLink: "/",
          twitterLink: "/",
          googleLink: "/"
        },
        {
          avatar: require("@/assets/img/reviews/person3.png"),
          name: "ВАСИЛИЙ",
          age: "29",
          descr:
            "Мы заботимся о наших клиентах и гарантируем лучше качество. Мы всегда готовы предложить своим клиентам одни из лучших цен. Самое высокое  качество работы.",
          linkedinLink: "/",
          twitterLink: "/",
          googleLink: "/"
        },
        {
          avatar: require("@/assets/img/reviews/person2.png"),
          name: "ИВАН ДМИТРИЕВ",
          age: "29",
          descr:
            "Мы заботимся о наших клиентах и гарантируем лучше качество. Мы всегда готовы предложить своим клиентам одни из лучших цен. Самое высокое  качество работы.",
          linkedinLink: "/",
          twitterLink: "/",
          googleLink: "/"
        }
      ],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-reviews-next",
          prevEl: ".swiper-reviews-prev"
        },
        breakpoints: {
          1199: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          640: {
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
  }
};
</script>

<style lang="scss">
$white: #fff;
$black: #333;

.reviews {
  padding-top: 60px;
  background: url("../../../assets/img/main-bg.jpg") center no-repeat;
  background-size: cover;
  .breadcrumbs {
    position: relative;
    h2.title {
      font-size: 36px;
      color: $white;
    }
  }
  .swiper-container {
    padding: 30px 0;
    .swiper-wrapper {
      .swiper-slide {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
        padding: 48px 40px;
        background-color: #fff;
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
        .swiper-slide-left {
          width: 30%;
          .images-avatar {
            width: 96px;
            height: 96px;
            img {
              width: 100%;
              height: auto;
            }
          }
          .images-subicon {
            width: 100px;
            height: 107px;
            margin-top: 35px;
            img {
              width: 100%;
              height: auto;
            }
          }
        }
        .swiper-slide-right {
          width: 66%;
          .swiper-slide-right__top {
            margin-bottom: 10px;
            padding-bottom: 15px;
            border-bottom: 1px solid #f6f6f6;
            h3.title {
              margin-bottom: 5px;
              font-size: 16px;
              font-weight: 700;
            }
            span.age {
              font-size: 16px;
            }
          }
          p.subTitle {
            font-size: 16px;
            line-height: 1.4;
          }
          ul.social {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            margin-top: 20px;
            li.item {
              margin-right: 15px;
            }
          }
        }
        &.swiper-slide-next {
          top: 0;
          padding: 48px 40px;
          transform: scale(1);
        }
      }
    }
  }
}

@media (max-width: 1366px) {
}

@media (max-width: 1199px) {
  .reviews {
    .breadcrumbs {
      h2.title {
        font-size: 32px;
      }
    }
    .swiper-container {
      .swiper-wrapper {
        .swiper-slide {
          padding: 48px 40px;
          .swiper-slide-left {
            width: 30%;
            .images-avatar {
              width: 96px;
              height: 96px;
              img {
                width: 100%;
                height: auto;
              }
            }
            .images-subicon {
              width: 100px;
              height: 107px;
              margin-top: 35px;
              img {
                width: 100%;
                height: auto;
              }
            }
          }
          .swiper-slide-right {
            width: 66%;
            .swiper-slide-right__top {
              margin-bottom: 10px;
              padding-bottom: 15px;
              border-bottom: 1px solid #f6f6f6;
              h3.title {
                margin-bottom: 5px;
                font-size: 16px;
                font-weight: 700;
              }
              span.age {
                font-size: 16px;
              }
            }
            p.subTitle {
              font-size: 16px;
              line-height: 1.4;
            }
            ul.social {
              display: flex;
              flex-wrap: wrap;
              justify-content: flex-start;
              align-items: center;
              width: 100%;
              margin-top: 20px;
              li.item {
                margin-right: 15px;
              }
            }
          }
          &.swiper-slide-next {
            top: 0;
            padding: 48px 40px;
            transform: scale(1);
          }
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .reviews {
    .breadcrumbs {
      h2.title {
        font-size: 32px;
      }
    }
    .swiper-container {
      .swiper-wrapper {
        .swiper-slide {
          padding: 28px 20px;
          .swiper-slide-left {
            width: 30%;
            .images-avatar {
              width: 96px;
              height: 96px;
              img {
                width: 100%;
                height: auto;
              }
            }
            .images-subicon {
              width: 100px;
              height: 107px;
              margin-top: 35px;
              img {
                width: 100%;
                height: auto;
              }
            }
          }
          .swiper-slide-right {
            width: 66%;
            .swiper-slide-right__top {
              margin-bottom: 10px;
              padding-bottom: 15px;
              h3.title {
                margin-bottom: 5px;
                font-size: 15px;
              }
              span.age {
                font-size: 15px;
              }
            }
            p.subTitle {
              font-size: 15px;
              line-height: 1.4;
            }
            ul.social {
              margin-top: 20px;
              li.item {
                margin-right: 15px;
              }
            }
          }
          &.swiper-slide-next {
            top: 0;
            padding: 28px 20px;
            transform: scale(1);
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
}

@media (max-width: 576px) {
}

@media (max-width: 400px) {
  .reviews {
    .breadcrumbs {
      h2.title {
        font-size: 26px;
      }
    }
    .swiper-container {
      .swiper-wrapper {
        .swiper-slide {
          padding: 28px 20px;
          .swiper-slide-left {
            width: 30%;
            .images-avatar {
              width: 66px;
              height: 66px;
              img {
                width: 100%;
              }
            }
            .images-subicon {
              width: 80px;
              height: 87px;
              margin-top: 35px;
            }
          }
          .swiper-slide-right {
            width: 66%;
            .swiper-slide-right__top {
              margin-bottom: 10px;
              padding-bottom: 15px;
              h3.title {
                font-size: 14px;
              }
              span.age {
                font-size: 14px;
              }
            }
            p.subTitle {
              font-size: 14px;
              line-height: 1.2;
            }
            ul.social {
              margin-top: 20px;
              li.item {
                margin-right: 15px;
              }
            }
          }
          &.swiper-slide-next {
            top: 0;
            padding: 28px 20px;
            transform: scale(1);
          }
        }
      }
    }
  }
}
</style>
