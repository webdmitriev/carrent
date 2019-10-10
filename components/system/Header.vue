<template>
  <!-- header -->
  <header class="header">
    <div class="container">
      <div class="header-menu">
        <ul class="menu-top">
          <li class="item item-logo">
            <nuxt-link to="/">
              <!-- <img src="@/assets/img/header/payless-logo.svg" alt="payless" /> -->
              <img src="@/assets/img/header/payless-logo.png" alt="payless" />
            </nuxt-link>
          </li>
          <li class="item item-title">
            <h2 class="title">ПРОКАТ АВТОМОБИЛЕЙ В МОСКВЕ</h2>
          </li>
          <li class="item item-phone">
            <a class="whatsapp social" href="#" target="_blank" rel="noopener noreferrer">
              <img src="@/assets/img/icons/whatsapp.svg" alt="whatsapp" />
            </a>
            <a class="telegram social" href="#" target="_blank" rel="noopener noreferrer">
              <img src="@/assets/img/icons/telegram.svg" alt="telegram" />
            </a>
            <nuxt-link class="english" to="/en/">En</nuxt-link>
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
              <li class="item">
                <nuxt-link class="english" to="/en/">En</nuxt-link>
              </li>
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
        { title: "О компании", url: "/about" },
        { title: "Автопарк", url: "/carpark" },
        { title: "Тарифы", url: "/tariffs" },
        { title: "Условия", url: "/conditions" },
        { title: "Адреса", url: "/addresses" },
        { title: "Отзывы", url: "/reviews" },
        { title: "Контакты", url: "/contacts" }
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
// header
.header {
  background-color: #fff;
  &-menu {
    position: relative;
    width: 100%;
    z-index: 52;
    ul.menu-top {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-top: 30px;
      padding-bottom: 70px;
      li.item {
        position: relative;
        width: 20%;
        &.item-logo {
          a {
            background-color: transparent;
          }
        }
        &.item-title {
          width: 40%;
          h2.title {
            font-size: 18px;
            font-weight: 700;
            text-transform: uppercase;
            text-align: center;
            color: $black;
          }
        }
        &.item-phone {
          text-align: right;
          span {
            margin-right: 10px;
            img {
              width: 15px;
            }
          }
          a {
            display: inline-block;
            text-align: right;
            color: $black;
            border-bottom: 1px dashed red;
          }
        }
        a.social {
          position: absolute;
          display: block;
          width: 30px;
          border: none;
          &.whatsapp {
            left: -100px;
          }
          &.telegram {
            left: -40px;
          }
        }
      }
    }
    nav.nav-menu {
      position: absolute;
      left: 0;
      bottom: -32px;
      width: 100%;
      background-color: #002b5a;
      border-radius: 100px;
      z-index: 10;
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
        list-style: none;
        li {
          a {
            display: block;
            padding: 20px 30px;
            font-size: 20px;
            font-weight: 500;
            text-decoration: none;
            color: $white;
            border-radius: 100px;
            transition: all 0.5s;
            &.nuxt-link-exact-active {
              // color: $blue;
            }
            &:hover {
              // color: $blue;
              background-color: #023975;
              border-radius: 100px;
            }
          }
        }
      }
    }
  }
  .bestGirl-svg__top {
    position: absolute;
    width: 100%;
    bottom: -6px;
    z-index: 12;
  }
  .mobile-menu,
  button.activeSpan {
    display: none;
  }
}
// /header
.nuxt-link-exact-active {
  color: #fff;
  background-color: #023975;
}

// 1199px
@media (max-width: 1199px) {
  .header {
    &-menu {
      ul.menu-top {
        padding-top: 30px;
        padding-bottom: 40px;
        li.item {
          width: 20%;
          &.item-title {
            width: 40%;
            h2.title {
              font-size: 18px;
            }
          }
          &.item-phone {
            span {
              margin-right: 5px;
              img {
                width: 15px;
              }
            }
          }
        }
      }
      nav.nav-menu {
        bottom: -32px;
        ul {
          li {
            a {
              padding: 12px 20px;
              font-size: 20px;
            }
          }
        }
      }
    }
  }
}

