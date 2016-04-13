import Ember from 'ember';

export default Ember.Route.extend({
<<<<<<< HEAD
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
=======
  inventory: Ember.inject.service(),
>>>>>>> 70534088ff05579e31f9ab4a0775f8219baf473f
});
