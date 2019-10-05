<template>
  <transition name="modal">
    <div class="modal__wrapper" @click="$emit('close')">
      <div class="modal-content" @click.stop>
        <!-- header -->
        <div class="modal-header">
          <p class="modal-title">{{ title }}</p>
          <span class="button-close" @click="$emit('close')">×</span>
        </div>

        <!-- body -->
        <div class="modal-body">
          <div class="imagesAll">
            <slot name="imagesAll"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  mounted() {
    document.body.addEventListener("keyup", e => {
      if (e.keyCode === 27) this.$emit("close");
    });
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
// animation
.modal-enter,
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-content,
.modal-leave-active .modal-content {
  transform: scale(1.2);
}
.modal__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(00, 00, 00, 0.48);
  transition: opacity 0.2s ease;
  z-index: 998;
}

.modal-content {
  position: relative;
  width: 80%;
  height: 80%;
  padding: 20px 18px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  transition: all 0.2s ease;
  border-radius: 0;
  z-index: 999;
  overflow: hidden;
  box-shadow: 0px 4px 80px rgba(106, 106, 106, 0.29);
}
.modal-header {
  position: relative;
  display: flex;
  align-self: center;
  justify-content: space-between;
  padding-bottom: 20px;
  z-index: 5;
  span {
    font-size: 24px;
  }
  .modal-title {
    display: block;
    width: 100%;
    font-size: 24px;
    text-align: center;
  }
  .button-close {
    cursor: pointer;
  }
}
.modal-body {
  width: 100%;
  height: 100%;
  text-align: center;
  overflow-y: scroll;
  .imagesAll {
  }
}
@media (max-width: 768px) {
  .modal-content {
    width: 90%;
  }
}

@media (max-width: 576px) {
  .modal-content {
    width: 98%;
    padding: 8px 4px;
    padding-bottom: 20px;
    .modal-header {
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }
}
</style>
