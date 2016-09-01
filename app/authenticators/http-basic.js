/*
@ HTTP BASIC AUTHENTICATION
@ Author: Dominic Brause
@ -
@ This authentication method requests a single JSON file and injects the user credentials into the request to validate access.
@ -
@ Usage:
@ - AUTHENTICATE: method receives username & password credentials from a user and runs a single REST call.
	If the credentials are invalid, the user can not proceed.
	If the credentials are valid, the user gains access to the tools full capabilities.
@ - RESTORE: method restores sessions across multiple tabs
*/

import Ember from 'ember';
import BaseAuthorizer from 'ember-simple-auth/authorizers/base';

export default BaseAuthorizer.extend({

	restore(){
		return Ember.RSVP.resolve(data);
	},
	authenticate(identification, password) {

  		let basicAuth = `${identification}:${password}`,
			loginURL = 'https://'+ basicAuth +'@redmine.mozy.lab.emc.com/issues.json';


		var promiseCall = Ember.$.ajax({
					url: loginURL,

					dataType: 'jsonp',
					contentType: "application/javascript",
					crossDomain: true,

					async: true,
					method: 'GET',
					timeout: 1000 * 8,
				});

		return promiseCall.fail(function(json, status){
								return Ember.RSVP.reject(json, 'Login failed!');
						}).then(function(json, status, xOptions){
								return Ember.RSVP.resolve(status, 'Login successful!');
							});

	}
});