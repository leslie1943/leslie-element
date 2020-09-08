<template>
  <a
    :href="disabled ? null : href"
    :class="[disabled && 'disabled', !underline && 'not-underline']"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'LeslieLink',
  props: {
    href: {
      type: String,
    },
    disabled: {
      type: Boolean
    },
    underline: {
      type: Boolean
    },
  }
}
</script>

<style scoped>
.disabled {
  cursor: not-allowed;
}
.not-underline {
  text-decoration: none;
}
</style>
