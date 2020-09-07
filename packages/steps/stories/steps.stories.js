import LeslieSteps from '..'

export default {
  title: 'LeslieSteps',
  component: LeslieSteps,
};

export const Steps = () => ({
  components: { LeslieSteps },
  template: '<leslie-steps :active="2"></leslie-steps>',

})
