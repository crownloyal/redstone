import Ember from 'ember';
import computedFilterByQuery from 'ember-cli-filter-by-query';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
	results: function() { return this.get('model'); }.property('model'),
	search: '',
  queryParams: ['search'],
  queryResults: computedFilterByQuery('results.issues', ['id', 'project.name', 'status.name', 'author.name', 'subject', 'priority.name'], 'search').readOnly(),

  isFocused: false,
  actions:{
    	focused(){
      		this.set('isFocused', true);
    	},
    	checkFocused(){
    		var element = '#search-box',
    		    qElement = $(element);

    		if(qElement.val() === ''){
    		    this.set('isFocused', false);
    		}
    	}
	}
});
