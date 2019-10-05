<template>
  <div class="main-page carpark">
    <HeaderEn />

    <carparkEn :posts="postsLoaded" />

    <partnersEn />

    <feedbackEn />

    <FooterEn />
  </div>
</template>

<script>
import carparkEn from "@/components/Parts/AllCarsCarparkEn";
import partnersEn from "@/components/Parts/PartnersEn";
import HeaderEn from "@/components/system/HeaderEn.vue";
import FooterEn from "@/components/system/FooterEn.vue";

import feedbackEn from "@/components/Parts/FeedbackEn";

export default {
  components: {
    carparkEn,
    partnersEn,
    HeaderEn,
    FooterEn,
    feedbackEn
  },
  data() {
    return {};
  },
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostsLoaded;
    }
  }
};
</script>

<style lang="scss">
.main-page {
  background: url("../../../assets/img/main-bg.jpg");
}
</style>