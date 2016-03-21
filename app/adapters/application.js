import DS from 'ember-data';

export default DS.RESTAdapter.extend({

	host: 'http://redmine.mozy.lab.emc.com',
	jsonp: 'redstone',
	dataType: 'jsonp',
	namespace: '',
	headers: {
		"X-Redmine-API-Key": '3b49bc0cbd087e360052d9e225d5f5326a83cb20'
	},
	buildURL: function(record, suffix) {
		return this._super(record, suffix) + '.json';
	}

});