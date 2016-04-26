import DS from 'ember-data';

export default DS.Model.extend({
  //ISSUE META TIER I
  	//ID is parsed automatically
	status: DS.attr(),
	subject: DS.attr('string'),
	description: DS.attr('string'),
	created_on: DS.attr('date'),
	updated_on: DS.attr('date'),

  //TIER II
	author: DS.belongsTo('user', { async: false }),
	category: DS.attr(),
	assigned_to: DS.belongsTo('user', { async: false }),
	priority: DS.attr(),

  //TIER III
  	tracker: DS.attr(),
	start_date: DS.attr('date'),

  //RELATIONSHIPS
  	project: DS.belongsTo('project', { async: true }),
  	journals: DS.hasMany('journal', { async: true }),

  //CUSTOM FIELDS
  	custom_fields: DS.attr()

});
