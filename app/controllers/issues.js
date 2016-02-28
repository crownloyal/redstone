import Ember from 'ember';

export default Ember.Controller.extend({

	setupController: Ember.computed(function(controller, model){
		controller.set('content', model);
	}),

	activity: Ember.computed('content', function() {
		var issueActivity = Ember.A([['Date', 'Comments']]),
			tempArray = [],
			data = this.get('content');

		for(var journals in data) {
			if(journals === 'journals'){
				issueActivity.push(Object.keys(journals).length);
				// for(var index in journals){
				// 	issueActivity.push(index);
				// }
			// 	for(var i = Object.keys(journals).length; i != 0; i--) {
			// 		issueActivity.push(journals[i]);
			// 	}
			}
		}

		return issueActivity;
	})
});
