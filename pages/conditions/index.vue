<template>
  <div>
    <Header />

    <section class="conditions">
      <span class="conditions-car">
        <img src="@/assets/img/conditions/conditions-bg.png" alt="car" />
      </span>
      <div class="container">
        <div class="conditions-wrapper">
          <h2 class="title">
            Для физических лиц необходим
            <span class="lg"></span>следующий набор документов
          </h2>
          <ul class="conditions-list">
            <li class="item item-title">Гражданам РФ</li>
            <li class="item">
              <span class="number">
                <img src="@/assets/img/icons/one.svg" alt="item" />
              </span>
              <div class="content">
                <h4 class="title">
                  Гражданский
                  <span class="lg"></span>паспорт
                </h4>
              </div>
            </li>
            <li class="item">
              <span class="number">
                <img src="@/assets/img/icons/two.svg" alt="item" />
              </span>
              <div class="content">
                <h4 class="title">Водительское удостоверение</h4>
                <p class="subTitle">соответствующей категории</p>
              </div>
            </li>
            <li class="item">
              <span class="number">
                <img src="@/assets/img/icons/three.svg" alt="item" />
              </span>
              <div class="content">
                <h4 class="title">
                  Любой третий документ
                  <span class="lg"></span>(необязательно)
                </h4>
                <p class="subTitle">
                  загран. паспорт, военный билет
                  <span class="lg"></span>или ИНН
                </p>
              </div>
            </li>
          </ul>
          <ul class="conditions-list">
            <li class="item item-title">Иностранным гражданам</li>
            <li class="item">
              <span class="number">
                <img src="@/assets/img/icons/one.svg" alt="item" />
              </span>
              <div class="content">
                <h4 class="title">
                  Заграничный
                  <span class="lg"></span>паспорт
                </h4>
              </div>
            </li>
            <li class="item">
              <span class="number">
                <img src="@/assets/img/icons/two.svg" alt="item" />
              </span>
              <div class="content">
                <h4 class="title">Миграционная карта / виза</h4>
                <p class="subTitle">или въездная виза</p>
              </div>
            </li>
          </ul>
          <ul class="conditions-list conditions-list-bottom">
            <li class="item item-title">Минимальные условия проката</li>
            <li class="item">
              <span class="number">
                <img src="@/assets/img/conditions/item4.svg" alt="item" />
              </span>
              <div class="content">
                <h4 class="title">24 часа</h4>
                <p class="subTitle">минимальный срок аренды</p>
              </div>
            </li>
            <li class="item">
              <span class="number">
                <img src="@/assets/img/conditions/item5.svg" alt="item" />
              </span>
              <div class="content">
                <h4 class="title">от 21 до 75 лет</h4>
                <p class="subTitle">возраст</p>
              </div>
            </li>
            <li class="item">
              <span class="number">
                <img src="@/assets/img/conditions/item6.svg" alt="item" />
              </span>
              <div class="content">
                <h4 class="title">от 3х лет</h4>
                <p class="subTitle">стаж вождения</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <feedback />

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/system/Header.vue";
import Footer from "@/components/system/Footer.vue";

import feedback from "@/components/Parts/Feedback";

