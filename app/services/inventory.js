import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    this.get('items').pushObject(item);
  },

  clear() {
    this.get('items').setObjects([]);
  }
});
