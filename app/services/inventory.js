import Ember from 'ember';

export default Ember.Service.extend({
  items: [{
    "name": "Steve the ambulance driver's Wallet",
    "have": false,
    "image": ""
  },{
    "name": "Trophy",
    "have": false,
    "image": ""
  },{
    "name": "Magic Eye Book",
    "have": false,
    "image": ""
  },{
    "name": "Sunglasses",
    "have": false,
    "image": ""
  },{
    "name": "Dirty Bag of Drugs",
    "have": false,
    "image": ""
  },{
    "name": "Clean Hospital Drugs",
    "have": false,
    "image": ""
  },{
    "name": "Slingshot",
    "have": false,
    "image": ""
  }],

  haveTrue(index) {
    // this.get('items.firstObject').have = true;
    debugger;
  }
});
