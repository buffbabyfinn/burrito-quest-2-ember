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
});

export default Router;
