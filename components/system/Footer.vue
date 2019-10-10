<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-wrapper">
        <ul class="footer-list">
          <li class="item">
            <span class="logo">
              <img src="@/assets/img/footer/payless-logo-footer-white.png" alt="payless" />
            </span>
            <p class="copyright">{{new Date().getFullYear()}} © | Все права защищены</p>
          </li>
          <li class="item item-phone">
            <span>
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="15px"
                height="15px"
                viewBox="0 0 459 459"
                style="enable-background:new 0 0 459 459;"
                xml:space="preserve"
                fill="#DC291A"
              >
                <g>
                  <g id="call">
                    <path
                      d="M91.8,198.9c35.7,71.4,96.9,130.05,168.3,168.3L316.2,311.1c7.649-7.649,17.85-10.199,25.5-5.1
			                c28.05,10.2,58.649,15.3,91.8,15.3c15.3,0,25.5,10.2,25.5,25.5v86.7c0,15.3-10.2,25.5-25.5,25.5C193.8,459,0,265.2,0,25.5
			                C0,10.2,10.2,0,25.5,0h89.25c15.3,0,25.5,10.2,25.5,25.5c0,30.6,5.1,61.2,15.3,91.8c2.55,7.65,0,17.85-5.1,25.5L91.8,198.9z"
                    />
                  </g>
                </g>
              </svg>
            </span>
            <a href="tel:+79171231213">+7(917)123-12-13</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>

<style lang="scss">
$white: #fff;
$black: #333;
$green: #33ff66;
$orange: #ff8820;
$blue: #444ce0;
$blueProp: #737afe;
$blueLigth: #f0f8ff;

.footer {
  position: relative;
  padding-bottom: 40px;
  background: url("../../assets/img/footer/footer-bg.jpg") center no-repeat;
  background-size: cover;
  &-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-top: 40px;
    ul.footer-list {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      li.item {
        span.logo {
          display: block;
          width: 300px;
          img {
            width: 100%;
          }
        }
        p.copyright {
          margin: 10px 0 5px 0;
          font-size: 15px;
          color: $white;
        }
        &.item-phone {
          text-align: right;
          span {
            margin-right: 10px;
            svg {
              width: 15px;
            }
          }
          a {
            display: inline-block;
            text-align: right;
            color: $white;
            border-bottom: 1px dashed red;
          }
        }
      }
    }
  }
}

@media (max-width: 1366px) {
}

@media (max-width: 1199px) {
}

@media (max-width: 991px) {
}

@media (max-width: 768px) {
}

@media (max-width: 576px) {
  .footer {
    padding-bottom: 20px;
    &-wrapper {
      padding-top: 20px;
      ul.footer-list {
        li.item {
          span.logo {
            img {
              width: 60%;
            }
          }
          p.copyright {
            margin: 10px 0 5px 0;
            font-size: 12px;
          }
        }
      }
    }
  }
}

@media (max-width: 400px) {
  .footer {
    padding-bottom: 20px;
    &-wrapper {
      padding-top: 20px;
      ul.footer-list {
        li.item {
          width: 100%;
          span.logo {
            width: 100%;
            img {
              display: block;
              width: 60%;
              margin: 0 auto;
            }
          }
          p.copyright {
            margin: 10px 0 5px 0;
            font-size: 12px;
            text-align: center;
          }
          &.item-phone {
            margin-top: 10px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
