import Ember from 'ember';

export default Ember.Controller.extend({

	session: Ember.inject.service('session'),

  	actions: {
    	authenticate() {
      		let { identification, password } = this.getProperties('login-username', 'login-password');
      		this.get('session').authenticate('authenticator:http-basic', identification, password).catch((reason) => {
        	this.set('errorMessage', reason.error || reason);
      		});
      	}
}


});
