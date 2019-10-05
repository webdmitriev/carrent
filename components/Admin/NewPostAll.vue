<template>
  <section class="new-car">
    <h2 class="title">Добавить машину</h2>

    <!-- ---------------------------------------------- -->
    <form class="new-car-form" @submit.prevent>
      <div class="preveiwCar-content">
        <div class="preveiwCar-left">
          <div class="images">
            <AppInput placeholder="Главная картинка" v-model="postCar.mainImages"></AppInput>
            <button @click="showModalImagesAll = true">Выбрать картинку</button>
          </div>
          <div class="images-preveiw">
            <div class="preveiw-img">
              <AppInput placeholder="Preview 1" v-model="postCar.imagesOne"></AppInput>
              <button @click="showModalImagesAll = true">Выбрать картинку</button>
            </div>
            <div class="preveiw-img">
              <AppInput placeholder="Preview 2" v-model="postCar.imagesTwo"></AppInput>
              <button @click="showModalImagesAll = true">Выбрать картинку</button>
            </div>
            <div class="preveiw-img">
              <AppInput placeholder="Preview 3" v-model="postCar.imagesTree"></AppInput>
              <button @click="showModalImagesAll = true">Выбрать картинку</button>
            </div>
            <div class="preveiw-img">
              <AppInput placeholder="Preview 4" v-model="postCar.imagesFour"></AppInput>
              <button @click="showModalImagesAll = true">Выбрать картинку</button>
            </div>
          </div>
          <div class="images-show">
            <div class="images-main">
              <h4 v-if="postCar.mainImages">Главная картинка</h4>
              <img v-if="postCar.mainImages" :src="postCar.mainImages" alt="car" />
            </div>
            <div class="images-preview">
              <h4 v-if="postCar.imagesOne">Preview 1</h4>
              <img v-if="postCar.imagesOne" :src="postCar.imagesOne" alt="car" />
            </div>
            <div class="images-preview">
              <h4 v-if="postCar.imagesTwo">Preview 2</h4>
              <img v-if="postCar.imagesTwo" :src="postCar.imagesTwo" alt="car" />
            </div>
            <div class="images-preview">
              <h4 v-if="postCar.imagesTree">Preview 2</h4>
              <img v-if="postCar.imagesTree" :src="postCar.imagesTree" alt="car" />
            </div>
            <div class="images-preview">
              <h4 v-if="postCar.imagesFour">Preview 2</h4>
              <img v-if="postCar.imagesFour" :src="postCar.imagesFour" alt="car" />
            </div>
          </div>
        </div>
        <div class="preveiwCar-right">
          <div class="form-group">
            <input
              class="nameCar"
              type="text"
              placeholder="Название машины"
              v-model="postCar.nameCar"
            />
            <input
              class="nameCar"
              type="text"
              placeholder="Название машины En"
              v-model="postCar.nameCarEn"
            />
            <input class="doorCar" type="text" placeholder="Дверей" v-model="postCar.doorCar" />
            <input class="usersCar" type="text" placeholder="Мест" v-model="postCar.usersCar" />
          </div>
          <div class="form-group">
            <select v-model="postCar.primary">
              <option disabled value>Выбрать:</option>
              <option value="Новая">Новая</option>
              <option value="Занята">Занята</option>
              <option value="Свободна">Свободна</option>
            </select>
          </div>
          <div class="form-group form-group-typeCar">
            <span>Тип машины</span>
            <select v-model="postCar.typeCar">
              <option disabled value>Выбрать:</option>
              <option value="Эконом">Эконом</option>
              <option value="Стандарт">Стандарт</option>
              <option value="Бизнес">Бизнес</option>
              <option value="Премиум">Премиум</option>
              <option value="Внедорожник">Внедорожник</option>
              <option value="Микроавтобус">Микроавтобус</option>
              <option value="Купе">Купе</option>
              <option value="Седан">Седан</option>
              <option value="Хэтчбек">Хэтчбек</option>
              <option value="Универсал">Универсал</option>
              <option value="Лимузин">Лимузин</option>
              <option value="Пикап">Пикап</option>
              <option value="Кроссовер">Кроссовер</option>
              <option value="Фургон">Фургон</option>
              <option value="Минивен">Минивен</option>
            </select>
          </div>
          <div class="form-group form-group-typeCar">
            <span>Тип машины</span>
            <select v-model="postCar.typeCarEn">
              <option disabled value>Выбрать:</option>
              <option value="Economy">Economy</option>
              <option value="Standard">Standard</option>
              <option value="Business">Business</option>
              <option value="Premium">Premium</option>
              <option value="Suv">Suv</option>
              <option value="Minibus">Minibus</option>
              <option value="Coupe">Coupe</option>
              <option value="Sedan">Sedan</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Universal">Universal</option>
              <option value="Limousine">Limousine</option>
              <option value="Pickup">Pickup</option>
              <option value="Crossover">Crossover</option>
              <option value="Wagon">Wagon</option>
              <option value="Minivan">Minivan</option>
            </select>
          </div>
          <div class="form-group">
            <span>Бренд</span>
            <select v-model="postCar.brandCar">
              <option disabled value>Выбрать:</option>
              <option value="audi">Audi</option>
              <option value="bmw">Bmw</option>
              <option value="cadillac">Cadillac</option>
              <option value="citroen">Citroen</option>
              <option value="hummer">Hummer</option>
              <option value="hyundai">Hyundai</option>
              <option value="kia">Kia</option>
              <option value="lada">Lada</option>
              <option value="lexus">Lexus</option>
              <option value="mazda">Mazda</option>
              <option value="mercedesbenz">Mercedes-Benz</option>
              <option value="nissan">Nissan</option>
              <option value="porsche">Porsche</option>
              <option value="skoda">Skoda</option>
              <option value="toyota">Toyota</option>
              <option value="volkswagen">Volkswagen</option>
            </select>
          </div>
          <div class="form-group">
            <ul class="shape">
              <li class="item">
                <input class="kppCar" type="text" placeholder="КПП" v-model="postCar.kppCar" />
              </li>
              <li class="item">
                <input
                  class="ageCar"
                  type="text"
                  placeholder="Год выпуска"
                  v-model="postCar.ageCar"
                />
              </li>
              <li class="item">
                <input class="gearCar" type="text" placeholder="Привод" v-model="postCar.gearCar" />
              </li>
              <li class="item">
                <input class="gearCar" type="text" placeholder="Vin Code" v-model="postCar.vinCode" />
              </li>
            </ul>
          </div>
          <div class="form-group">
            <p class="text">
              <span>Краткое описание:</span>
            </p>
            <textarea v-model="postCar.descrCar"></textarea>
          </div>
          <div class="form-group">
            <p class="text">
              <span>Краткое описание En:</span>
            </p>
            <textarea v-model="postCar.descrCarEn"></textarea>
          </div>
          <div class="form-group">
            <span class="prices-title">Стоимость аренды:</span>
            <div class="preveiwCar-right__bottom">
              <ul class="prices">
                <li class="item">
                  <span class="item-top">
                    1-2
                    <br />дня
                  </span>
                  <input
                    class="priceInput"
                    type="text"
                    placeholder="сумма"
                    v-model="postCar.priceOne"
                  />
                </li>
                <li class="item">
                  <span class="item-top">
                    3-6
                    <br />дня
                  </span>
                  <input
                    class="priceInput"
                    type="text"
                    placeholder="сумма"
                    v-model="postCar.priceTwo"
                  />
                </li>
                <li class="item">
                  <span class="item-top">
                    7-14
                    <br />дней
                  </span>
                  <input
                    class="priceInput"
                    type="text"
                    placeholder="сумма"
                    v-model="postCar.priceTree"
                  />
                </li>
                <li class="item">
                  <span class="item-top">
                    15-30
                    <br />дней
                  </span>
                  <input
                    class="priceInput"
                    type="text"
                    placeholder="сумма"
                    v-model="postCar.priceFour"
                  />
                </li>
                <li class="item">
                  <span class="item-top">
                    31+
                    <br />дней
                  </span>
                  <input
                    class="priceInput"
                    type="text"
                    placeholder="сумма"
                    v-model="postCar.priceFive"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- button -->
      <div class="form-group form-group-button">
        <AppButton type="submit" @click="onSave" :disabled="!postCar.mainImages">Добавить машину</AppButton>
      </div>
    </form>
    <modalImagesAll @close="showModalImagesAll = false" v-if="showModalImagesAll" />
  </section>
