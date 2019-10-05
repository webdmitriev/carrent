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
              <h3 class="title">Addresses</h3>
              <p class="subTitle">
                For add. fee you can pick up
                <br />car in a place convenient for you
              </p>
              <ul class="contacts-list">
                <li class="item">
                  <h4 class="title">Rolf Khimki</h4>
                  <p class="subTitle">Khimki, st. Lenin, 31, building 3, office 531</p>
                  <p class="subTitle">
                    Add. pay:
                    <span>1 350 ₽</span>
                  </p>
                </li>
              </ul>
              <!-- <a class="contacts-link" href="#">ПРОЛОЖИТЬ МАРШРУТ</a> -->
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

<style lang="scss">
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
    align-items: flex-start;
    width: 100%;
    padding: 16px;
    background-color: #fff;
    box-sizing: border-box;
    .contacts-wrapper-left {
      width: 55%;
      iframe {
        height: 510px;
      }
    }
    .contacts-wrapper-right {
      width: 40%;
      padding-top: 45px;
      h3.title {
        margin-bottom: 8px;
        font-size: 32px;
        font-weight: 700;
        color: $black;
      }
      p.subTitle {
        font-size: 20px;
        color: #9fa3a7;
      }
      ul.contacts-list {
        margin-top: 45px;
        margin-bottom: 45px;
        li.item {
          h4.title {
            margin-bottom: 22px;
            font-size: 24px;
            font-weight: 700;
            color: #002b5a;
          }
          p.subTitle {
            font-size: 18px;
            span {
              color: #002b5a;
            }
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
      a.contacts-link {
        padding: 17px 26px;
        font-size: 14px;
        text-transform: uppercase;
        color: $white;
        background-color: #002b5a;
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
    padding-bottom: 40px;
    .contacts-wrapper {
      padding: 16px;
      .contacts-wrapper-left {
        display: none;
      }
      .contacts-wrapper-right {
        width: 100%;
        padding-top: 5px;
        padding-bottom: 35px;
        text-align: center;
        h3.title {
          margin-bottom: 8px;
          font-size: 32px;
        }
        p.subTitle {
          font-size: 20px;
        }
        ul.contacts-list {
          margin-top: 45px;
          margin-bottom: 45px;
          li.item {
            h4.title {
              margin-bottom: 22px;
              font-size: 22px;
            }
            p.subTitle {
              font-size: 16px;
            }
          }
        }
        a.contacts-link {
          padding: 17px 26px;
          font-size: 14px;
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
  .contacts {
    padding-top: 40px;
    padding-bottom: 40px;
    .contacts-wrapper {
      padding: 16px;
      .contacts-wrapper-left {
        display: none;
      }
      .contacts-wrapper-right {
        padding-top: 5px;
        padding-bottom: 25px;
        h3.title {
          margin-bottom: 6px;
          font-size: 28px;
        }
        p.subTitle {
          font-size: 14px;
        }
        ul.contacts-list {
          margin-top: 25px;
          margin-bottom: 25px;
          li.item {
            h4.title {
              margin-bottom: 8px;
              font-size: 20px;
            }
            p.subTitle {
              font-size: 16px;
            }
          }
        }
        a.contacts-link {
          padding: 12px 20px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
