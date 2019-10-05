<template>
  <div>
    <HeaderEn />
    <section class="tariffs">
      <div class="container">
        <div class="tariffs-wrapper">
          <h2 class="title">Rates</h2>
          <p class="subTitle">
            Kilozhrozh limit:
            <span>250 km / day</span>
          </p>
          <p class="subTitle">
            Re-run:
            <span>7 ₽ / km</span>
          </p>
          <div class="table-wrapper-top">
            <ul class="tableTop">
              <li class="table-main">
                <ul class="table-line">
                  <li class="table-line-item">
                    <p>Model</p>
                  </li>
                  <li class="table-line-item">
                    <p>Class</p>
                  </li>
                  <li class="table-line-item">
                    <p>Body</p>
                  </li>
                  <li class="table-line-item">
                    <p>
                      1-2
                      <br />day
                    </p>
                  </li>
                  <li class="table-line-item">
                    <p>
                      3-6
                      <br />day
                    </p>
                  </li>
                  <li class="table-line-item">
                    <p>
                      7-14
                      <br />day's
                    </p>
                  </li>
                  <li class="table-line-item">
                    <p>
                      15-30
                      <br />day's
                    </p>
                  </li>
                  <li class="table-line-item">
                    <p>
                      31+
                      <br />day's
                    </p>
                  </li>
                  <li class="table-line-item">
                    <p>Pledge</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <!-- preloader -->
          <span class="preloader" v-if="carList == ''">
            <svg width="200" height="200" viewBox="0 0 40 60">
              <polygon
                class="triagle"
                points="16,1 32,32 1,32"
                fill="none"
                stroke-width="1"
                stroke="#333"
              />
              <text class="webplaneta" x="0" y="45" fill="#333">Loading...</text>
            </svg>
          </span>
          <!-- /preloader -->
          <div class="table-wrapper" v-else>
            <ul class="table" v-for="car in carList" :key="car.id">
              <li class="table-item">
                <ul class="table-line">
                  <li class="table-line-item">
                    <p>{{car.nameCar}}</p>
                  </li>
                  <li class="table-line-item">
                    <p>{{ car.typeCar }}</p>
                  </li>
                  <li class="table-line-item">
                    <p>Sedan</p>
                  </li>
                  <li class="table-line-item">
                    <p>1 995 ₽</p>
                  </li>
                  <li class="table-line-item">
                    <p>1 995 ₽</p>
                  </li>
                  <li class="table-line-item">
                    <p>1 995 ₽</p>
                  </li>
                  <li class="table-line-item">
                    <p>1 995 ₽</p>
                  </li>
                  <li class="table-line-item">
                    <p>1 995 ₽</p>
                  </li>
                  <li class="table-line-item">
                    <p>10 000 ₽</p>
                  </li>
                </ul>
              </li>
              <li class="table-item table-item-two">
                <div class="images">
                  <img v-if="car.mainImages" :src="car.mainImages" alt="car" />
                  <img v-else src="@/assets/img/car/default.png" alt="default" />
                </div>
                <ul class="content">
                  <li class="content-item">
                    <h3 class="title">
                      {{car.nameCar}}
                      <div class="icons">
                        <span>
                          <img src="@/assets/img/icons/door.svg" alt="door" />
                          {{ car.doorCar }}
                        </span>
                      </div>
                      <div class="icons">
                        <span>
                          <img src="@/assets/img/icons/users.svg" alt="users" />
                          {{ car.usersCar }}
                        </span>
                      </div>
                    </h3>
                    <p class="typeCar">{{ car.typeCar }}</p>
                    <ul class="shape">
                      <li class="item">
                        <span>
                          <img src="@/assets/img/icons/shape.svg" alt="shape" />
                          KPP {{car.kppCar}}
                        </span>
                      </li>
                      <li class="item">
                        <span>
                          <img src="@/assets/img/icons/shape.svg" alt="shape" />
                          Year of issue: {{car.ageCar}}
                        </span>
                      </li>
                      <li class="item">
                        <span>
                          <img src="@/assets/img/icons/shape.svg" alt="shape" />
                          Drive unit: {{car.gearCar}}
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li class="content-item">
                    <p class="text">
                      <span>Short description:</span>
                      {{car.descrCar}}
                    </p>
                  </li>
                  <li class="content-item">
                    <!-- <nuxt-link class="content-item-link" :to="`/en/carpark/${car.id}`">RESERVE CAR</nuxt-link> -->
                    <button class="content-item-link" @click="nextCar(car.id)">RESERVE CAR</button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <feedbackEn />

    <FooterEn />
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";

