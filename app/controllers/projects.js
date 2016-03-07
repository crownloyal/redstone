import Ember from 'ember';

export default Ember.Controller.extend({
	// data: function() { return this.get('model'); }.property('model'),
	projectActivity: Ember.computed('model', function() {
		var label = ['Date', 'New', 'Closed'],
			startDate = this.get('model.issues').mapBy('created_on'),
			updateDate = this.get('model.issues').mapBy('updated_on');

		return [
			label ,
			startDate,
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
