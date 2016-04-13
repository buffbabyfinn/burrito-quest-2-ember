import Ember from 'ember';

export default Ember.Component.extend({
  startScreen: false,
  talkToSteve: false,

  actions: {
    startGame() {
      this.set('startScreen', true);
    },
    talkToSteve() {
      this.set('startScreen', false);
      this.set('talkToSteve', true);
    }

  }
});
