import LeslieLink from './src/link.vue'

LeslieLink.install = Vue => {
  Vue.component(LeslieLink.name, LeslieLink)
}
export default LeslieLink