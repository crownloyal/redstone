import Ember from 'ember';
import BaseAuthorizer from 'ember-simple-auth/authorizers/base';

export default BaseAuthorizer.extend({

	restore(data){},
	authenticate(identification, password) {

  		let basicAuth = `${identification}:${password}`,
			loginURL = 'https://'+ basicAuth +'@redmine.mozy.lab.emc.com/issues.json';


		var promiseCall = new Ember.RSVP.Promise(function(reject, resolve){
			Ember.$.ajax(loginURL, {
					dataType: 'jsonp',
					crossDomain: true,
					async: true,
					method: 'GET',
					timeout: 1000 * 8
				});
			}, 'Login: Attempt login');

	return promiseCall.then(function(data){
		Ember.RSVP.resolve(data);
		Ember.Logger.debug('success!');
					}).catch(function(reason){
		Ember.RSVP.reject(reason);
		Ember.Logger.debug('failed!');
	});

	}
});