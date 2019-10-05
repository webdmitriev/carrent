<template>
  <!-- header -->
  <header class="header">
    <div class="container">
      <div class="header-menu">
        <ul class="menu-top">
          <li class="item item-logo">
            <nuxt-link to="/en/">
              <img src="@/assets/img/header/payless-logo.svg" alt="payless" />
            </nuxt-link>
          </li>
          <li class="item item-title">
            <h2 class="title">RENT A CAR IN MOSCOW</h2>
          </li>
          <li class="item item-phone">
            <nuxt-link class="english" to="/">Ru</nuxt-link>
            <span>
              <img src="@/assets/img/icons/phone-call.svg" alt="phone" />
            </span>
            <a href="tel:+79171231213">+7(917)123-12-13</a>
          </li>
        </ul>
        <nav class="nav-menu">
          <ul class="list-menu">
            <li class="item" v-for="(link, key) in links" :key="key">
              <nuxt-link :to="link.url">{{ link.title }}</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
      <button class="activeSpan" @click="menuActive = !menuActive">
        <path
          class="line top"
          d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013"
        />
        <path class="line middle" d="m 70,50 h -40" />
        <path
          class="line bottom"
          d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40"
        />
        <svg
          class="ham hamRotate ham8"
          viewBox="0 0 100 100"
          width="60"
          :class="{ active: menuActive }"
        >
          <path
            class="line top"
            d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
          />
          <path class="line middle" d="m 30,50 h 40" />
          <path
            class="line bottom"
            d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
          />
        </svg>
      </button>
      <div class="mobile-menu" :class="{ mobileMenuActive: menuActive }">
        <!-- backMenu -->
        <div class="backMenu" :class="{ backMenuActive: menuActive }">
          <nav class="nav-menu">
            <ul class="list-menu">
              <li
                class="item"
                :class="{ activeItem: menuActive }"
                v-for="(link, key) in links"
                :key="key"
                @click="menuActive = false"
              >
                <nuxt-link :to="link.url">{{ link.title }}</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
        <!-- /backMenu -->
      </div>
    </div>
  </header>
  <!-- /header -->
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "About", url: "/en/about" },
        { title: "Car park", url: "/en/carpark" },
        { title: "Rates", url: "/en/tariffs" },
        // { title: "Акции", url: "/*" },
        { title: "Addresses", url: "/en/addresses" },
        { title: "Reviews", url: "/en/reviews" },
        { title: "Contacts", url: "/en/contacts" }
      ],
      scrolled: false,
      menuActive: false
    };
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 300;
      // console.log(this.scrolled);
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss">
$white: #fff;
$black: #000;
$green: #33ff66;
$blue: #444ce0;
$orange: #ff8820;
$red: #ff6666;

a.english {
  margin-right: 35px;
  background-color: transparent;
}

// 1199px
@media (max-width: 1199px) {
  a.english {
    margin-right: 20px;
  }
}

// 1199px
@media (max-width: 991px) {
  a.english {
    margin-right: 0px;
  }
}
</style>