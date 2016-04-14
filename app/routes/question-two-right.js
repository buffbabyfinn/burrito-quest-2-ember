import Ember from 'ember';

export default Ember.Route.extend({
  inventory: Ember.inject.service(),
  model() {
    return this.store.findAll('game');
  },

  actions: {
    questionWrong() {
      this.transitionTo('question-wrong');
    },
    questionThreeRight() {
      this.transitionTo('question-three-right');
    }
  }
});
