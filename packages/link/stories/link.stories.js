import LeslieLink from '../src/link.vue'

export default {
  title: 'LeslieLink',
  component: LeslieLink
}

export const Link = () => ({
  components: { LeslieLink },
  template: `
    <div>
      <leslie-link :disabled="true" href="http://www.baidu.com">BAIDU</leslie-link>
    </div>
  `
})