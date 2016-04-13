import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('game');
  },
  actions: {
    startGame() {
      this.set('startScreen', true);
      this.transitionTo('party');
    }
  }

});
