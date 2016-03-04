import Ember from 'ember';

export default Ember.Controller.extend({

	data: function() { return this.get('model'); }.property('model'),
	// activity: Ember.computed('data', function() {
	// 	var issueActivity = Ember.A([['Date', 'Comments']]),
	// 		tempArray = [],
	// 		modelObj = this.get('data'),
	// 		journals = modelObj.get('journals'),
	// 		status = modelObj.get('status'); //fancy obj chain (model.issues.journals.ids)

	// 		issueActivity.push(status.id);
	// 		issueActivity.push(journals);

	// 	for(var index in journals) {
	// 		issueActivity.push(index);
	// 		for(var journal = 0; journal.length === index.length; journal++){
	// 			tempArray.push(index[journal]); // get data from inherited array
	// 			issueActivity.push(tempArray);
	// 		}
	// 	}
	// 	return issueActivity;
	// })
});
