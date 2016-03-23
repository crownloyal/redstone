import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
    invalidateSession() {
    	this.get('session').invalidate();
    	}
  	}

});
