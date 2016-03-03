import DS from 'ember-data';

export default DS.Model.extend({
	created_on: DS.attr(),
	user: DS.attr(),
	notes: DS.attr(),

	// RELATION
	issues: DS.belongsTo('issue')
});
