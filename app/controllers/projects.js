import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
	// data: function() { return this.get('model'); }.property('model'),
	projectActivity: Ember.computed('model', function() {
		var label = ['Date', 'New', 'Closed'],
			startDates = this.get('model.issues').mapBy('created_on').toArray(),
			updateDates = this.get('model.issues').mapBy('updated_on');

		var today = function() { return moment(); }(),
			countdown = function(daySelect) {
				var tempArray = [];
				for(var i = 7; i != 0; i--){
					tempArray.push(moment().subtract(i, 'days'));
					 }
				return tempArray;
				}();

		return [
			[label] ,
			countdown
		];
	}),
	options: {
	    title: 'Project activity over the past week',
	    // height: 300,
	    // width: 400,

	    animation: {
	      startup: true,
	      easing: 'inAndOut',
	    },
  },

});
