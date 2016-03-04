import Ember from 'ember';

export default Ember.Controller.extend({
	data: function() { return this.get('model'); }.property('model'),
	projectActivity: Ember.computed('data', function() {
		var fullModel = this.get('data'),
			issueList = fullModel.get('issues.content.currentState'),
			baseArray = Ember.A(['Date', 'Opened']),
			tempArray = [],
			result = [];

		tempArray.push(issueList.length);

		for(var i in issueList) {
			tempArray.push(issueList.id);
		}

		//merge them all into the result array
		result.push(baseArray);
		result.push(tempArray);

		return result;
	})
});
