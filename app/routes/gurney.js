import Ember from 'ember';

export default Ember.Route.extend({
  inventory: Ember.inject.service(),

  model() {
    return this.store.findAll('game');
  },

  actions: {
    gurneyDistractMagicEye() {
      this.set('gurneyDistractMagicEye', true);
      this.transitionTo('gurney-distract-magic-eye');
    },
    gurneyRunForIt() {
      this.set('gurneyRunForIt', true);
      this.transitionTo('gurney-run-for-it');
    }
  }
});
