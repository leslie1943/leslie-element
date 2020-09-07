import LeslieInput from '../'

export default {
  title: 'LeslieInput',
  component: LeslieInput,
};

export const Text = () => ({
  components: { LeslieInput },
  template: '<leslie-input v-model="value"></leslie-input>',
  data() {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { LeslieInput },
  template: '<lg-input type="password" v-model="value"></lg-input>',
  data() {
    return {
      value: '1234'
    }
  }
})