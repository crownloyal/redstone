import Ember from 'ember';
import GoogleChart from 'ember-google-charts/components/google-chart';
import { pushDates } from '../utils/graph-helper';
import { pushTicketCount } from '../utils/graph-helper';

export default GoogleChart.extend({

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
		series: {
            0: { color: '#cc3232' },
            1: { color: '#246381' } 
        },
 		animation: {
 			startup: true,
			duration: 600,
			easing: 'out',
 	    }
 	},
 	graphDaysObserver: Ember.observer('graphDays', function(){
 		return this.get('graphDays');
	})
});
