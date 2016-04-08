/*
@ APPLICATION CONTROLLER
@ Author: Dominic Brause
@ TYPE: Controller
@ -
@ This Controller manages application wide actions.
*/

import Ember from 'ember';
import SessionService from 'ember-simple-auth/services/session';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin);

export default Ember.Controller.extend({
	session: Ember.inject.service('session'),

	actions: {
    invalidateSession() {
    	this.get('session').invalidate();
    	}
  	}

});
