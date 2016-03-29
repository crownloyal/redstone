import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
import BaseAuthorizer from 'ember-simple-auth/authorizers/base';

export default AjaxService.extend({
	session: Ember.inject.service(),
	// headers: Ember.computed('session.authToken', {
	// function get() {
	// 		let headers = {};
	// 		var authToken = this.get.('session.authToken');

	// 		if(authToken) {
	// 			headers['authToken'] = authToken;
	// 		}
	// 	return headers
	// 	}
	// }),
	trustedHosts: [ /\.emc\./ ]
});

export default BaseAuthorizer.extend({

	// restore(data) {
	// },

	authenticate(identification, password) {
		//ajax: Ember.inject.service();

  		let basicAuth = btoa(`${identification}:${password}`),
  			headers = { Authorization: `Basic ${basicAuth}` },
			loginURL = 'http://redmine.mozy.lab.emc.com/issues.json';


		var promiseCall = Ember.$.ajax(loginURL, {
					headers: headers,
					dataType: 'jsonp',
					crossDomain: true,
					async: true,
					method: 'GET',
					timeout: 1000 * 5
				}).then(function(data){
					Ember.Logger.debug('yay.');
					return data;
				});

		return new Ember.RSVP.Promise(promiseCall);
	}
});