<template>
  <div class="control">
    <label>
      <slot />
    </label>
    <input
      v-bind="$attrs"
      :value="value"
      :type="type"
      :required="required"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    required: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  height: 34px;
  padding-left: 10px;
  border: 1px solid #000;
  box-sizing: border-box;
}
</style>
