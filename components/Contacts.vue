<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">Contact me!</h2>

      <!-- Message -->
      <Message v-if="message" :message="message"/>

      <!-- form -->
      <form class="contact-form" @submit.prevent="onSubmit">
        <!-- Name -->
        <AppInput v-model="user.name">Name:</AppInput>
        <!-- Email -->
        <AppInput type="email" v-model="user.email">Email:</AppInput>
        <!-- Description -->
        <AppTextArea v-model="user.text">Description:</AppTextArea>
        <!-- buttons -->
        <div class="controls">
          <AppButton class="btnWhite">Submit</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      message: null,
      user: {
        name: "",
        email: "",
        text: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.message = "Submited";
      console.log(
        `Name: ${this.user.name}, Email: ${this.user.email}, Descr: ${
          this.user.text
        }`
      );
      (this.user.name = ""), (this.user.email = ""), (this.user.text = "");
    }
  }
};
</script>

<style lang="scss">
.contact {
  text-align: center;
  color: #fff;
  background-color: #4f68f4;
  h2.title {
    color: #fff;
  }
  .contact-form {
    max-width: 600px;
    margin: 30px auto;
    .controls {
      margin: 30px 0;
    }
  }
}
</style>
