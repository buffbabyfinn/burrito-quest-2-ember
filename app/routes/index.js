import Ember from 'ember';

export default Ember.Route.extend({
  inventory: Ember.inject.service(),

  model() {
    return this.store.findAll('game');
  },
  
  actions: {
    startGame() {
      this.get('inventory').clear();
      this.set('startScreen', true);
      this.transitionTo('party');
    }
  }

});
