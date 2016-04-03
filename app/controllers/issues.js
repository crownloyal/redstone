/*
@ ISSUE CONTROLLER
@ Author: Dominic Brause
@ TYPE: Controller
@ -
@ This Controller manages actions related to issues.
*/

import Ember from 'ember';
import moment from 'moment';
import { pushDates } from '../utils/graph-helper';
import { pushTicketCount } from '../utils/graph-helper';

export default Ember.Controller.extend({

	// manages arrays of start dates and update dates to forge
	// them into a two-dimensional array which can be used by 
	// Google's graph API
	issueActivity: Ember.computed('model', function() {
		var label = ['Date', 'Updated'],
			startDate = this.get('model.issues.created_on'),
			updateDates = this.get('model.issues.updated_on'),
			graphDays = (moment().diff(startDate, 'days') + 1),
			result = [];

		//calctulating the array
		if(graphDays < 0){
			return false;}
		else {
			pushDates(result, graphDays);
			pushTicketCount(result, updateDates, 1);

			result.unshift(label);		//add labels at the start
			return result;
		}
	}),
	options: {
		legend: { position: 'bottom' },
 		animation: {
 			startup: true,
			duration: 600,
			easing: 'out',
 	    }
 	}
});
