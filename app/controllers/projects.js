import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
	// data: function() { return this.get('model'); }.property('model'),
	projectActivity: Ember.computed('model', function() {
		var label = [['Date', 'New']],
			startDates = this.get('model.issues').mapBy('created_on'),
			updateDates = this.get('model.issues').mapBy('updated_on');

		var today = function() { return moment().format("DD MM"); }(),
			countdown = function() {

				for(var i = 14; i !== 0; i--){
					var changingDay = moment().subtract(i, 'days').format("DD MMM"), 					//substract the number of days
																										//and make a nice list
						testingVAR = [],
						addedToday = function() {
							var newTickets = 0;
							for(var j = 0; j !== startDates.length; j++){									//try for as many times as we have tickets
								if(moment(startDates[j].toString()).isSame(changingDay, 'day')) {					//if ticket date matches this loops's date
									newTickets++;														//count++ for 'new tickets' count
							}
							testingVAR.push(moment(startDates[j].toString()).isSame(changingDay, 'day'));
							return newTickets;
						}
					};

					label.push([changingDay.toString(), addedToday()]); 									//merging the label & creating the multi array
					}
				return label;
				};

		return countdown();
	}),
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
  		daySelector(selection){ this.set(daySelect, selection); },
  	}

});