import HeaderEn from "@/components/system/HeaderEn.vue";
import FooterEn from "@/components/system/FooterEn.vue";

import feedbackEn from "@/components/Parts/FeedbackEn";

let allCars = "https://carrent-3303f.firebaseio.com/posts.json";

export default {
  components: {
    HeaderEn,
    FooterEn,
    feedbackEn
  },
  data() {
    return {
      carList: []
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

          setTimeout(() => {
            this.tableClick();
          }, 2000);
        })
        .catch(e => console.log(e));
    },
    tableClick() {
      let list = document.querySelectorAll(".table-wrapper ul.table");

      for (let i = 0; i < list.length; i++) {
        list[i].addEventListener("click", function() {
          let tableItemTwo = document.querySelectorAll("li.table-item-two");

          for (let i = 0; i < tableItemTwo.length; i++) {
            tableItemTwo[i].style.display = "none";
          }

          this.querySelector("li.table-item-two").style.display = "flex";
        });
      }
      console.log("11");
    }
  }
};
</script>

<style lang="scss">
$white: #fff;
$black: #333;

.tariffs {
  padding-top: 60px;
  padding-bottom: 60px;
  background: url("../../../assets/img/main-bg.jpg") center no-repeat;
  background-size: cover;
  .tariffs-wrapper {
    width: 100%;
    padding: 45px 65px;
    background-color: $white;
    box-sizing: border-box;
    h2.title {
      margin-bottom: 6px;
      font-size: 36px;
      font-weight: 700;
      color: #303030;
    }
    p.subTitle {
      font-size: 22px;
      line-height: 1.4;
      color: #7c7c7c;
      span {
        font-weight: 700;
        color: #002b5a;
      }
    }
    .table-wrapper-top {
      margin-top: 30px;
    }
    .table-wrapper,
    .table-wrapper-top {
      ul.table,
      ul.tableTop {
        li.table-item,
        li.table-main {
          width: 100%;
          ul.table-line {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            li.table-line-item {
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              width: 72px;
              height: 45px;
              p {
                font-size: 17px;
                text-align: center;
              }
              &:nth-child(1) {
                width: 240px;
                p {
                  padding-left: 30px;
                  text-align: left;
                }
              }
              &:nth-child(2) {
                width: 120px;
                p {
                  text-align: left;
                }
              }
              &:nth-child(3) {
                width: 220px;
                p {
                  text-align: left;
                }
              }
            }
          }
        }
        li.table-item-two {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: center;
          min-height: 142px;
          padding-left: 30px;
          background-color: #f3f3f3;
          box-sizing: border-box;
          transition: all 0.5s;
          .images {
            width: 158px;
            img {
              width: 100%;
              object-fit: contain;
            }
          }
          ul.content {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
            width: 820px;
            padding-left: 40px;
            li.content-item {
              h3.title {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-self: center;
                width: 100%;
                font-size: 22px;
                color: #303030;
                .icons {
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: space-between;
                  align-self: center;
                  font-size: 13px;
                  padding-left: 20px;
                  img {
                    width: 13px;
                  }
                  &:nth-child(2) {
                    padding-left: 10px;
                    img {
                      width: 21px;
                    }
                  }
                }
              }
              p.typeCar {
                font-size: 12px;
                color: #7c7c7c;
              }
              ul.shape {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: flex-start;
                width: 100%;
                margin-top: 13px;
                li.item {
                  width: 48%;
                  span {
                    font-size: 10px;
                    color: #303030;
                    img {
                      width: 12px;
                    }
                  }
                }
              }
              p.text {
                padding-left: 36px;
                padding-right: 40px;
                font-size: 12px;
                line-height: 1.5;
                color: #303030;
                span {
                  display: block;
                  font-size: 14px;
                  font-family: "SFCompactRoundedSemibold";
                }
              }
              button.content-item-link {
                display: block;
                padding: 32px 12px;
                font-size: 12px;
                text-align: center;
                color: $white;
                background-color: #002b5a;
              }
              &:nth-child(1) {
                width: 240px;
              }
              &:nth-child(2) {
                width: 400px;
              }
              &:nth-child(3) {
                width: 130px;
              }
            }
          }
        }
        li.table-item {
          ul.table-line {
            cursor: pointer;
            &:hover {
              background-color: #002a79;
            }
          }
        }
        li.table-main {
          background-color: #f5f5f5;
          ul.table-line {
            li.table-line-item {
              height: 64px;
            }
          }
        }
        li.table-item:last-child {
          display: none;
        }
      }
      ul.table {
        background-color: #002b5a;
        color: $white;
        &:nth-child(odd) {
          background-color: #0f437c;
        }
      }
    }
  }
}

