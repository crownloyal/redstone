import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		handleResults: function(result) {
			this.set('searchResults', result);
		}
	},
	searchResults: ''
});
