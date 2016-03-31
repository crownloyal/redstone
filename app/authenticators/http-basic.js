import Ember from 'ember';
import BaseAuthorizer from 'ember-simple-auth/authorizers/base';

export default BaseAuthorizer.extend({

	restore(data){},
	authenticate(identification, password) {

  		let basicAuth = `${identification}:${password}`,
			loginURL = 'https://'+ basicAuth +'@redmine.mozy.lab.emc.com/issues.json';


		var promise = this.get('promiseCall'),
			promiseCall = Ember.$.jsonp({
					url: loginURL,
					dataType: 'jsonp',
					crossDomain: true,
					async: true,
					method: 'GET',
					timeout: 1000 * 8,
					error: handleJSONPError,
					success: handleJSONPComplete
				});

		function handleJSONPComplete(json, xOptions, textStatus){
			return textStatus;
			promise.resolve(textStatus);
			Ember.Logger.debug(textStatus);
		}
		function handleJSONPError(xOptions, textStatus){
			return textStatus;
			promise.reject(textStatus);
			Ember.Logger.debug(textStatus);
		}

		return promise;

	}
});