import Ember from 'ember';

export default Ember.Route.extend({
  inventory: Ember.inject.service(),

  model() {
    return this.store.findAll('game');
  },

  actions: {
    wheelchair() {
      this.set('wheelchair', true);
      this.transitionTo('wheelchair');
    },
    gurney() {
      this.set('gurney', true);
      this.transitionTo('gurney');
    },
    wheelchairTrophy() {
      this.set('wheelchairTrophy', true);
      this.transitionTo('wheelchair-trophy');
    },
    gurneyTrophy() {
      this.set('gurneyTrophy', true);
      this.transitionTo('gurney-trophy');
    }
  }
});
