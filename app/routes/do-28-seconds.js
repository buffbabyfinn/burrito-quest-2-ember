import Ember from 'ember';

export default Ember.Route.extend({
  inventory: Ember.inject.service(),

  model() {
    return this.store.findAll('game');
  },

  actions: {
    takeMagicEye() {
      var book = {name: "Magic Eye Book", image: "/assets/images/book.png"};
      this.get('inventory').add(book);
      this.store.findRecord('game', 0).then(function(anything) {
        anything.set('takeMagicEye', true);
        anything.save();
      });
    },
    takeSunglasses() {
      var sunglasses = {name: "Sunglasses", image: "/assets/images/sunglasses.png"};
      this.get('inventory').add(sunglasses);
      this.store.findRecord('game', 0).then(function(anything) {
        anything.set('takeSunglasses', true);
        anything.save();
      });
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
