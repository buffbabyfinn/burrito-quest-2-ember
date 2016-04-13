import Ember from 'ember';

export default Ember.Route.extend({
  inventory: Ember.inject.service(),

  model() {
    return this.store.findAll('game');
  },

  actions: {
    takeMagicEye() {
      var book = {name: "Magic Eye Book", image: ""};
      this.get('inventory').add(book);
    },
    takeSunglasses() {
      var sunglasses = {name: "Sunglasses", image: ""};
      this.get('inventory').add(sunglasses);
    },
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
