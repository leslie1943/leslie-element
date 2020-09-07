import LeslieButton from '../'

export default {
  title: 'LeslieButton',
  component: LeslieButton,
};

export const Button = () => ({
  components: { LeslieButton },
  template: '<leslie-button label="提交" size="large" :primary="false" backgroundColor="#409FFE" @click="handleClick"></leslie-button>',
  methods: {
    handleClick() {
      console.info('handleClick')
    }
  }
})

export const Small = () => ({
  components: { LeslieButton },
  template: '<lg-button label="提交" size="small" :primary="false" backgroundColor="#409FFE" @click="handleClick"></lg-button>',
  methods: {
    handleClick() {
      console.info('handleClick')
    }
  }
})
