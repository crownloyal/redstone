import DS from 'ember-data';

export default DS.Model.extend({
	user: DS.attr(),
	created_on: DS.attr(),
	notes: DS.attr(),

	// RELATIONSHIP
	issues: DS.belongsTo('issue', { async: true })
});
