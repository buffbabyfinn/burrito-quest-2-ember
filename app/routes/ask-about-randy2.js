import Ember from 'ember';

export default Ember.Route.extend({
  inventory: Ember.inject.service(),

  model() {
    return this.store.findAll('game');
  },

  actions: {
    askForWallet() {
      var dirtyDrugs = {name: "Dirty Bag of Drugs", image: ""};
      this.get('inventory').add(dirtyDrugs);
      this.set('dirtyDrugs', true);
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
