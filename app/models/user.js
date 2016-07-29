import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  mail: DS.attr('string'),

  last_login_on: DS.attr('date'),

  issues: DS.hasMany('issue')

});
