import Ember from 'ember';
import SessionService from 'ember-simple-auth/services/session';

export default Ember.Controller.extend({

	session: Ember.inject.service('session'),
  actions: {
    	authenticate() {
      		var identification = this.get('login-username'),
              password = this.get('login-password');

      		this.get('session').authenticate('authenticator:http-basic', identification, password);
      			// .then((data) => {
      			// 	Ember.Logger.debug('success!');
         //      Ember.RSVP.resolve('success!');
      		 //  }).catch((reason) => {
        	// 		this.set('errorMessage', reason.error || reason);
      		 //  });
      	}
}


});
