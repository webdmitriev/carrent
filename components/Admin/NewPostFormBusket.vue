<template>
  <section class="new-car">
    <div class="new-car-title">
      <h2 class="title">Редактируем пост заказа</h2>
    </div>

    <form class="new-car-form newPostFromBusket" @submit.prevent>
      <div class="preveiwCar-content">
        <div class="preveiwCar-left">
          <div class="images">
            <AppInput placeholder="Главная картинка" v-model="post.mainImages"></AppInput>
            <button @click="showModalImagesAll = true">Выбрать картинку</button>
          </div>
          <div class="images-preveiw">
            <div class="preveiw-img">
              <AppInput placeholder="Preview 1" v-model="post.imagesOne"></AppInput>
              <button @click="showModalImagesAll = true">Выбрать картинку</button>
            </div>
            <div class="preveiw-img">
              <AppInput placeholder="Preview 2" v-model="post.imagesTwo"></AppInput>
              <button @click="showModalImagesAll = true">Выбрать картинку</button>
            </div>
            <div class="preveiw-img">
              <AppInput placeholder="Preview 3" v-model="post.imagesTree"></AppInput>
              <button @click="showModalImagesAll = true">Выбрать картинку</button>
            </div>
            <div class="preveiw-img">
              <AppInput placeholder="Preview 4" v-model="post.imagesFour"></AppInput>
              <button @click="showModalImagesAll = true">Выбрать картинку</button>
            </div>
          </div>
          <div class="images-show">
            <div class="images-main">
              <h4 v-if="post.mainImages">Главная картинка</h4>
              <img v-if="post.mainImages" :src="post.mainImages" alt="car" />
            </div>
            <div class="images-preview">
              <h4 v-if="post.imagesOne">Preview 1</h4>
              <img v-if="post.imagesOne" :src="post.imagesOne" alt="car" />
            </div>
            <div class="images-preview">
              <h4 v-if="post.imagesTwo">Preview 2</h4>
              <img v-if="post.imagesTwo" :src="post.imagesTwo" alt="car" />
            </div>
            <div class="images-preview">
              <h4 v-if="post.imagesTree">Preview 2</h4>
              <img v-if="post.imagesTree" :src="post.imagesTree" alt="car" />
            </div>
            <div class="images-preview">
              <h4 v-if="post.imagesFour">Preview 2</h4>
              <img v-if="post.imagesFour" :src="post.imagesFour" alt="car" />
            </div>
          </div>
        </div>
        <div class="preveiwCar-right">
          <div class="form-group">
            <input class="nameCar" type="text" placeholder="Название машины" v-model="post.nameCar" />
            <input
              class="nameCar"
              type="text"
              placeholder="Название машины En"
              v-model="post.nameCarEn"
            />
            <input class="doorCar" type="text" placeholder="Дверей" v-model="post.doorCar" />
            <input class="usersCar" type="text" placeholder="Мест" v-model="post.usersCar" />
          </div>
          <div class="form-group form-group-show">
            <select v-model="post.primary">
              <option disabled value>Выбрать:</option>
              <option value="Новая">Новая</option>
              <option value="Занята">Занята</option>
              <option value="Свободна">Свободна</option>
            </select>
            <AppButton type="submit" @click="onSubmit">Поменять статус заказа</AppButton>
            <AppButton type="submit" @click="onSubmitted">Вернуть машину в прокат</AppButton>
          </div>
          <div class="form-group form-group-typeCar">
            <span>Тип машины</span>
            <select v-model="post.typeCar">
              <option disabled value>Выбрать:</option>
              <option value="Эконом">Эконом</option>
              <option value="Стандарт">Стандарт</option>
              <option value="Бизнес">Бизнес</option>
              <option value="Премиум">Премиум</option>
              <option value="Купе">Купе</option>
              <option value="Седан">Седан</option>
              <option value="Хэтчбек">Хэтчбек</option>
              <option value="Универсал">Универсал</option>
              <option value="Лимузин">Лимузин</option>
              <option value="Пикап">Пикап</option>
              <option value="Кроссовер">Кроссовер</option>
              <option value="Фургон">Фургон</option>
              <option value="Минивен">Минивен</option>
              <option value="Внедорожник">Внедорожник</option>
            </select>
          </div>
          <div class="form-group form-group-typeCar">
            <span>Тип машины</span>
            <select v-model="post.typeCarEn">
              <option disabled value>Выбрать:</option>
              <option value="Economy">Economy</option>
              <option value="Standard">Standard</option>
              <option value="Business">Business</option>
              <option value="Premium">Premium</option>
              <option value="Coupe">Coupe</option>
              <option value="Sedan">Sedan</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Universal">Universal</option>
              <option value="Limousine">Limousine</option>
              <option value="Pickup">Pickup</option>
              <option value="Crossover">Crossover</option>
              <option value="Wagon">Wagon</option>
              <option value="Minivan">Minivan</option>
              <option value="Vnedorozhnik">Vnedorozhnik</option>
            </select>
          </div>
          <div class="form-group">
            <ul class="shape">
              <li class="item">
                <input class="kppCar" type="text" placeholder="КПП" v-model="post.kppCar" />
              </li>
              <li class="item">
                <input class="ageCar" type="text" placeholder="Год выпуска" v-model="post.ageCar" />
              </li>
              <li class="item">
                <input class="gearCar" type="text" placeholder="Привод" v-model="post.gearCar" />
              </li>
            </ul>
          </div>
          <div class="form-group">
            <p class="text">
              <span>Краткое описание:</span>
            </p>
            <textarea v-model="post.descrCar"></textarea>
          </div>
          <div class="form-group">
            <p class="text">
              <span>Краткое описание En:</span>
            </p>
            <textarea v-model="post.descrCarEn"></textarea>
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
                  <input class="priceInput" type="text" placeholder="сумма" v-model="post.priceOne" />
                </li>
                <li class="item">
                  <span class="item-top">
                    3-6
                    <br />дня
                  </span>
                  <input class="priceInput" type="text" placeholder="сумма" v-model="post.priceTwo" />
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
                    v-model="post.priceTree"
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
                    v-model="post.priceFour"
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
                    v-model="post.priceFive"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </form>
    <modalImagesAll @close="showModalImagesAll = false" v-if="showModalImagesAll" />
  </section>
