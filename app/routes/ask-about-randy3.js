import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('game');
  },

  actions: {
    showFriendMagicEye() {
      this.set('showFriendMagicEye', true);
      this.transitionTo('show-friend-magic-eye');
    },
    mimicBroVoice() {
      this.set('mimicBroVoice', true);
      this.transitionTo('mimic-bro-voice');
    }
  }
});
