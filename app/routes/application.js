import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.RSVP.hash({
			issues: this.store.query('issue', {
  				limit: 100,
  				offset: 0
			}),
			project: this.store.findAll('project')
		});
	},
	actions: {
		loading(transition, originRoute) {
			let controller = this.controllerFor('index');
			controller.set('currentlyLoading, true');
			transition.promise.finally(function() {
				controller.set('currentlyLoading', false);
			})
		}
	}
});
