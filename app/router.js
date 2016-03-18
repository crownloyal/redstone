import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('issues', { path: 'issue/:id'});
  this.route('projects', { path: 'project/:id'});
  this.route('404', { path: '*path'});
});

export default Router;
