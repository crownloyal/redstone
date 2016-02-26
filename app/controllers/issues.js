import Ember from 'ember';

export default Ember.Controller.extend({

	search: Ember.computed('id', function() {
    			return this.get('issues').filterBy('id');
  	}),

	activity: Ember.computed('journals', function() {
				var issueActivity = Ember.A([]),
					records = this.get('created_on');

				for(var index in records) {

					issueActivity.push(index)
					// for (var created_on of index) {
					// 	issueActivity.push(created_on);
					// }
				}

				return records;
	})
});
