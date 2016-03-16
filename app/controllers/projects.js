import Ember from 'ember';
import { pushDates } from '../utils/graph-helper';
import { pushTicketCount } from '../utils/graph-helper';

export default Ember.Controller.extend({
	projectActivity: Ember.computed('model', function() {
		var label = ['Date', 'New', 'Updated'],
			startDates = this.get('model.issues').mapBy('created_on'),
			updateDates = this.get('model.issues').mapBy('updated_on'),
			result = [];

		//actually doing things
		pushDates(result, this.get('graphDays'));
		pushTicketCount(result, startDates, 1);
		pushTicketCount(result, updateDates, 2);

		result.unshift(label);		//add labels at the start
		return result;
	}).property('graphDays'),
	options: {
		legend: { position: 'bottom' },
 		animation: {
 			startup: true,
			duration: 600,
			easing: 'out',
 	    }
 	},

	graphDays: 14,					//default: 14 days
  	actions: {
  		changeDayCount(value, component) {
  			if (value) {
        		this.set('graphDays', value)
      		}
  		}
  	}

});
