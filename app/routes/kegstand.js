import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('game');
  },

  actions: {
    do28Seconds() {
      this.set('do28Seconds', true);
      this.transitionTo('do-28-seconds');
    },
    do29Seconds() {
      this.set('do29Seconds', true);
      this.transitionTo('do-29-seconds');
    },
    doKegstandTilDeath() {
      this.set('doKegstandTilDeath', true);
      this.transitionTo('do-kegstand-til-death');
    }
  }
});
