import Ember from 'ember';

export default Ember.Route.extend({
  inventory: Ember.inject.service(),

  model() {
    return this.store.findAll('game');
  },

  actions: {
    askForWallet() {
      var stevesWallet = {name: "Steve the Ambulance Driver's Wallet", image: "/assets/images/wallet.png"};
      this.get('inventory').add(stevesWallet);
      this.store.findRecord('game', 0).then(function(anything) {
        anything.set('askForWallet', true);
        anything.save();
      });
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
