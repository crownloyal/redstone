import Ember from 'ember';
import BaseAuthorizer from 'ember-simple-auth/authorizers/base';

export default BaseAuthorizer.extend({


	authenticate(identification, password) {
		ajax: Ember.inject.service();

  		let basicAuth = btoa(`${identification}:${password}`),
  			headers = { Authorization: `Basic ${basicAuth}` },
			loginURL = 'http://redmine.mozy.lab.emc.com/issues.json';

		var promise = function() {
			return this.get('ajax').request(loginURL, {
					headers: `headers`,
					dataType: 'jsonp',
					crossDomain: true,
					async: true,
					method: 'GET'
				})
		}
		return promise;

	}
});