</template>

<script>
import axios from "axios";
import modal from "@/components/UI/Modal";
import modalImagesAll from "@/components/ModalImagesAll";

// Advanced Use - Hook into Quill's API for Custom Functionality
import { VueEditor, Quill } from "vue2-editor";

export default {
  props: {
    postBusket: {
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
      customToolbar: [["image"]],
      showModalImagesAll: false,
      post: this.postBusket
        ? { ...this.postBusket }
        : {
            mainImages: "",
            imagesOne: "",
            imagesTwo: "",
            imagesTree: "",
            imagesFour: "",
            nameCar: "",
            nameCarEn: "",
            doorCar: "",
            usersCar: "",
            typeCar: "",
            typeCarEn: "",
            kppCar: "",
            ageCar: "",
            gearCar: "",
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
    // onSubmit() {
    //   this.$emit("submit", this.post);
    // },
    onSubmit() {
      console.log("Post Editeng!");
      this.$store.dispatch("editPostBusket", this.post).then(() => {
        console.log(this.post);
        this.$router.push("/admin/orderedgoods/");
      });
    },
    onSubmitted() {
      this.$store.dispatch("addPost", this.post).then(() => {
        this.deletePost(this.post.id);
        this.$router.push("/admin/orderedgoods/");
      });
    },
    deletePost(id) {
      axios
        .delete(`https://carrent-3303f.firebaseio.com/busketpost/${id}.json`)
        .then(res => {
          this.busketPost();
          this.$router.push("/admin/orderedgoods/");
        });
    },
    cancel() {
      this.$router.push("/admin/");
    }
  }
};
</script>

<style lang="scss">
// @import "~/assets/scss/new-post.scss";

.newPostFromBusket {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  .preveiwCar-content {
    width: 45%;
    justify-content: flex-start;
    .preveiwCar-left {
      width: 40%;
      .images,
      .images-preveiw {
        display: none;
      }
      .images-show {
        margin-top: 0;
        .images-main {
          h4 {
            display: none;
          }
        }
        .images-preview {
          display: none;
        }
      }
    }
    .preveiwCar-right {
      width: 54%;
      .form-group {
        display: none;
        &.form-group-show {
          display: block;
          select {
            width: 100%;
            height: 35px;
            margin-bottom: 5px;
            font-size: 18px;
          }
          button {
            width: 100%;
            margin-bottom: 5px;
            font-size: 18px;
            &:hover {
              color: #000;
            }
          }
        }
      }
    }
  }
}
</style>
