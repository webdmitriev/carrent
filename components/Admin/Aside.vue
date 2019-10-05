<template>
  <aside class="aside">
    <ul class="menu">
      <li class="menu-link logotype">
        <nuxt-link to="/" class="link linkWhite">
          <img src="@/assets/img/footer/payless-logo-footer.png" alt="payless" />
        </nuxt-link>
      </li>
      <li class="menu-link">
        <nuxt-link to="/admin" class="link linkWhite">Главная (админ панель)</nuxt-link>
      </li>
      <li class="menu-link">
        <nuxt-link to="/admin/new-post-all" class="link linkWhite">Добавить машину</nuxt-link>
      </li>
      <li class="menu-link">
        <nuxt-link to="/admin/editcar" class="link linkWhite">Редактировать машину</nuxt-link>
      </li>
      <li class="menu-link">
        <nuxt-link to="/admin/orderedgoods" class="link linkWhite">Заказы</nuxt-link>
      </li>
      <li class="menu-link">
        <nuxt-link to="/admin/images" class="link linkWhite">Добавить картинку</nuxt-link>
      </li>
      <!-- <li class="menu-link">
        <nuxt-link to="/admin/comments" class="link linkWhite">Комментарии к товарам</nuxt-link>
      </li>-->
      <li class="menu-link">
        <!-- <nuxt-link to="/admin/auth" class="link linkWhite">Logout</nuxt-link> -->
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  methods: {}
};
</script>

<style lang="scss" scoped>
.aside {
  position: fixed;
  top: 0;
  left: 0;
  width: 18%;
  height: 100%;
  background-color: #001529;
  z-index: 99;
  ul.menu {
    width: 100%;
    li.menu-link {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      a {
        display: block;
        width: 100%;
        padding: 14px 0;
        padding-left: 20px;
        font-size: 16px;
        font-weight: 100;
        color: #fff;
        &.nuxt-link-exact-active {
          background-color: #0190fe;
        }
      }
      button {
        width: 25%;
        height: 45px;
        margin: 0;
      }
      &.logotype {
        img {
          display: block;
          width: 140px;
          margin: 0 auto;
          padding: 12px 0;
        }
      }
    }
  }
}

@media (max-width: 1366px) {
}

@media (max-width: 1199px) {
  .aside {
    ul.menu {
      li.menu-link {
        a {
          padding: 12px 0;
          padding-left: 14px;
          font-size: 14px;
        }
        button {
          width: 25%;
          height: 45px;
          margin: 0;
        }
        &.logotype {
          a.link {
            padding-left: 0;
          }
          img {
            display: block;
            width: 80%;
            margin: 0 auto;
            padding: 12px 0;
          }
        }
      }
    }
  }
}

@media (max-width: 991px) {
}

@media (max-width: 768px) {
}

@media (max-width: 576px) {
}

@media (max-width: 400px) {
}
</style>
