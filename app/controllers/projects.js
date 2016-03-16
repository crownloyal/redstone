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

		pushDates(result, 14);
		pushTicketCount(result, startDates, 1);
		pushTicketCount(result, updateDates, 2);

		result.unshift(label);		//add labels at the start
		return result;
	}),
	graphDays: null,
  	actions: { }

});
