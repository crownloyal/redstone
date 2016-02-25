import Ember from 'ember';

export default Ember.Controller.extend({

	issues: Ember.computed(function() {
    			return this.store.peekAll('post');
  	}),

	search: Ember.computed('issues.@each.id', function() {
    			return this.get('issues').filterBy('id');
  	})

});
