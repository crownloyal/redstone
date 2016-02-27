import Ember from 'ember';

export default Ember.Controller.extend({

	setupController: Ember.computed(function(controller, model){
		controller.set('model', model);
	}),

	activity: Ember.computed('model', function() {
		var issueActivity = Ember.A([['Date', 'Comments']]),
			tempArray = [],
			data = this.get('model');

		for(var journals in data) {
			if(journals === 'journals'){
					issueActivity.push(data[journals]);
			}
		}

		return issueActivity;
	})
});
