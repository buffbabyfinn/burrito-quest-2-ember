import Ember from 'ember';

export default Ember.Route.extend({
  inventory: Ember.inject.service(),

  model() {
    return this.store.findAll('game');
  },

  actions: {
    gurneyDistractMagicEyeTrophy() {
      this.set('gurneyDistractMagicEyeTrophy', true);
      this.transitionTo('gurney-distract-trophy');
    },
    gurneyRunForIt() {
      this.set('gurneyRunForIt', true);
      this.transitionTo('gurney-run-for-it');
    }
  }
});
