import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('game');
  },

  actions: {
    stealBike() {
      this.set('stealBike', true);
      this.transitionTo('steal-bike-death');
    },
    followRandyOnFoot() {
      this.set('followRandyOnFoot', true);
      this.transitionTo('follow-randy-on-foot');
    }
  }
});
