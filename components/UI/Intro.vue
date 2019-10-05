<template>
  <section class="intro">
    <div class="container">
      <h1>{{ title }}</h1>
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.intro {
  position: fixed;
  top: 0;
  left: 0;
  width: 20%;
  height: 100%;
  margin: 0;
  text-align: center;
  color: #fff;
  background-color: #4b40e3;
  z-index: 99;
  h1 {
    font-size: 26px;
  }
}
</style>
