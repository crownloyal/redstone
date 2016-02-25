import Ember from 'ember';

export default Ember.Controller.extend({

	issues: Ember.computed(function() {
    			return this.store.peekAll('issue');
  	}),

	search: Ember.computed('issues.id', function() {
    			return this.get('issues').filterBy('id');
  	})

});
