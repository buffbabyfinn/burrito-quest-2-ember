import Ember from 'ember';

export default Ember.Route.extend({
  inventory: Ember.inject.service(),

  model() {
    return this.store.findAll('game');
  },

  actions: {
    askForDrugs() {
      this.set('askForDrugs', true);
      this.transitionTo('ask-for-drugs');
    },
    askForWallet() {
      this.set('askForWallet', true);
      this.get('inventory').haveTrue(0);
      this.transitionTo('ask-for-wallet');
    },
    askAboutRandy2() {
      this.set('askAboutRandy2', true);
      this.transitionTo('ask-about-randy2');
    }
  }
});
