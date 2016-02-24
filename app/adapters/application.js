import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	// host: 'http://redmine.mozy.lab.emc.com',
	namespace: '',
	headers: {
		"X-Redmine-API-Key": '3b99b481e065d2de907ed09a1ec98b3826a05575'
	},
	buildURL: function(record, suffix) {
		return this._super(record, suffix) + '.json';
	}
});