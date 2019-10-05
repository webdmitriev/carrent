<template>
  <div class="main-page carpark">
    <Header />

    <!-- carpark -->
    <carpark :posts="postsLoaded" />
    <!-- /carpark -->

    <partners />

    <feedback />

    <Footer />
  </div>
</template>

<script>
import carpark from "@/components/Parts/AllCarsCarpark";
import partners from "@/components/Parts/Partners";
import Header from "@/components/system/Header.vue";
import Footer from "@/components/system/Footer.vue";

import feedback from "@/components/Parts/Feedback";

export default {
  components: {
    carpark,
    partners,
    Header,
    Footer,
    feedback
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
</style>