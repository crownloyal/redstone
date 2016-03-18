import Ember from 'ember';

export default Ember.Controller.extend({

  	actions: {
  		changeDayCount(value, component) {
  			if (value) {
        		this.set('graphDays', value)
      		}
  		}
  	}

});
