/*
@ APPLICATION CONTROLLER
@ Author: Dominic Brause
@ TYPE: Controller
@ -
@ This Controller manages application wide actions.
*/

import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
    invalidateSession() {
    	this.get('session').invalidate();
    	}
  	}

});
