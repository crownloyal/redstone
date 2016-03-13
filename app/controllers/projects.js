import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
	// data: function() { return this.get('model'); }.property('model'),
	projectActivity: Ember.computed('model', function() {
		var label = [['Date', 'New']],
			startDates = this.get('model.issues').mapBy('created_on'),
			updateDates = this.get('model.issues').mapBy('updated_on');

		var today = function() { return moment().format("DD MM"); }(),								//today's date!
			getSpecificDatefromArray = function(dateArray, index) { return dateArray[index]; }(),	//grab a date from the array
			compareDates = function(date, anotherDate) {
				return moment(date.toString()).isSame(anotherDate, 'day');							//compare those 2 dates - returns bool
			}(),

			multiArrayCreator = function() {																//function which creates multi-array
				for(var i = 14+1; i > 0; i--){															//How many days do we need?
					var changingDay = moment().subtract(i, 'days').format("DD MMM"); 					//substract the number of days
																										//and make a nice list
					label.push([changingDay.toString(), addedToday(changingDay)]); 					//merging the label & creating the multi array
					}
				return label;
				},

			addedToday = function(changingDay) {
				var newTickets = 0;
				for(var dateComparer = 0; dateComparer < startDates.length; dateComparer++){									//try for as many times as we have tickets
					if(compareDates()) {																//if ticket date matches this loops's date
						newTickets++;																	//count++ for 'new tickets' count
					}
				return newTickets;
				}
			};

		return countdown();
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
  		daySelector(){ this.set(this.graphDays, selected); },
  	}

});
