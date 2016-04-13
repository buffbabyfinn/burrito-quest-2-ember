import Ember from 'ember';

export default Ember.Route.extend({
  inventory: Ember.inject.service(),

  model() {
    return this.store.findAll('game');
  },

  actions: {
    askForDrugs() {
      var dirtyDrugs = {name: "Dirty Bag of Drugs", image: ""};
      this.get('inventory').add(dirtyDrugs);
      this.set('askForDrugs', true);

      this.transitionTo('ask-for-drugs');
    },
    askForWallet() {
      var stevesWallet = {name: "Steve the Ambulance Driver's Wallet", image: ""};
      this.get('inventory').add(stevesWallet);
      this.set('askForWallet', true);

      this.transitionTo('ask-for-wallet');
    },
    askAboutRandy2() {
      this.set('askAboutRandy2', true);

      this.transitionTo('ask-about-randy2');
    },
    doAKegStand() {
      this.transitionTo('kegstand')
    }
  }
});
