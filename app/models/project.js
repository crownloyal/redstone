import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),

  // issues: DS.hasMany('issue')
});
