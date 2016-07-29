import Ember from 'ember';
import preload from 'ember-data-preload';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(/** AuthenticatedRouteMixin, **/{
	model(params) {
		return preload(this.store.findRecord('project', params.id), { 'issues': 'issue' });
	}
});
