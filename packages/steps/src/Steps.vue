<template>
  <div class="lg-steps">
    <div class="lg-steps-line"></div>
    <div
      class="lg-step"
      v-for="index in count"
      :key="index"
      :style="{
        backgroundColor: active == index ? currentColor : (active > index ? doneColor : pendingColor)}"
    >{{index}}</div>
  </div>
</template>

<script>
import './steps.css'
export default {
  name: 'LeslieSteps',
  props: {
    count: {
      type: Number,
      default: 3
    },
    active: {
      type: Number,
      default: 1
    },
    currentColor: {
      type: String,
      default: '#409EFF'
    },
    doneColor: {
      type: String,
      default: '#67C23A'
    },
    pendingColor: {
      type: String,
      default: '#909399'
    }
  }
}
</script>

<style>
</style>