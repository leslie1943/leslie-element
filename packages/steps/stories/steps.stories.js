import LgSteps from '..'

export default {
  title: 'LgSteps',
  component: LgSteps,
};

export const Steps = () => ({
  components: { LgSteps },
  template: '<lg-steps :active="2"></lg-steps>',

})
