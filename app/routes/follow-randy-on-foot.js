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
      this.store.findRecord('game', 0).then(function(anything) {
        anything.set('bribeKid', true);
        anything.save();
      });
      this.transitionTo('bribe-kid');
    },
    stealCopsGun() {
      this.set('stealCopsGun', true);
      this.transitionTo('steal-cops-gun-death');
    },
    enterHospital() {
      this.set('enterHospital', true);
      this.transitionTo('enter-hospital');
    },
    enterHospitalDeath() {
      this.set('enterHospitalDeath', true);
      this.transitionTo('enter-hospital-death');
    }
  }
});