// 991px
@media (max-width: 991px) {
  .header {
    &-menu {
      ul.menu-top {
        padding-top: 30px;
        padding-bottom: 20px;
        li.item {
          width: 20%;
          &.item-title {
            width: 40%;
            h2.title {
              font-size: 18px;
            }
          }
          &.item-phone {
            span,
            a {
              display: none;
            }
          }
        }
      }
      nav.nav-menu {
        display: none;
      }
    }
    button.activeSpan {
      position: absolute;
      display: block;
      top: 10px;
      right: 10px;
      background-color: transparent;
      border: none;
      z-index: 99;
      .ham {
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        transition: transform 400ms;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      .hamRotate.active {
        transform: rotate(45deg);
      }
      .hamRotate180.active {
        transform: rotate(180deg);
      }
      .line {
        fill: none;
        transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
        stroke: #000;
        stroke-width: 5.5;
        stroke-linecap: round;
      }
      .ham8 .top {
        stroke-dasharray: 40 160;
      }
      .ham8 .middle {
        stroke-dasharray: 40 142;
        transform-origin: 50%;
        transition: transform 400ms;
      }
      .ham8 .bottom {
        stroke-dasharray: 40 85;
        transform-origin: 50%;
        transition: transform 400ms, stroke-dashoffset 400ms;
      }
      .ham8.active .top {
        stroke-dashoffset: -64px;
      }
      .ham8.active .middle {
        transform: rotate(90deg);
      }
      .ham8.active .bottom {
        stroke-dashoffset: -64px;
      }
    }
    .mobile-menu {
      position: absolute;
      top: 0;
      left: 0;
      display: none;
      width: 100%;
      height: 100%;
      &.mobileMenuActive {
        display: flex;
      }
      span {
        font-size: 40px;
        font-weight: 900;
        color: #000;
        cursor: pointer;
      }
      .backMenu {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 0;
        padding: 10px 15px;
        background-color: rgba(2, 57, 117, 0.9);
        box-sizing: border-box;
        opacity: 0;
        z-index: -1;
        transition: all 1s;
        nav.nav-menu {
          padding-top: 60px;
          ul.list-menu {
            li.item {
              display: block;
              width: 100%;
              text-align: center;
              a {
                display: block;
                margin-bottom: 10px;
                padding: 12px 26px;
                font-size: 22px;
                color: #fff;
                border: 1px solid #fff;
              }
              &.activeItem {
                animation: headerLink 3s ease forwards;
              }
            }
          }
        }
        &.backMenuActive {
          height: 100%;
          opacity: 1;
          transition: all 1s;
          z-index: 58;
          ul.menu {
            display: block;
          }
        }
      }
    }
  }
}
@keyframes headerLink {
  0% {
    height: 1%;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
}

// 768px
@media (max-width: 768px) {
}

// 576px
@media (max-width: 576px) {
  .header {
    &-menu {
      ul.menu-top {
        padding-top: 30px;
        padding-bottom: 20px;
        li.item {
          width: 20%;
          &.item-title {
            width: 40%;
            h2.title {
              font-size: 12px;
            }
          }
          &.item-phone {
            span,
            a {
              display: none;
            }
          }
        }
      }
      nav.nav-menu {
        display: none;
      }
    }
    button.activeSpan {
      top: 0px;
      right: 10px;
    }
    .mobile-menu {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}

// 400px
@media (max-width: 400px) {
  .header {
    &-menu {
      ul.menu-top {
        padding-top: 20px;
        padding-bottom: 15px;
        li.item {
          width: 20%;
          &.item-title {
            width: 40%;
            h2.title {
              font-size: 10px;
            }
          }
        }
      }
    }
  }
}
</style>