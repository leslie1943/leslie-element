<template>
  <div>
    <input v-bind="$attrs" :type="type" :value="value" @input="handleInput" />
  </div>
</template>

<script>
export default {
  name: 'LeslieInput',
  inheritAttrs: false,
  props: {
    value: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value)

      const findParent = parent => {
        while (parent) {
          if (parent.$options.name === 'LgFormItem') {
            break;
          } else {
            parent = parent.$parent
          }
        }
        return parent
      }

      const parent = findParent(this.$parent)
      if (parent) {
        // 在父组件中注册了 this.$on('validate')
        parent.$emit('validate')
      }
    }
  }
}
</script>

<style>
</style>