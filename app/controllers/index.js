/*
@ DASHBOARD CONTROLLER
@ Author: Dominic Brause
@ TYPE: Controller
@ -
@ This Controller manages dashboard actions.
*/

import Ember from 'ember';
import computedFilterByQuery from 'ember-cli-filter-by-query';

export default Ember.Controller.extend({
	results: function() { return this.get('model'); }.property('model'),

  // Search input & adding the query to the URL
	search: '',
  queryParams: ['search'],
  queryResults: function() {
    if(search.length > 1) {
      return computedFilterByQuery('results.issues', ['id', 'project.name', 'status.name', 'author.name', 'subject', 'priority.name'], 'search').readOnly()
    }
  },

  // checks in the search field is focused
  isFocused: false,
  actions:{
    	focused(){
      		this.set('isFocused', true);
    	},
    	checkFocused(){
    		var element = '#search-box',
    		    qElement = Ember.$(element);

    		if(qElement.val() === ''){
    		    this.set('isFocused', false);
    		}
    	}
	}
});
