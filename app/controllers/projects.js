import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
	// data: function() { return this.get('model'); }.property('model'),
	projectActivity: Ember.computed('model', function() {
		var label = ['Date', 'New'],
			startDates = this.get('model.issues').mapBy('created_on'),
			updateDates = this.get('model.issues').mapBy('updated_on'),
			result = [],

			compareDates = function(date, anotherDate) {
				return moment(date).isSame(anotherDate, 'day');										//compare 2 dates - returns bool
			},

			pushDates = function(count) {															//get all those dates into a nice array
				for (var i = (count); i >= 0; i--) {												//needs to be run first
					var changingDay = moment().subtract(i, 'days').format("DD MMM");

					result.push([changingDay, ]);
				}
			},
			pushTicketCount = function(preArray, array, target) {
				var counter = 0;
				for (var j = 0; j < preArray.length; j++) {
					for(var k = 0; k < array.length; k++) {
						if ( compareDates(array[k], preArray[j]) ) {
						counter++;
						}
					}
				result[j][target] = counter;
				}
			};

		//actually doing things

		pushDates(14);
		pushTicketCount(result, startDates, 1);

		result.unshift(label);		//add labels at the start
		return result;
	}),
	graphDays: 7,
	options: {
	    title: 'Project activity over the past week',
	    // height: 300,
	    // width: 400,

	    animation: {
	      startup: true,
	      easing: 'inAndOut',
	    }
	},
  	actions: {
  		// daySelector(){ this.set(this.graphDays, selected); },
  	}

});
