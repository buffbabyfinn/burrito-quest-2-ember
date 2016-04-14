import Ember from 'ember';

export default Ember.Route.extend({
  inventory: Ember.inject.service(),

  model() {
    return this.store.findAll('game');
  },

  actions: {
    startGame() {
      this.get('inventory').clear();
      this.store.findRecord('game', 0).then(function(anything) {
        anything.set('doKegstand', false);
        anything.save();
      });
      this.store.findRecord('game', 0).then(function(anything) {
        anything.set('takeSunglasses', false);
        anything.save();
      });

      this.store.findRecord('game', 0).then(function(anything) {
        anything.set('takeMagicEye', false);
        anything.save();
      });
      this.store.findRecord('game', 0).then(function(anything) {
        anything.set('askForWallet', false);
        anything.save();
      });
      this.store.findRecord('game', 0).then(function(anything) {
        anything.set('askForDrugs', false);
        anything.save();
      });

      this.store.findRecord('game', 0).then(function(anything) {
        anything.set('bribeKid', false);
        anything.save();
      });
      this.store.findRecord('game', 0).then(function(anything) {
        anything.set('do29Seconds', false);
        anything.save();
      });

      this.transitionTo('party');
    }
  }

});
