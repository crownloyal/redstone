import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('issues', { path: 'issue/:id'});
  this.route('project');
});

export default Router;
