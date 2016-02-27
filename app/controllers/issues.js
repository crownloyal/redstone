import Ember from 'ember';

export default Ember.Controller.extend({

	setupController: Ember.computed(function(controller, model){
		controller.set('model', model);
	}),

	activity: Ember.computed('model', function() {
		var issueActivity = Ember.A([['Date', 'Comments']]),
			tempArray = [],
			data = this.get('model.journals');

		for(var index in data) {
			issueActivity.push(data);
		}

		return issueActivity;
	})
});
