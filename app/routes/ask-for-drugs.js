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
    askAboutRandy2() {
      this.set('askAboutRandy2', true);
      this.transitionTo('ask-about-randy2');
    },
    askForWallet() {
      this.set('askForWallet', true);
      this.transitionTo('ask-for-wallet');
    }

  }
});
