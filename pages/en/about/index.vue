<template>
  <div>
    <HeaderEn />
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
            <h2 class="title">About our company</h2>
            <p
              class="subTitle"
            >We are pleased to introduce you to Moscow Dream Cars, a company created by a team of like-minded and professional people who have set themselves the goal of creating a truly exclusive car rental service for our country.</p>
            <p
              class="subTitle"
            >With us you do not need to spend time and money on regular repairs, paying high taxes and seasonal storage of your car.</p>
            <p class="subTitle">
              You just have to enjoy the indescribable emotions from controlling the car of your dreams.
              We suggest you familiarize yourself with our fleet.
            </p>
          </div>
        </div>
      </div>

      <partnersEn />
    </section>

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
  }
};
</script>

<style lang="scss">
$white: #fff;
$black: #333;

.about {
  padding-top: 60px;
  background: url("../../../assets/img/main-bg.jpg") center no-repeat;
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
