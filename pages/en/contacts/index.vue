<template>
  <div>
    <HeaderEn />

    <div class="reviews-partners">
      <section class="main-page contacts">
        <div class="container">
          <div class="contacts-wrapper">
            <div class="contacts-wrapper-left">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A3164a991d4d713faa6fdf8ca337aa50754175f0d7c0560f69abd02c01e146ab0&amp;source=constructor"
                width="100%"
                frameborder="0"
              ></iframe>
            </div>
            <div class="contacts-wrapper-right">
              <h3 class="title">Our contacts</h3>
              <ul class="contacts-list">
                <li class="item">
                  <span>ADDRESS</span>
                  <p>Moscow, st. Lenin, 31, building 3, office 531</p>
                </li>
                <li class="item">
                  <span>PHONE</span>
                  <a href="tel:+78001231213">8 800 123-12-13</a>
                </li>
                <!-- <li class="item">
                <button>КАК ДОБРАТЬСЯ</button>
                </li>-->
              </ul>
            </div>
          </div>
        </div>
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
    return {};
  }
};
</script>

<style lang="scss" scoped>
$white: #fff;
$black: #333;

.contacts {
  padding-top: 60px;
  padding-bottom: 45px;
  background: url("../../../assets/img/main-bg.jpg") center no-repeat;
  background-size: cover;
  .contacts-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px;
    background-color: #fff;
    box-sizing: border-box;
    .contacts-wrapper-left {
      width: 60%;
      iframe {
        height: 510px;
      }
    }
    .contacts-wrapper-right {
      width: 35%;
      h3.title {
        margin-bottom: 38px;
        font-size: 32px;
        color: $black;
      }
      ul.contacts-list {
        li.item {
          margin-bottom: 35px;
          span {
            display: block;
            margin-bottom: 10px;
            font-size: 12px;
            color: #9fa3a7;
          }
          p,
          a {
            font-size: 22px;
            line-height: 1.8;
            color: $black;
          }
          button {
            padding: 17px 50px;
            font-size: 14px;
            color: $white;
            background-color: #002b5a;
            border: 1px solid #002b5a;
            transition: all 0.5s;
            &:hover {
              color: #002b5a;
              background-color: transparent;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1366px) {
}

@media (max-width: 1199px) {
}

@media (max-width: 991px) {
  .contacts {
    padding-top: 40px;
    padding-bottom: 45px;
    .contacts-wrapper {
      padding: 10px;
      .contacts-wrapper-left {
        display: none;
      }
      .contacts-wrapper-right {
        width: 100%;
        text-align: center;
        h3.title {
          margin-bottom: 38px;
          font-size: 32px;
          color: $black;
        }
        ul.contacts-list {
          li.item {
            margin-bottom: 35px;
            span {
              display: block;
              margin-bottom: 10px;
              font-size: 12px;
              color: #9fa3a7;
            }
            p,
            a {
              font-size: 22px;
              line-height: 1.8;
              color: $black;
            }
            button {
              padding: 17px 50px;
              font-size: 14px;
              color: $white;
              background-color: #002b5a;
              border: 1px solid #002b5a;
              transition: all 0.5s;
              &:hover {
                color: #002b5a;
                background-color: transparent;
              }
            }
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
}
</style>
