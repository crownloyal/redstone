import Ember from 'ember';

export default Ember.Controller.extend({

	activity: Ember.computed(function() {
		var issueActivity = Ember.A([['Date', 'Comments']]),
			tempArray = [],
			data = this.get('model');

		for(var journals in data) {
			// if(journals === 'journals'){
			// 	issueActivity.push(Object.keys(journals).length);
			// 	for(var index in journals){
			// 		issueActivity.push(index);
			// 	}
			// 	for(var i = Object.keys(journals).length; i !== 0; i--) {
			// 		issueActivity.push(journals[i]);
			// 	}
			// }
		}
		// console.log(data);
		return issueActivity;
	})
});
