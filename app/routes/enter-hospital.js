import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('game');
  },

  actions: {
    followRandyIntoRoomNoItems() {
      this.set('followRandyIntoRoomNoItems', true);
      this.transitionTo('room-no-items-death');
    },
    followRandyIntoRoomDrugsSlingshot() {
      this.set('followRandyIntoRoomDrugsSlingshot', true);
      this.transitionTo('room-drugs-slingshot');
    },
    followRandyIntoRoomTrophy() {
      this.set('followRandyIntoRoomTrophy', true);
      this.transitionTo('room-trophy');
    },
    followRandyIntoRoomDrugs() {
      this.set('followRandyIntoRoomDrugs', true);
      this.transitionTo('room-drugs-death');
    },
    followRandyIntoRoomSlingshot() {
      this.set('followRandyIntoRoomSlingshot', true);
      this.transitionTo('room-slingshot-death');
    }
  }
});
