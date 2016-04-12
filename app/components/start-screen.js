import Ember from 'ember';

export default Ember.Component.extend({
  startScreen: false,
  kegstandOne: false,

  actions: {
    startGame() {
      this.set('startScreen', true);
    },
    talkToSteve() {
      this.set('startScreen', false);
      this.set('kegstandOne', true);
    }

  }
});
