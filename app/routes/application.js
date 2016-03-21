import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.RSVP.hash({
			issues: this.store.query('issue', {
				callback: 'redstone',
  				limit: 100,
  				offset: 0
			}),
			project: this.store.findAll('project')
		});
	}
});