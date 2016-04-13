import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('party');
  this.route('hospital');
  this.route('house');
  this.route('kegstand');
  this.route('talk-to-steve');
  this.route('ask-for-drugs');
  this.route('take-drugs-death');
  this.route('ask-about-randy2');
  this.route('ask-for-wallet');
  this.route('do-kegstand-til-death');
  this.route('do-28-seconds');
  this.route('do-29-seconds');
  this.route('approach-randy-backyard');
  this.route('peek-from-microwave');
  this.route('take-magic-eye');
  this.route('take-sunglasses');
  this.route('ask-about-randy1');
  this.route('show-friend-magic-eye');
  this.route('mimic-bro-voice');
  this.route('ask-about-randy3');
  this.route('steal-bike-death');
  this.route('follow-randy-on-foot');
  this.route('bribe-kid');
  this.route('steal-cops-gun-death');
  this.route('enter-hospital');
  this.route('enter-hospital-death');
  this.route('room-no-items-death');
  this.route('room-drugs-slingshot');
  this.route('room-trophy');
  this.route('room-drugs-death');
  this.route('room-slingshot-death');
  this.route('wheelchair');
  this.route('gurney');
  this.route('wheelchair-distract-magic-eye');
  this.route('wheelchair-run-for-it');
  this.route('gurney-distract-magic-eye');
  this.route('gurney-run-for-it');
  this.route('wheelchair-trophy');
  this.route('gurney-trophy');
  this.route('gurney-distract-trophy');
  this.route('wheelchair-distract-trophy');
  this.route('wheelchair-run-for-it-trophy');
});

export default Router;
