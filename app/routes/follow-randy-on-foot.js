import Ember from 'ember';

export default Ember.Route.extend({
  inventory: Ember.inject.service(),

  model() {
    return this.store.findAll('game');
  },

  actions: {
    putOnSunglasses() {
      this.set('putOnSunglasses', true);
    },
    bribeKid() {
      var slingshot = {name: "Slingshot", image:""};
      this.get('inventory').add(slingshot);
      this.set('slingshot', true);
      this.set('bribeKid', true);
      this.transitionTo('bribe-kid');
    },
    stealCopsGun() {
      this.set('stealCopsGun', true);
      this.transitionTo('steal-cops-gun-death');
    },
    enterHospital() {
      this.set('enterHospital', true);
      this.transitionTo('enter-hospital');
    }
  }
});
