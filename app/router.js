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
});

export default Router;
