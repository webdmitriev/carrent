<template>
  <form class="form" @submit.prevent>
    <div class="form-group">
      <input class="preveiwCarNameCar" type="text" v-model="post.nameCar" />
      <p>{{post.nameCarEn}}</p>
    </div>
    <div class="form-group">
      <input type="date" placeholder="Start date" v-model="postCar.startDate" />
    </div>
    <div class="form-group">
      <input type="date" placeholder="Expiration date" v-model="postCar.expirationDate" />
    </div>
    <div class="form-group">
      <input type="text" placeholder="Name (full)" v-model="postCar.userName" />
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
      <button @click="onSave()" :disabled="(!postCar.userName && !postCar.userEmail)">Book now</button>
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
            userDate: ""
          }
    };
  },
  methods: {
    onSave() {
      this.postCar.userDate = this.dateTime;
      this.todos.push(this.postCar);
      this.$emit("submit", this.todos[0]);
    }
  }
};
</script>

<style lang="scss">
</style>