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
    },
    doKegstand() {
      this.store.findRecord('game', 0).then(function(anything) {
        anything.set('doKegstand', true);
        anything.save();
      });
      this.transitionTo('kegstand');
    }
  }
});
