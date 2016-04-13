import Ember from 'ember';

export default Ember.Route.extend({

  inventory: Ember.inject.service(),

  model() {
    return this.store.findAll('game');
  },

  actions: {
    do28Seconds() {
      this.set('do28Seconds', true);
      this.transitionTo('do-28-seconds');
    },
    do29Seconds() {
      var trophy = {name: "Kegstand Trophy", image: ""};
      this.get('inventory').add(trophy);
      this.set('trophy', true);
      this.set('do29Seconds', true);
      this.transitionTo('do-29-seconds');
    },
    doKegstandTilDeath() {
      this.set('doKegstandTilDeath', true);
      this.transitionTo('do-kegstand-til-death');
    }

  },

});
