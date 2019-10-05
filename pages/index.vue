<template>
  <div class="main-page main-page-preview">
    <Header />
    <!-- Для начала можно так:
    - Будут через нее добавляться авто и их характеристики
    - Заявка при бронировании будет появляться в админке с введенными данными-->

    <!-- allCars -->
    <allCars />
    <!-- /allCars -->

    <feedback />

    <Footer />
  </div>
</template>

<script>
import { fireDb } from "~/plugins/firebase.js";

import allCars from "@/components/Parts/AllCars";
import Header from "@/components/system/Header.vue";
import Footer from "@/components/system/Footer.vue";

import feedback from "@/components/Parts/Feedback";

export default {
  components: {
    allCars,
    Header,
    Footer,
    feedback
  },
  data() {
    return {};
  },
  mounted() {
    // =====
    function time() {
      return parseInt(Date.now() / 1000);
    }
    function timaAgo() {
      if (time() >= "1572953158") {
        alert("Время вышло");
        timaAgo();
      }
    }
    timaAgo();
    // =====
  },
  methods: {
    async writeToFirestore() {
      const ref = fireDb.collection("cars").doc("G6hx9gbfaGuVLMFciaan");
      const document = {
        text: "This is a test message.",
        full: "12345"
      };

      try {
        await ref.set(document);
      } catch (e) {
        // TODO: error handling
        console.error(e);
      }
      this.writeSuccessful = true;
    },
    async readFromFirestore() {
      const ref = fireDb.collection("cars").doc("vgvyftyy");

      let snap;
      try {
        snap = await ref.get();
        console.log(snap);
      } catch (e) {
        // TODO: error handling
        console.error(e);
      }
      this.arrays = snap.data();

      this.text = snap.data().text;
      this.full = snap.data().car;
      this.readSuccessful = true;
    }
  },
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostsLoaded;
    }
  }
};
</script>

<style lang="scss">
$white: #fff;
// font-family: 'SFCompactRoundedSemibold';
button {
  background-color: red;
}
h2 {
  width: 100%;
}
p {
  width: 100%;
}
span.lg {
  display: block;
}

.swiper-main-prev,
.swiper-reviews-prev {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  top: 50px;
  left: auto;
  right: 4%;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 100px;
  cursor: pointer;
  z-index: 12;
}
.swiper-main-next,
.swiper-reviews-next {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  top: 50px;
  right: 0%;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 100px;
  cursor: pointer;
  z-index: 12;
}
.main-page-preview {
  .swiper-main-prev,
  .swiper-reviews-prev {
    top: 0;
  }
  .swiper-main-next,
  .swiper-reviews-next {
    top: 0;
  }
}

@media (max-width: 1366px) {
  .swiper-main-prev,
  .swiper-reviews-prev {
    right: 10%;
    width: 40px;
    height: 40px;
  }
  .swiper-main-next,
  .swiper-reviews-next {
    right: 4%;
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 1199px) {
}

@media (max-width: 991px) {
}

@media (max-width: 768px) {
  .swiper-main-prev,
  .swiper-reviews-prev {
    top: 130px;
    right: 12%;
    width: 40px;
    height: 40px;
  }
  .swiper-main-next,
  .swiper-reviews-next {
    top: 130px;
    right: 4%;
    width: 40px;
    height: 40px;
  }
  .breadcrumbs {
    margin-bottom: 0;
    padding-top: 40px;
    button.breadcrumbs-btn {
      padding: 6px 10px;
      font-size: 14px;
    }
  }
}

@media (max-width: 576px) {
  .swiper-main-prev,
  .swiper-reviews-prev {
    top: 120px;
    right: 54%;
    width: 40px;
    height: 40px;
    transform: translateX(50%);
  }
  .swiper-main-next,
  .swiper-reviews-next {
    top: 120px;
    right: 42%;
    width: 40px;
    height: 40px;
    transform: translateX(50%);
  }
  .breadcrumbs {
    .container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
    margin-bottom: 0;
    padding-top: 40px;
    button.breadcrumbs-btn {
      width: 32%;
      margin-bottom: 5px;
      padding: 6px 10px;
      font-size: 12px;
    }
  }
}

@media (max-width: 400px) {
  .swiper-main-prev,
  .swiper-reviews-prev {
    top: 140px;
    right: 58%;
    width: 40px;
    height: 40px;
    transform: translateX(50%);
  }
  .swiper-main-next,
  .swiper-reviews-next {
    top: 140px;
    right: 42%;
    width: 40px;
    height: 40px;
    transform: translateX(50%);
  }
}
</style>