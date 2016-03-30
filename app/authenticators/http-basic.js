import Ember from 'ember';
import BaseAuthorizer from 'ember-simple-auth/authorizers/base';

export default BaseAuthorizer.extend({

	restore(data){},
	authenticate(identification, password) {

  		let basicAuth = `${identification}:${password}`,
			loginURL = 'https://'+ basicAuth +'@redmine.mozy.lab.emc.com/issues.json';


		var promiseCall = new Ember.RSVP.Promise(function(reject, resolve){
			Ember.$.jsonp({
					url: loginURL,
					dataType: 'jsonp',
					crossDomain: true,
					async: true,
					method: 'GET',
					timeout: 1000 * 8,
					error: handleJSONPError,
					success: handleJSONPComplete
				});
			}, 'Login: establish connection');

		function handleJSONPComplete(xOptions, textStatus){
			return textStatus;
			promiseCall.reject(textStatus);
			Ember.Logger.debug(textStatus);
		}
		function handleJSONPError(xOptions, textStatus){
			return textStatus;
			promiseCall.reject(textStatus);
			Ember.Logger.debug(textStatus);
		}

		return promiseCall
			.then((json, xOptions, textStatus) => {
				promiseCall.resolve(textStatus || xOptions);
			})
			.catch((xOptions, textStatus) => {
				promiseCall.reject(textStatus || xOptions);
			});

	}
});