import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
			return Ember.RSVP.hash({
			issues: this.store.findRecord('issue', params.id),
			journals: this.store.peekRecord('journal')
		});

	}
});
