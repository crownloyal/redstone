import Ember from 'ember';
import BaseAuthorizer from 'ember-simple-auth/authorizers/base';

export default BaseAuthorizer.extend({

	authenticate(identification, password) {
  		let basicAuth = btoa(`${identification}:${password}`);
  		let headers = {
     	Authorization: `Basic ${basicAuth}`
    };

	// then make manual AJAX request to your API with `headers` added in.
	// this can be Ember.$.ajax or the new `ember-ajax` service, etc
	// make sure this returns a promise
		let loginURL = 'http://redmine.mozy.lab.emc.com/issues.json';
		let getLogin = function(){
			new Ember.RSVP.Promise((resolve, reject) => {

			Ember.$.ajax({
				url: loginURL,
				headers: `headers`,
				dataType: 'jsonp',
				crossDomain: true,
				async: true,
				method: 'GET'
			})

			if(resolve) {
				return resolve;
			} else {
				return error;
			}

			})
		}

		getLogin.then((response) => {
				return 'accepted:';
			}, (error) => {
				return 'error:' + error;
			});
	}
});