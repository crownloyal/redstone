import DS from 'ember-data';

export default DS.Model.extend({
  //ISSUE META TIER I
  	//ID is parsed automatically
	status: DS.attr(),
	subject: DS.attr(),
	description: DS.attr(),
	created_on: DS.attr(),
	updated_on: DS.attr(),

  	journals: DS.attr(),

  //TIER II
	author: DS.attr(),
	category: DS.attr(),
	assigned_to: DS.attr(),
	priority: DS.attr(),

  //TIER III
  	tracker: DS.attr(),
	start_date: DS.attr(),

  //RELATIONSHIPS
  	project: DS.belongsTo('project'),

  //CUSTOM FIELDS
  	custom_fields: DS.attr()

});
