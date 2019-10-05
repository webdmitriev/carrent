<template>
  <section class="new-car">
    <div class="new-car-title">
      <h2 class="title">
        Редактируем пост
        <span @click="deletePost(post.id)" class="delete-car">Удалить автомобиль</span>
      </h2>
    </div>

    <form class="new-car-form" @submit.prevent>
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
          <div class="form-group">
            <select v-model="post.primary">
              <option disabled value>Выбрать:</option>
              <option value="Новая">Новая</option>
              <option value="Занята">Занята</option>
              <option value="Свободна">Свободна</option>
            </select>
          </div>
          <div class="form-group form-group-typeCar">
            <span>Тип машины</span>
            <select v-model="post.typeCar">
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
            <select v-model="post.typeCarEn">
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
            <select v-model="post.brandCar">
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
      <!-- button -->
      <div class="form-group form-group-button">
        <AppButton type="submit" @click="onSubmit">Редактировать</AppButton>
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
    postEdit: {
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
      post: this.postEdit
        ? { ...this.postEdit }
        : {
            mainImages: "",
            imagesOne: "",
            imagesTwo: "",
            imagesTree: "",
            imagesFour: "",
            nameCar: "",
            nameCarEn: "",
            brandCar: "",
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
    onSubmit() {
      this.$emit("submit", this.post);
    },
    cancel() {
      this.$router.push("/admin/");
    },
    deletePost(id) {
      axios
        .delete(`https://carrent-3303f.firebaseio.com/posts/${id}.json`)
        .then(res => {
          this.$store.getters.getPostsLoaded;
          this.$router.push("/admin/");
        });
    }
  }
};
</script>

<style lang="scss">
// @import "~/assets/scss/new-post.scss";
</style>
