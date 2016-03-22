import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.RSVP.hash({
			issues: this.store.peekAll('issue'),
			project: this.store.peekAll('project')
		});
	}
});