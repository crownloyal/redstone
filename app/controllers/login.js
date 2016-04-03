/*
@ LOGIN CONTROLLER
@ Author: Dominic Brause
@ TYPE: Controller
@ -
@ This Controller manages actions related to the login.
*/

import Ember from 'ember';
import SessionService from 'ember-simple-auth/services/session';

export default Ember.Controller.extend({

  // authentication takes a user & password and hands it over to
  // the HTTP BASIC Authenticator (/authenticators/http-basic.js)
  // Returns a promise reporting success or failure.
	session: Ember.inject.service('session'),
  actions: {
    	authenticate() {
      		var identification = this.get('login-username'),
              password = this.get('login-password');

      		this.get('session', 'Send Credentials').authenticate('authenticator:http-basic', identification, password)
      			.then((data) => {
      				Ember.Logger.debug('success!');
              Ember.RSVP.resolve('success!', 'Login successful!');
      		  }).catch((reason) => {
        			this.set('errorMessage', 'Credentials incorrect! - ' + reason.error || reason);
              Ember.RSVP.reject(status, 'Credentials incorrect!');
      		  });
      	}
}


});
