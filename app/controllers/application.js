import Ember from 'ember';
import SessionService from 'ember-simple-auth/services/session';

export default Ember.Controller.extend({
	session: Ember.inject.service('session'),
	actions: {
    invalidateSession() {
    	this.get('session').invalidate();
    	}
  	}

});
