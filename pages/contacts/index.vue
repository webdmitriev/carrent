<template>
  <div>
    <Header />

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
              <h3 class="title">Наши контакты</h3>
              <ul class="contacts-list">
                <li class="item">
                  <span>АДРЕС</span>
                  <p>г. Москва, ул. Ленина, 31, строение 3, офис 531</p>
                </li>
                <li class="item">
                  <span>ТЕЛЕФОН</span>
                  <a href="tel:+78001231213">8 800 123-12-13</a>
                </li>
                <!-- <li class="item">
                <button>КАК ДОБРАТЬСЯ</button>
                </li>-->
              </ul>
            </div>
            <div class="requisites">
              <ul class="requisites-left">
                <li class="item">
                  <h3 class="title">ООО Флай Авто</h3>
                </li>
                <li class="item">
                  <p>Юридический адрес: 109316, г. Москва, проспект Волгоградский, д. 32к. 8</p>
                </li>
                <li class="item">
                  <p>Почтовый адрес: 109316, г. Москва, проспект Волгоградский, д. 32к. 8</p>
                </li>
                <li class="item">
                  <p>ИНН/КПП: 7723788393/772301001</p>
                </li>
                <li class="item">
                  <p>ОГРН: 1117746112318</p>
                </li>
              </ul>
              <ul class="requisites-right">
                <li class="item">
                  <h3 class="title">ООО ЕВРОАВТО РУС</h3>
                </li>
                <li class="item">
                  <p>Юридический адрес: 109316, г. Москва, проспект Волгоградский, д. 32к. 8</p>
                </li>
                <li class="item">
                  <p>Почтовый адрес: 109316, г. Москва, проспект Волгоградский, д. 32к. 8</p>
                </li>
                <li class="item">
                  <p>ИНН/КПП: 7723788393/772301001</p>
                </li>
                <li class="item">
                  <p>ОГРН: 1117746112318</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <partners />
    </div>

    <feedback />

    <Footer />
  </div>
</template>

<script>
import partners from "@/components/Parts/Partners";
import Header from "@/components/system/Header.vue";
import Footer from "@/components/system/Footer.vue";

import feedback from "@/components/Parts/Feedback";

export default {
  components: {
    partners,
    Header,
    Footer,
    feedback
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
  background: url("../../assets/img/main-bg.jpg") center no-repeat;
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
    .requisites {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: flex-start;
      width: 100%;
      margin-top: 45px;
      h3.title {
        font-size: 24px;
        font-weight: 900;
        color: #002b5a;
      }
      p {
        font-size: 16px;
        font-weight: 400;
        color: #002b5a;
      }
      li.item {
        margin-bottom: 8px;
      }
      &-left {
        width: 40%;
      }
      &-right {
        width: 40%;
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
      .requisites {
        margin-top: 15px;
        h3.title {
          font-size: 22px;
        }
        p {
          font-size: 15px;
        }
        li.item {
          margin-bottom: 6px;
        }
        &-left {
          width: 44%;
        }
        &-right {
          width: 44%;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .contacts {
    .contacts-wrapper {
      .requisites {
        margin-top: 10px;
        h3.title {
          font-size: 22px;
        }
        p {
          font-size: 15px;
        }
        li.item {
          margin-bottom: 6px;
        }
        &-left {
          width: 100%;
          margin-bottom: 15px;
        }
        &-right {
          width: 100%;
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
