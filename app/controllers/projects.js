/*
@ ISSUE CONTROLLER
@ Author: Dominic Brause
@ TYPE: Controller
@ -
@ This Controller manages actions related to projects.
*/

import Ember from 'ember';

export default Ember.Controller.extend({

	// handles the dropdown for choosing a day range
  	actions: {
  		changeDayCount(value) {
  			if (value) {
        		this.set('graphDays', value);
      		}
  		}
  	}

});
