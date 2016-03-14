import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
	// data: function() { return this.get('model'); }.property('model'),
	projectActivity: Ember.computed('model', function() {
		var label = ['Date', 'New', 'Updated'],
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
				for (var j = 0; j < preArray.length; j++) {											//take all date array entries
					var counter = 0;																//counter scope inside the loop
					for(var k = 0; k < array.length; k++) {											//take all ticket date entries
						//normalize the date format (I thought it is supposed to work anyway but it will do for now)
						if ( compareDates(moment(array[k]).format("DD MMM"), moment(preArray[j][0]).format("DD MMM")) ) {
						counter++;
						}
					}
				result[j][target] = counter;
				}
			};

		//actually doing things

		pushDates(14);
		pushTicketCount(result, startDates, 1);
		pushTicketCount(result, updateDates, 2);

		result.unshift(label);		//add labels at the start
		return result;
	}),
	graphDays: null,
	options: {
	    //title: 'Project activity over the past week',
	    legend: { position: 'bottom' },

	    animation: {
	      startup: true,
	      duration: 600,
	      easing: 'out',
	    }
	},
  	actions: {
  		daySelector(selection){ this.controller.set(graphDays, selected); },
  	}

});
