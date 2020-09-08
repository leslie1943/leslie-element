<template>
  <div>
    <button :class="classes" @click="handleClick" :style="style">
      <slot>{{label}}</slot>
    </button>
  </div>
</template>

<script>
// import './button.css'
export default {
  name: 'LeslieButton',
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
.lg-button {
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
}

.lg-button--primary {
  color: white;
  background-color: #1ea7fd;
}

.lg-button--secondary {
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}

.lg-button--small {
  font-size: 12px;
  padding: 10px 16px;
}

.lg-button--medium {
  font-size: 14px;
  padding: 11px 20px;
}

.lg-button--large {
  font-size: 16px;
  padding: 12px 24px;
}
</style>