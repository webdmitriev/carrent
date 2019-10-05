<template>
  <section class="auth">
    <div class="container">
      <form @submit.prevent="onSubmit" class="auth__form">
        <AppInput type="email" v-model="user.email" placeholder="Email">Login (email):</AppInput>
        <AppInput type="password" v-model="user.password" placeholder="Password">Password:</AppInput>
        <div class="controls">
          <AppButton>Login!</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("authUser", this.user)
        .then(res => {
          this.$router.push("/admin");
          // reset
          // this.user.email = "";
          // this.user.password = "";
        })
        .catch(e => {
          console.log(e);
          // reset
          this.user.email = "";
          this.user.password = "";
        });
    }
  }
};
</script>

<style lang="scss">
.auth {
  text-align: center;
  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
}
.auth__form {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 40vh;
  margin-top: 20vh;
  border: 1px solid red;
  .control,
  .controls {
    width: 80%;
  }
  input {
    width: 100%;
    height: 45px;
    margin-top: 5px;
  }
}
</style>
