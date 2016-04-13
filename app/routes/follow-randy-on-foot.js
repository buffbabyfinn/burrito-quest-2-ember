import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('game');
  },

  actions: {
    putOnSunglasses() {

    },
    bribeKid() {
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
    },
    enterHospitalDeath() {
      this.set('enterHospitalDeath', true);
      this.transitionTo('enter-hospital-death');
    }
  }
});
