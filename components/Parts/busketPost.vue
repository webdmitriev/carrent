<template>
  <form class="form form-busket-post" @submit.prevent>
    <div class="form-group">
      <input class="preveiwCarNameCar" type="text" v-model="post.nameCar" />
      <p>{{post.nameCar}}</p>
    </div>
    <div class="form-group">
      <input type="date" placeholder="Дата начала" v-model="postCar.startDate" />
    </div>
    <div class="form-group">
      <input type="date" placeholder="Дата окончания" v-model="postCar.expirationDate" />
    </div>
    <div class="form-group">
      <input type="text" placeholder="Имя (полное)" v-model="postCar.userName" />
    </div>
    <div class="form-group">
      <input
        type="text"
        name="phone"
        id="form-user"
        placeholder="+ 7 (999) 999-99-99"
        autocomplete="off"
        required
        v-mask="'+#(###) ###-##-##'"
        v-model="postCar.userPhone"
      />
      <!-- <input type="email" placeholder="Email" v-model="postCar.userEmail" /> -->
    </div>
    <div class="form-group">
      <button @click="onSave()" :disabled="(!postCar.userName && !postCar.userEmail)">Забронировать</button>
    </div>
    <h3 class="title">Дополнительные опции +</h3>
    <div class="form-list" v-if="additionalPptions">
      <div class="list-group" @click="babyCarSeatClick">
        <p class="subTitle">Детское автокресло</p>
        <span class="price">Бесплатно</span>
        <span class="checkbox" :class="{'checkbox-active': babyCarSeat}"></span>
      </div>
      <div class="list-group" @click="unlimitedMileageClick">
        <p class="subTitle">
          Безлимитный пробег
          <span
            class="list-group-question"
            v-tooltip.top="'При индивидуальных условиях'"
          >?</span>
        </p>
        <span class="price">+400 ₽</span>
        <span class="checkbox" :class="{'checkbox-active': unlimitedMileage}"></span>
      </div>
      <div class="list-group" @click="deliveryReturnMkadClick">
        <p class="subTitle">Доставĸа или возврат Авто в пределах МКАД</p>
        <span class="price">+1000 ₽</span>
        <span class="checkbox" :class="{'checkbox-active': deliveryReturnMkad}"></span>
      </div>
      <div class="list-group" @click="deliveryReturnAirportClick">
        <p class="subTitle">Доставĸа или возврат Авто в аэропорт</p>
        <span class="price">+1500 ₽</span>
        <span class="checkbox" :class="{'checkbox-active': deliveryReturnAirport}"></span>
      </div>
      <div class="list-group" @click="completeCarWashClick">
        <p class="subTitle">Комплеĸсная Мойĸа Авто</p>
        <span class="price">+700 ₽</span>
        <span class="checkbox" :class="{'checkbox-active': completeCarWash}"></span>
      </div>
      <div class="list-group" @click="dryCleaningClick">
        <p class="subTitle">
          Химчистĸа салона
          <span
            class="list-group-question"
            v-tooltip.top="'В зависимости от загрязнение и ĸласса Авто'"
          >?</span>
        </p>
        <span class="price">от 2000 ₽</span>
        <span class="checkbox" :class="{'checkbox-active': dryCleaning}"></span>
      </div>
      <div class="list-group" @click="reRunAutoClick">
        <p class="subTitle">Перепробег Авто</p>
        <span class="price">от 6р/ĸм</span>
        <span class="checkbox" :class="{'checkbox-active': reRunAuto}"></span>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    postId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      todos: [],
      result: null,
      additionalPptions: true,
      babyCarSeat: false,
      babyCarSeatTitle: "",
      unlimitedMileage: false,
      unlimitedMileageTitle: "",
      deliveryReturnMkad: false,
      deliveryReturnMkadTitle: "",
      deliveryReturnAirport: false,
      deliveryReturnAirportTitle: "",
      completeCarWash: false,
      completeCarWashTitle: "",
      dryCleaning: false,
      dryCleaningTitle: "",
      reRunAuto: false,
      reRunAutoTitle: "",
      // dateTime: new Date().toISOString().slice(0, 10),
      dateTime: new Date(Date.now()).toLocaleString(),
      postCar: this.post
        ? { ...this.post }
        : {
            nameCar: "",
            startDate: "",
            expirationDate: "",
            userName: "",
            userEmail: "",
            userPhone: "",
            userDate: "",
            babyCarSeatTitle: "",
            unlimitedMileageTitle: "",
            deliveryReturnMkadTitle: "",
            deliveryReturnAirportTitle: "",
            completeCarWashTitle: "",
            dryCleaningTitle: "",
            reRunAutoTitle: ""
          }
    };
  },
  methods: {
    onSave() {
      this.postCar.userDate = this.dateTime;
      this.todos.push(this.postCar);
      this.$emit("submit", this.todos[0]);
    },
    babyCarSeatClick() {
      this.babyCarSeat = !this.babyCarSeat;
      this.postCar.babyCarSeatTitle = "Детское автокресло";
    },
    unlimitedMileageClick() {
      this.unlimitedMileage = !this.unlimitedMileage;
      this.postCar.unlimitedMileageTitle = "Безлимитный пробег";
    },
    deliveryReturnMkadClick() {
      this.deliveryReturnMkad = !this.deliveryReturnMkad;
      this.postCar.deliveryReturnMkadTitle =
        "Доставĸа или возврат Авто в пределах МКАД";
    },
    deliveryReturnAirportClick() {
      this.deliveryReturnAirport = !this.deliveryReturnAirport;
      this.postCar.deliveryReturnAirportTitle =
        "Доставĸа или возврат Авто в аэропорт";
    },
    completeCarWashClick() {
      this.completeCarWash = !this.completeCarWash;
      this.postCar.completeCarWashTitle = "Комплеĸсная Мойĸа Авто";
    },
    dryCleaningClick() {
      this.dryCleaning = !this.dryCleaning;
      this.postCar.dryCleaningTitle = "Химчистĸа салона";
    },
    reRunAutoClick() {
      this.reRunAuto = !this.reRunAuto;
      this.postCar.reRunAutoTitle = "Перепробег Авто";
    }
  }
};
</script>

<style lang="scss">
</style>