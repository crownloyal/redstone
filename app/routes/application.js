import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.RSVP.hash({
			issues: this.store.findAll('issue'),
			project: this.store.findAll('project')
		});
	}
});