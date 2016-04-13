import Ember from 'ember';

export default Ember.Route.extend({
  inventory: Ember.inject.service(),
  
  model() {
    return this.store.findAll('game');
  },

  actions: {
    talkToSteve() {
      this.set('talkToSteve', true);
      this.transitionTo('talk-to-steve');
    }
  }
});