</template>

<script>
import modal from "@/components/UI/Modal";
import modalImagesAll from "@/components/ModalImagesAll";

// Advanced Use - Hook into Quill's API for Custom Functionality
import { VueEditor, Quill } from "vue2-editor";

export default {
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  components: {
    modal,
    modalImagesAll,
    VueEditor
  },
  data() {
    return {
      showModalImagesAll: false,
      customToolbar: [["image"]],
      postCar: this.post
        ? { ...this.post }
        : {
            mainImages: "",
            imagesOne: "",
            imagesTwo: "",
            imagesTree: "",
            imagesFour: "",
            linkImages: "",
            nameCar: "",
            nameCarEn: "",
            doorCar: "",
            usersCar: "",
            typeCar: "",
            typeCarEn: "",
            brandCar: "",
            kppCar: "",
            ageCar: "",
            gearCar: "",
            vinCode: "",
            descrCar: "",
            descrCarEn: "",
            priceOne: "",
            priceTwo: "",
            priceTree: "",
            priceFour: "",
            priceFive: "",
            primary: ""
          }
    };
  },
  methods: {
    onSave() {
      this.$emit("submit", this.postCar);
    },
    onCancel() {
      this.$router.push("/admin");
    }
  }
};
</script>

<style lang="scss">
// @import "~/assets/scss/new-girl.scss";
.new-car {
  h2.title {
    position: relative;
    font-size: 26px;
    span.delete-car {
      position: absolute;
      top: 50%;
      right: 0;
      font-size: 14px;
      color: red;
      transform: translateY(-50%);
    }
  }
}
.new-car-form {
  margin-top: 80px;
  .preveiwCar-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    .preveiwCar-left {
      width: 44%;
      .images {
        position: relative;
        width: 100%;
        input {
          position: relative;
          width: 60%;
        }
        button {
          position: absolute;
          top: 0;
          right: 0;
          width: 40%;
          height: 34px;
          color: #000;
          background-color: transparent;
          border: 1px solid #000;
          z-index: 9;
        }
        img {
          width: 100%;
          height: 280px;
          object-fit: contain;
        }
        span.images-close {
          position: absolute;
          top: 0;
          right: 0;
          font-size: 38px;
          line-height: 0.6;
          color: red;
          cursor: pointer;
        }
      }
      .images-preveiw {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        margin-top: 25px;
        .preveiw-img {
          position: relative;
          width: 100%;
          input {
            position: relative;
            width: 60%;
          }
          button {
            position: absolute;
            top: 0;
            right: 0;
            width: 40%;
            height: 34px;
            color: #000;
            background-color: transparent;
            border: 1px solid #000;
          }
          img {
            width: 100%;
            height: 80px;
            object-fit: contain;
          }
          span.images-close {
            position: absolute;
            top: -5px;
            right: 0;
            font-size: 28px;
            line-height: 0.6;
            color: red;
            cursor: pointer;
          }
          .quillWrapper {
            .ql-formats {
              margin: 0;
              button.ql-image {
                width: 60px;
                height: 60px;
              }
            }
          }
        }
      }
      .images-show {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin-top: 40px;
        .images-main {
          width: 100%;
          img {
            width: 210px;
            height: 140px;
            object-fit: contain;
          }
        }
        .images-preview {
          width: 24%;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
    }
    .preveiwCar-right {
      width: 50%;
      .form-group {
        width: 100%;
        margin-bottom: 10px;
        input {
          height: 40px;
          margin-bottom: 5px;
          padding-left: 10px;
          font-size: 16px;
          border: 1px solid #333;
          box-sizing: border-box;
          &.nameCar {
            width: 72%;
          }
          &.doorCar,
          &.usersCar {
            width: 35%;
            margin-right: 10px;
          }
          &.priceInput {
            width: 100%;
            height: 40px;
            padding-left: 5px;
          }
        }
        textarea {
          width: 72%;
          height: 100px;
          padding-left: 10px;
          font-size: 16px;
          border: 1px solid #333;
          box-sizing: border-box;
        }
      }
      ul.shape {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
        width: 72%;
        margin-top: 15px;
        li.item {
          margin: 5px 0;
          span {
            font-size: 16px;
          }
        }
      }
      p.text {
        margin-top: 20px;
        font-size: 16px;
        line-height: 1.4;
        span {
          display: block;
          font-weight: 700;
        }
      }
      span.prices-title {
        display: block;
        width: 100%;
        margin-top: 30px;
        margin-bottom: 10px;
        font-size: 16px;
        line-height: 1.4;
        font-weight: 700;
        text-align: left;
      }
      .preveiwCar-right__bottom {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        ul.prices {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
          width: 70%;
          text-align: center;
          li.item {
            width: 20%;
            span.item-top {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              align-items: center;
              width: 100%;
              min-height: 60px;
              padding: 5px 0;
              background-color: #f5f5f5;
            }
            span.item-bottom {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              align-items: center;
              width: 100%;
              min-height: 48px;
              padding: 5px 0;
              color: #fff;
              background-color: #002b5a;
            }
          }
        }
        button.prices-btn {
          width: 28%;
          font-size: 12px;
          font-weight: 700;
          color: #fff;
          background-color: #002b5a;
          border: 1px solid #002b5a;
          transition: all 0.5s;
          &:hover {
            color: #002b5a;
            background-color: #fff;
          }
        }
      }
    }
  }
  .quillWrapper {
    position: relative;
    width: 100%;
    height: 100%;
    .ql-toolbar.ql-snow {
      position: absolute;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      span.ql-formats {
        button.ql-image {
          width: 80px;
          height: 80px;
          svg {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .ql-container.ql-snow {
      display: none;
    }
  }
}

@media (max-width: 1199px) {
  .new-car-form {
    margin-top: 30px;
    padding-bottom: 40px;
    .preveiwCar-content {
      .preveiwCar-left {
        width: 44%;
        .images {
          width: 100%;
          height: 250px;
          img {
            width: 100%;
            height: 250px;
          }
        }
        .images-preveiw {
          margin-top: 15px;
          .preveiw-img {
            position: relative;
            width: 22%;
            height: 70px;
            img {
              width: 100%;
              height: 70px;
            }
            .quillWrapper {
              .ql-formats {
                margin: 0;
                button.ql-image {
                  width: 50px;
                  height: 50px;
                }
              }
            }
          }
        }
      }
      .preveiwCar-right {
        width: 55%;
        .form-group {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 10px;
          input {
            &.nameCar {
              width: 100%;
            }
            &.doorCar,
            &.usersCar {
              width: 49%;
              margin-right: 0px;
            }
            &.priceInput {
              width: 100%;
              height: 40px;
              padding-left: 5px;
            }
          }
          textarea {
            width: 100%;
            height: 100px;
            padding-left: 10px;
            font-size: 16px;
            border: 1px solid #333;
            box-sizing: border-box;
          }
          &.form-group-typeCar {
            justify-content: flex-start;
            width: 100%;
          }
        }
        ul.shape {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;
          margin-top: 15px;
          li.item {
            margin: 5px 0;
            span {
              font-size: 16px;
            }
          }
        }
        p.text {
          margin-top: 0px;
          font-size: 16px;
          line-height: 1.4;
          span {
            display: block;
            font-weight: 700;
          }
        }
        span.prices-title {
          margin-top: 5px;
          margin-bottom: 10px;
          font-size: 16px;
          line-height: 1.2;
        }
        .preveiwCar-right__bottom {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          width: 100%;
          ul.prices {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: flex-start;
            width: 100%;
            text-align: center;
            li.item {
              width: 20%;
              span.item-top {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                width: 100%;
                min-height: 60px;
                padding: 5px 0;
                background-color: #f5f5f5;
              }
              span.item-bottom {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                width: 100%;
                min-height: 48px;
                padding: 5px 0;
                color: #fff;
                background-color: #002b5a;
              }
            }
          }
          button.prices-btn {
            width: 28%;
            font-size: 12px;
            font-weight: 700;
            color: #fff;
            background-color: #002b5a;
            border: 1px solid #002b5a;
            transition: all 0.5s;
            &:hover {
              color: #002b5a;
              background-color: #fff;
            }
          }
        }
      }
    }
    .quillWrapper {
      position: relative;
      width: 100%;
      height: 100%;
      .ql-toolbar.ql-snow {
        position: absolute;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        span.ql-formats {
          button.ql-image {
            width: 80px;
            height: 80px;
            svg {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .ql-container.ql-snow {
        display: none;
      }
    }
  }
}
</style>
