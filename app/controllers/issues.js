import Ember from 'ember';
import { pushDates } from '../utils/graph-helper';
import { pushTicketCount } from '../utils/graph-helper';

export default Ember.Controller.extend({

	issueActivity: Ember.computed('model', function() {
		var label = ['Date', 'Updated'],
			startDate = this.get('model.issues.created_on'),
			updateDates = this.get('model.issues.updated_on'),
			graphDays = (moment().diff(startDate, 'days') + 1),
			result = [];

		//actually doing things
		pushDates(result, graphDays);
		pushTicketCount(result, updateDates, 1);

		result.unshift(label);		//add labels at the start
		return result;
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
