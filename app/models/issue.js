import DS from 'ember-data';

export default DS.Model.extend({
  tracker: DS.attr(),
  status: DS.attr(),
  priority: DS.attr(),
  author: DS.attr(),
  assigned_to: DS.attr(),
  subject: DS.attr(),
  description: DS.attr(),
  start_date: DS.attr(),

  project: DS.belongsTo('project')
});
