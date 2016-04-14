import Ember from 'ember';
import moment from 'moment';
import GoogleChart from 'ember-google-charts/components/google-chart';
import { pushDates } from '../utils/graph-helper';
import { pushTicketCount } from '../utils/graph-helper';

export default GoogleChart.extend({

	issueActivity: Ember.computed('model', function() {
		let label = ['Date', 'Updated'],
			startDates = this.get('model.created_on'),
			updateDates = this.get('model.updated_on'),
			count = moment().diff(startDates, 'days'),
			result = [];

		Ember.Logger.debug(startDates);
		Ember.Logger.debug(count);

		if(count < 0) {							//catching endless loop
			count = count * -1;
		}

		//actually doing things
		pushDates(result, count);
		pushTicketCount(result, updateDates, 1);

		result.unshift(label);		//add labels at the start
		return result;
	}),

	options: {
		legend: { position: 'bottom' },
		 series: {
            0: { color: '#cc3232' },
            1: { color: '#246381' } 
        },
 		animation: {
 			startup: true,
			duration: 600,
			easing: 'out',
 	    }
 	}
});
