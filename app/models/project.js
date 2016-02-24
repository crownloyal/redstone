import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  identifier: DS.attr(),

  //RELATIONSHIP
  issues: DS.hasMany('issue')
});