export default {
  components: {
    Header,
    Footer,
    feedback
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
$white: #fff;
$black: #333;

.conditions {
  position: relative;
  padding-top: 100px;
  padding-bottom: 60px;
  span.conditions-car {
    position: absolute;
    top: 180px;
    left: 0;
    width: 420px;
    img {
      width: 100%;
    }
  }
  &-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding-left: 180px;
    box-sizing: border-box;
    h2.title {
      width: 100%;
      margin-bottom: 40px;
      font-size: 38px;
      font-weight: 700;
      line-height: 1.2;
      color: #002b5a;
    }
    ul.conditions-list {
      width: 42%;
      li.item {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        margin-bottom: 46px;
        span.number {
          width: 40px;
          height: 40px;
          margin-right: 15px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .content {
          width: 86%;
          h4.title {
            margin-bottom: 6px;
            font-size: 22px;
            line-height: 1.2;
            font-weight: 500;
            color: #525f82;
          }
          p.subTitle {
            font-size: 16px;
          }
        }
        &.item-title {
          margin-bottom: 20px;
          font-size: 22px;
          line-height: 1.2;
          font-weight: 500;
          color: #002b5a;
        }
      }
      &.conditions-list-bottom {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        li.item {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: flex-start;
          width: 30%;
          margin-bottom: 6px;
          span.number {
            margin-right: 25px;
          }
          .content {
            width: 70%;
            h4.title {
              margin-bottom: 6px;
              font-size: 22px;
              line-height: 1.2;
              font-weight: 500;
              color: #525f82;
            }
            p.subTitle {
              font-size: 16px;
            }
          }
          &.item-title {
            width: 100%;
            margin-bottom: 20px;
            font-size: 22px;
            line-height: 1.2;
            font-weight: 500;
            color: #002b5a;
          }
        }
      }
    }
  }
}

@media (max-width: 1366px) {
  .conditions {
    padding-top: 100px;
    padding-bottom: 60px;
    span.conditions-car {
      top: 180px;
      left: 0;
      width: 320px;
    }
    &-wrapper {
      padding-left: 300px;
      h2.title {
        margin-bottom: 40px;
        font-size: 32px;
      }
      ul.conditions-list {
        width: 48%;
        li.item {
          margin-bottom: 46px;
          span.number {
            margin-right: 15px;
          }
          .content {
            h4.title {
              margin-bottom: 6px;
              font-size: 22px;
            }
            p.subTitle {
              font-size: 16px;
            }
          }
          &.item-title {
            margin-bottom: 20px;
            font-size: 22px;
          }
        }
        &.conditions-list-bottom {
          li.item {
            width: 32%;
            margin-bottom: 6px;
            span.number {
              margin-right: 15px;
            }
            .content {
              h4.title {
                margin-bottom: 6px;
                font-size: 20px;
              }
              p.subTitle {
                font-size: 16px;
              }
            }
            &.item-title {
              margin-bottom: 20px;
              font-size: 22px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1199px) {
  .conditions {
    padding-top: 100px;
    padding-bottom: 60px;
    span.conditions-car {
      top: 100px;
      left: 0;
      width: 340px;
    }
    &-wrapper {
      padding-left: 240px;
      h2.title {
        margin-bottom: 30px;
        font-size: 28px;
      }
      ul.conditions-list {
        width: 48%;
        li.item {
          margin-bottom: 36px;
          span.number {
            margin-right: 10px;
            width: 32px;
            height: 32px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .content {
            h4.title {
              margin-bottom: 4px;
              font-size: 16px;
            }
            p.subTitle {
              font-size: 14px;
            }
          }
          &.item-title {
            margin-bottom: 16px;
            font-size: 18px;
          }
        }
        &.conditions-list-bottom {
          li.item {
            width: 32%;
            margin-bottom: 6px;
            span.number {
              margin-right: 12px;
            }
            .content {
              h4.title {
                margin-bottom: 4px;
                font-size: 16px;
              }
              p.subTitle {
                font-size: 11px;
              }
            }
            &.item-title {
              margin-bottom: 20px;
              font-size: 22px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .conditions {
    padding-top: 40px;
    padding-bottom: 60px;
    span.conditions-car {
      display: none;
    }
    &-wrapper {
      padding-left: 0px;
      h2.title {
        margin-bottom: 30px;
        font-size: 28px;
        text-align: center;
      }
      ul.conditions-list {
        width: 49%;
      }
    }
  }
}

@media (max-width: 768px) {
  .conditions {
    padding-top: 30px;
    padding-bottom: 40px;
    &-wrapper {
      padding-left: 0px;
      h2.title {
        margin-bottom: 30px;
        font-size: 28px;
      }
      ul.conditions-list {
        width: 49%;
        li.item {
          margin-bottom: 26px;
          span.number {
            margin-right: 6px;
            width: 24px;
            height: 24px;
          }
          .content {
            h4.title {
              margin-bottom: 4px;
              font-size: 14px;
            }
            p.subTitle {
              font-size: 11px;
            }
          }
          &.item-title {
            margin-bottom: 16px;
            font-size: 16px;
          }
        }
        &.conditions-list-bottom {
          li.item {
            display: block;
            width: 100%;
            margin-bottom: 16px;
            text-align: center;
            span.number {
              display: inline-block;
              margin-right: 6px;
              width: 36px;
              height: 36px;
            }
            .content {
              width: 100%;
              h4.title {
                margin-bottom: 4px;
                font-size: 18px;
              }
              p.subTitle {
                font-size: 14px;
              }
            }
            &.item-title {
              display: block;
              width: 100%;
              margin-bottom: 20px;
              font-size: 22px;
              text-align: center;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .conditions {
    padding-top: 30px;
    padding-bottom: 40px;
    &-wrapper {
      padding-left: 0px;
      h2.title {
        margin-bottom: 30px;
        font-size: 22px;
      }
      ul.conditions-list {
        width: 100%;
        margin-bottom: 30px;
        padding-left: 60px;
        box-sizing: border-box;
        li.item {
          margin-bottom: 26px;
          span.number {
            margin-right: 6px;
            width: 32px;
            height: 32px;
          }
          .content {
            h4.title {
              margin-bottom: 4px;
              font-size: 14px;
            }
            p.subTitle {
              font-size: 11px;
            }
          }
          &.item-title {
            margin-bottom: 16px;
            font-size: 16px;
          }
        }
        &.conditions-list-bottom {
          li.item {
            display: flex;
            width: 100%;
            margin-bottom: 16px;
            text-align: left;
            span.number {
              display: inline-block;
              margin-right: 6px;
              width: 32px;
              height: 32px;
            }
            .content {
              h4.title {
                margin-bottom: 4px;
                font-size: 18px;
              }
              p.subTitle {
                font-size: 14px;
              }
            }
            &.item-title {
              display: block;
              width: 100%;
              margin-bottom: 20px;
              font-size: 16px;
              text-align: left;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 400px) {
  .conditions {
    padding-top: 30px;
    padding-bottom: 5px;
    &-wrapper {
      h2.title {
        margin-bottom: 20px;
        font-size: 18px;
      }
      ul.conditions-list {
        padding-left: 30px;
        li.item {
          .content {
            width: 85%;
          }
        }
      }
      ul.conditions-list.conditions-list-bottom {
        li.item {
          .content {
            width: 82%;
          }
        }
      }
    }
  }
}
</style>
