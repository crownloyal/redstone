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

  loginButtonState: 'Login',
  disableToggle: false,

  actions: {
    	authenticate() {
      		var identification = this.get('login-username'),
              password = this.get('login-password');

          this.set('errorMessage', '');
          this.toggleProperty('disableToggle');
          this.set('loginButtonState', 'Sending');

      		this.get('session', 'Send Credentials').authenticate('authenticator:http-basic', identification, password)
      			.then((data) => {
              Ember.RSVP.resolve('success!', 'Login successful!');
              this.toggleProperty('disableToggle');
      		  })
            .catch((reason) => {
              Ember.RSVP.reject(reason.status, 'Credentials incorrect!');

              this.set('loginButtonState', 'Try again');
        			this.set('errorMessage', reason);
              this.toggleProperty('disableToggle');
      		  });
      	}
}


});
