<template>
  <div class="main-page main-page-preview">
    <HeaderEn />

    <!-- allCars -->
    <allCarsEn :posts="postsLoaded" />
    <!-- /allCars -->

    <feedbackEn />

    <FooterEn />
  </div>
</template>

<script>
import { fireDb } from "~/plugins/firebase.js";

import allCarsEn from "@/components/Parts/AllCarsEn";
import HeaderEn from "@/components/system/HeaderEn.vue";
import FooterEn from "@/components/system/FooterEn.vue";

import feedbackEn from "@/components/Parts/FeedbackEn";

export default {
  components: {
    allCarsEn,
    HeaderEn,
    FooterEn,
    feedbackEn
  },
  data() {
    return {};
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
</style>