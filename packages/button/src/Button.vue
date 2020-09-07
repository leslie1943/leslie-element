<template>
  <div>
    <button :class="classes" @click="handleClick" :style="style">
      <slot>{{label}}</slot>
    </button>
  </div>
</template>

<script>
import './button.css'
export default {
  name: 'LgButton',
  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
      event.preventDefault()
    }
  },
  computed: {
    classes() {
      return {
        'lg-button': true,
        'lg-button--primary': this.primary,
        'lg-button--secondary': !this.primary,
        [`lg-button--${this.size}`]: true,
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
        color: this.color || '#FFFFFF'
      }
    },
  },
}
</script>

<style>
</style>