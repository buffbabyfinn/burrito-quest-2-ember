import Ember from 'ember';

export default Ember.Route.extend({
  inventory: Ember.inject.service(),

  model() {
    return this.store.findAll('game');
  },

  actions: {
    wheelchairDistractMagicEye() {
      this.set('wheelchairDistractMagicEye', true);
      this.transitionTo('wheelchair-distract-magic-eye');
    },
    wheelchairRunForIt() {
      this.set('wheelchairRunForIt', true);
      this.transitionTo('wheelchair-run-for-it');
    }
  }
});
