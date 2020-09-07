import LgButton from '../'

export default {
  title: 'LgButton',
  component: LgButton,
};

export const Button = () => ({
  components: { LgButton },
  template: '<lg-button label="提交" size="large" :primary="false" backgroundColor="#409FFE" @click="handleClick"></lg-button>',
  methods: {
    handleClick() {
      console.info('handleClick')
    }
  }
})

export const Small = () => ({
  components: { LgButton },
  template: '<lg-button label="提交" size="small" :primary="false" backgroundColor="#409FFE" @click="handleClick"></lg-button>',
  methods: {
    handleClick() {
      console.info('handleClick')
    }
  }
})
