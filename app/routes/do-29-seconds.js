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
    askAboutRandy1() {
      this.set('askAboutRandy1', true);
      this.transitionTo('ask-about-randy1');
    }
  }
});
