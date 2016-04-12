import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    startGame() {
      this.transitionTo('party');
    }
  }
});
