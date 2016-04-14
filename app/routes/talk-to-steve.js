import Ember from 'ember';

export default Ember.Route.extend({
  inventory: Ember.inject.service(),
  model() {
    return this.store.findAll('game');
  },

  actions: {
    askForDrugs() {
      var dirtyDrugs = {name: "Dirty Bag of Drugs", image: "../public/images/drugs.png"};
      this.get('inventory').add(dirtyDrugs);
      this.store.findRecord('game', 0).then(function(anything) {
        anything.set('askForDrugs', true);
        anything.save();
      });
      this.transitionTo('ask-for-drugs');
    },
    askForWallet() {
      var stevesWallet = {name: "Steve the Ambulance Driver's Wallet", image: ""};
      this.get('inventory').add(stevesWallet);
      this.store.findRecord('game', 0).then(function(anything) {
        anything.set('askForWallet', true);
        anything.save();
      });
      this.transitionTo('ask-for-wallet');
    },
    askAboutRandy2() {
      this.set('askAboutRandy2', true);

      this.transitionTo('ask-about-randy2');
    },
    doKegstand() {
      this.store.findRecord('game', 0).then(function(anything) {
        anything.set('doKegstand', true);
        anything.save();
      });
      this.transitionTo('kegstand')
    }
  }
});
