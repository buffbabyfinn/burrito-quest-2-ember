import Ember from 'ember';

export default Ember.Route.extend({
  inventory: Ember.inject.service(),
  model() {
    return this.store.findAll('game');
  },

  actions: {
    takeDrugsDeath() {
      this.transitionTo('take-drugs-death');
    },
    askAboutRandy2() {
      this.set('askAboutRandy2', true);
      this.transitionTo('ask-about-randy2');
    },
    askForWallet() {
      var stevesWallet = {name: "Steve the Ambulance Driver's Wallet", image: "/assets/images/wallet.png"};
      this.get('inventory').add(stevesWallet);
      this.store.findRecord('game', 0).then(function(anything) {
        anything.set('askForWallet', true);
        anything.save();
      });
      this.transitionTo('ask-for-wallet');
    }

  }
});
