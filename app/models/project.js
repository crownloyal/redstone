import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  identifier: DS.attr('string'),
  parent: DS.attr(),

  //RELATIONSHIP
  issues: DS.hasMany('issue', { async: true })
});