@media (max-width: 1366px) {
}

@media (max-width: 1199px) {
  .tariffs {
    padding-top: 60px;
    padding-bottom: 60px;
    .tariffs-wrapper {
      width: 100%;
      padding: 45px 65px;
      h2.title {
        margin-bottom: 6px;
        font-size: 32px;
      }
      p.subTitle {
        font-size: 20px;
        line-height: 1.3;
      }
      .table-wrapper-top {
        margin-top: 26px;
      }
      .table-wrapper,
      .table-wrapper-top {
        ul.table,
        ul.tableTop {
          li.table-item,
          li.table-main {
            ul.table-line {
              li.table-line-item {
                width: 64px;
                height: 45px;
                p {
                  font-size: 15px;
                }
                &:nth-child(1) {
                  width: 180px;
                  p {
                    padding-left: 16px;
                  }
                }
                &:nth-child(2) {
                  width: 100px;
                }
                &:nth-child(3) {
                  width: 140px;
                }
              }
            }
          }
          li.table-item-two {
            position: relative;
            min-height: 122px;
            padding-left: 16px;
            .images {
              width: 120px;
            }
            ul.content {
              width: 670px;
              padding-left: 20px;
              li.content-item {
                h3.title {
                  justify-content: flex-start;
                  font-size: 18px;
                  .icons {
                    font-size: 12px;
                    padding-left: 14px;
                    img {
                      width: 12px;
                    }
                    &:nth-child(2) {
                      padding-left: 6px;
                      img {
                        width: 19px;
                      }
                    }
                  }
                }
                p.typeCar {
                  font-size: 12px;
                }
                ul.shape {
                  margin-top: 8px;
                  li.item {
                    width: 48%;
                    span {
                      font-size: 10px;
                    }
                  }
                }
                p.text {
                  padding-left: 15px;
                  padding-right: 15px;
                  font-size: 11px;
                  line-height: 1.3;
                  span {
                    font-size: 14px;
                  }
                }
                button.content-item-link {
                  position: absolute;
                  display: block;
                  top: 5px;
                  right: 5px;
                  padding: 6px 4px;
                  font-size: 12px;
                }
                &:nth-child(1) {
                  width: 240px;
                }
                &:nth-child(2) {
                  width: 400px;
                }
                &:nth-child(3) {
                  width: 130px;
                }
              }
            }
          }
          li.table-main {
            ul.table-line {
              li.table-line-item {
                height: 64px;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .tariffs {
    padding-top: 40px;
    padding-bottom: 40px;
    .tariffs-wrapper {
      padding: 15px 25px;
      h2.title {
        margin-bottom: 6px;
        font-size: 32px;
        text-align: center;
      }
      p.subTitle {
        font-size: 16px;
        line-height: 1.3;
        text-align: center;
      }
      .table-wrapper-top {
        margin-top: 20px;
      }
      .table-wrapper,
      .table-wrapper-top {
        ul.table,
        ul.tableTop {
          li.table-item,
          li.table-main {
            ul.table-line {
              li.table-line-item {
                width: 56px;
                height: 45px;
                p {
                  font-size: 14px;
                }
                &:nth-child(1) {
                  width: 120px;
                  p {
                    padding-left: 10px;
                  }
                }
                &:nth-child(2) {
                  width: 80px;
                }
                &:nth-child(3) {
                  width: 100px;
                }
              }
            }
          }
          li.table-item-two {
            position: relative;
            min-height: 122px;
            padding-left: 16px;
            .images {
              display: none;
            }
            ul.content {
              width: 100%;
              padding-left: 0px;
              li.content-item {
                h3.title {
                  font-size: 18px;
                  .icons {
                    font-size: 12px;
                    padding-left: 14px;
                    img {
                      width: 12px;
                    }
                    &:nth-child(2) {
                      padding-left: 6px;
                      img {
                        width: 19px;
                      }
                    }
                  }
                }
                p.typeCar {
                  font-size: 12px;
                }
                ul.shape {
                  margin-top: 8px;
                  li.item {
                    width: 48%;
                    span {
                      font-size: 10px;
                    }
                  }
                }
                p.text {
                  padding-left: 15px;
                  padding-right: 15px;
                  font-size: 11px;
                  line-height: 1.3;
                  span {
                    font-size: 14px;
                  }
                }
                button.content-item-link {
                  position: absolute;
                  display: block;
                  top: 5px;
                  right: 5px;
                  padding: 6px 4px;
                  font-size: 12px;
                }
                &:nth-child(1) {
                  width: 240px;
                }
                &:nth-child(2) {
                  width: 320px;
                }
                &:nth-child(3) {
                  width: auto;
                }
              }
            }
          }
          li.table-main {
            ul.table-line {
              li.table-line-item {
                height: 54px;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .tariffs {
    padding-top: 30px;
    padding-bottom: 30px;
    .tariffs-wrapper {
      padding: 5px;
      h2.title {
        margin-bottom: 6px;
        font-size: 26px;
      }
      p.subTitle {
        font-size: 14px;
        line-height: 1.2;
      }
      .table-wrapper-top {
        margin-top: 10px;
      }
      .table-wrapper,
      .table-wrapper-top {
        ul.table,
        ul.tableTop {
          li.table-item,
          li.table-main {
            ul.table-line {
              li.table-line-item {
                width: 50px;
                height: auto;
                min-height: 42px;
                p {
                  font-size: 12px;
                }
                &:nth-child(1) {
                  width: 80px;
                  p {
                    padding-left: 5px;
                  }
                }
                &:nth-child(2) {
                  width: 60px;
                }
                &:nth-child(3) {
                  width: 60px;
                }
              }
            }
          }
          li.table-item-two {
            min-height: 122px;
            padding-left: 6px;
            ul.content {
              li.content-item {
                h3.title {
                  font-size: 14px;
                  .icons {
                    font-size: 12px;
                    padding-left: 14px;
                    img {
                      width: 12px;
                    }
                    &:nth-child(2) {
                      padding-left: 6px;
                      img {
                        width: 19px;
                      }
                    }
                  }
                }
                p.typeCar {
                  font-size: 12px;
                }
                ul.shape {
                  margin-top: 8px;
                  li.item {
                    width: 100%;
                    span {
                      font-size: 10px;
                    }
                  }
                }
                p.text {
                  padding-left: 15px;
                  padding-right: 15px;
                  font-size: 11px;
                  line-height: 1.3;
                  span {
                    font-size: 14px;
                  }
                }
                button.content-item-link {
                  position: absolute;
                  display: block;
                  top: 5px;
                  right: 5px;
                  padding: 6px 4px;
                  font-size: 12px;
                }
                &:nth-child(1) {
                  width: 160px;
                }
                &:nth-child(2) {
                  width: 300px;
                }
              }
            }
          }
          li.table-main {
            ul.table-line {
              li.table-line-item {
                height: 54px;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .tariffs {
    padding-top: 30px;
    padding-bottom: 30px;
    .tariffs-wrapper {
      padding: 5px;
      h2.title {
        margin-bottom: 6px;
        font-size: 26px;
      }
      p.subTitle {
        font-size: 14px;
        line-height: 1.2;
      }
      .table-wrapper-top {
        margin-top: 10px;
      }
      .table-wrapper,
      .table-wrapper-top {
        ul.table,
        ul.tableTop {
          li.table-item,
          li.table-main {
            ul.table-line {
              li.table-line-item {
                display: none;
                width: 50px;
                height: auto;
                min-height: 42px;
                p {
                  font-size: 12px;
                }
                &:nth-child(1) {
                  display: flex;
                  width: 120px;
                  p {
                    padding-left: 15px;
                  }
                }
                &:nth-child(2) {
                  display: flex;
                  width: 80px;
                }
                &:nth-child(3) {
                  display: flex;
                  width: 80px;
                }
                &:nth-child(4) {
                  display: flex;
                  width: 60px;
                }
              }
            }
          }
          li.table-item-two {
            min-height: 122px;
            padding-left: 6px;
            ul.content {
              li.content-item {
                padding-top: 10px;
                padding-bottom: 10px;
                h3.title {
                  justify-content: center;
                  margin-bottom: 6px;
                  font-size: 18px;
                  .icons {
                    font-size: 12px;
                    padding-left: 14px;
                    img {
                      width: 12px;
                    }
                    &:nth-child(2) {
                      padding-left: 6px;
                      img {
                        width: 19px;
                      }
                    }
                  }
                }
                p.typeCar {
                  font-size: 12px;
                  text-align: center;
                }
                ul.shape {
                  justify-content: center;
                  margin-top: 8px;
                  li.item {
                    width: 32%;
                    span {
                      font-size: 10px;
                    }
                  }
                }
                p.text {
                  padding-left: 15px;
                  padding-right: 15px;
                  font-size: 11px;
                  line-height: 1.3;
                  span {
                    font-size: 14px;
                  }
                }
                button.content-item-link {
                  position: relative;
                  display: block;
                  top: 5px;
                  right: 5px;
                  padding: 6px 4px;
                  font-size: 12px;
                }
                &:nth-child(1) {
                  width: 100%;
                }
                &:nth-child(2) {
                  width: 100%;
                }
                &:nth-child(3) {
                  padding-top: 0;
                  width: 100%;
                }
              }
            }
          }
          li.table-main {
            ul.table-line {
              li.table-line-item {
                height: 54px;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 400px) {
  .tariffs {
    padding-top: 30px;
    padding-bottom: 30px;
    .tariffs-wrapper {
      padding: 3px;
      .table-wrapper,
      .table-wrapper-top {
        ul.table,
        ul.tableTop {
          li.table-item,
          li.table-main {
            ul.table-line {
              li.table-line-item {
                display: none;
                width: 0px;
                height: auto;
                min-height: 42px;
                p {
                  font-size: 12px;
                }
                &:nth-child(1) {
                  display: flex;
                  width: 100px;
                  p {
                    padding-left: 10px;
                  }
                }
                &:nth-child(2) {
                  display: flex;
                  width: 70px;
                }
                &:nth-child(3) {
                  display: flex;
                  width: 65px;
                }
                &:nth-child(4) {
                  display: flex;
                  width: 50px;
                }
              }
            }
          }
          li.table-item-two {
            min-height: 122px;
            padding-left: 6px;
            ul.content {
              li.content-item {
                padding-top: 10px;
                padding-bottom: 10px;
                h3.title {
                  justify-content: center;
                  margin-bottom: 6px;
                  font-size: 18px;
                  .icons {
                    font-size: 12px;
                    padding-left: 14px;
                    img {
                      width: 12px;
                    }
                    &:nth-child(2) {
                      padding-left: 6px;
                      img {
                        width: 19px;
                      }
                    }
                  }
                }
                p.typeCar {
                  font-size: 12px;
                  text-align: center;
                }
                ul.shape {
                  justify-content: center;
                  margin-top: 8px;
                  li.item {
                    width: 48%;
                    text-align: center;
                    span {
                      font-size: 10px;
                    }
                  }
                }
                p.text {
                  padding-left: 15px;
                  padding-right: 15px;
                  font-size: 10px;
                  line-height: 1.3;
                  span {
                    font-size: 14px;
                  }
                }
                button.content-item-link {
                  position: relative;
                  display: block;
                  top: 5px;
                  right: 5px;
                  padding: 6px 4px;
                  font-size: 12px;
                }
                &:nth-child(1) {
                  width: 100%;
                }
                &:nth-child(2) {
                  width: 100%;
                }
                &:nth-child(3) {
                  padding-top: 0;
                  width: 100%;
                }
              }
            }
          }
          li.table-main {
            ul.table-line {
              li.table-line-item {
                height: 54px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
