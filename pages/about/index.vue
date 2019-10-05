<template>
  <div>
    <Header />
    <section class="main-page carpark about">
      <div class="container">
        <div class="about-wrapper">
          <div class="about-wrapper-left">
            <div class="images">
              <img src="@/assets/img/about/about1.png" alt="about" />
            </div>
            <div class="images">
              <img src="@/assets/img/about/about2.png" alt="about" />
            </div>
          </div>
          <div class="about-wrapper-right">
            <h2 class="title">О нашей компании</h2>
            <p
              class="subTitle"
            >Рады представить вам Moscow Dream Cars – компанию, созданную командой единомышленников и профессионалов своего дела, поставивших себе цель создать уникальный для нашей страны сервис по прокату действительно эксклюзивных автомобилей.</p>
            <p
              class="subTitle"
            >С нами у вас нет необходимости тратить время и средства на регулярный ремонт, оплату высоких налогов и сезонное хранение вашего автомобиля.</p>
            <p class="subTitle">
              Вам остается лишь наслаждаться непередаваемыми эмоциями от управления машиной вашей мечты.
              Предлагаем Вам ознакомиться с нашим автопарком.
            </p>
          </div>
        </div>
      </div>

      <partners />
    </section>

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
  }
};
</script>

<style lang="scss">
$white: #fff;
$black: #333;

.about {
  padding-top: 60px;
  background: url("../../assets/img/main-bg.jpg") center no-repeat;
  background-size: cover;
  .about-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 70px;
    padding: 70px 30px 30px 30px;
    background-color: $white;
    box-sizing: border-box;
    .about-wrapper-left {
      width: 48%;
      .images {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
    .about-wrapper-right {
      width: 48%;
      h2.title {
        margin-bottom: 25px;
        font-size: 26px;
        font-weight: 700;
      }
      p.subTitle {
        margin-bottom: 25px;
        font-size: 16px;
        line-height: 1.4;
      }
    }
  }
}

@media (max-width: 1366px) {
}

@media (max-width: 1199px) {
}

@media (max-width: 991px) {
  .about {
    .about-wrapper {
      .about-wrapper-left {
        width: 100%;
        .images {
          width: 100%;
          img {
            display: block;
            width: 50%;
            margin: 0 auto;
          }
        }
      }
      .about-wrapper-right {
        width: 100%;
      }
    }
  }
}

@media (max-width: 768px) {
}

@media (max-width: 576px) {
  .about {
    .about-wrapper {
      padding: 40px 10px 10px 10px;
      .about-wrapper-left {
        .images {
          img {
            width: 70%;
          }
        }
      }
      .about-wrapper-right {
        h2.title {
          margin-bottom: 15px;
          font-size: 18px;
        }
        p.subTitle {
          margin-bottom: 15px;
          font-size: 13px;
          line-height: 1.2;
        }
      }
    }
  }
}

@media (max-width: 400px) {
}
</style>
