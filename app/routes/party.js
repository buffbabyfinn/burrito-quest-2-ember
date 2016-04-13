import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('game');
  },

  actions: {
    talkToSteve() {
      this.set('talkToSteve', true);
      this.transitionTo('talk-to-steve');
    },
    doKegstand() {
      this.set('doKegstand', true);
      this.transitionTo('kegstand');
    }
  }
});
