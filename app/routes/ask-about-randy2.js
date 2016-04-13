import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('game');
  },

  actions: {
    takeDrugsDeath() {
      this.set('takeDrugsDeath', true);
      this.transitionTo('take-drugs-death');
    },
    askForWallet() {
      this.set('askForWallet', true);
      this.transitionTo('ask-for-wallet');
    },
    approachRandyBackyard() {
      this.set('approachRandyBackyard', true);
      this.transitionTo('approach-randy-backyard');
    },
    peekFromMicrowave() {
      this.set('peekFromMicrowave', true);
      this.transitionTo('peek-from-microwave');
    }
  }
});
