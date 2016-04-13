import Ember from 'ember';

export default Ember.Route.extend({
  inventory: Ember.inject.service(),

  model() {
    return this.store.findAll('game');
  },

  actions: {
    wheelchairDistractMagicEyeTrophy() {
      this.set('wheelchairDistractMagicEyeTrophy', true);
      this.transitionTo('wheelchair-distract-trophy');
    },
    wheelchairRunForItTrophy() {
      this.set('wheelchairRunForItTrophy', true);
      this.transitionTo('wheelchair-run-for-it-trophy');
    }
  }
});
