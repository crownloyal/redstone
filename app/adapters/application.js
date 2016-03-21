import DS from 'ember-data';

export default DS.RESTAdapter.extend({

	host: 'http://redmine.mozy.lab.emc.com',
	namespace: '',
	headers: {
		"X-Redmine-API-Key": '3b49bc0cbd087e360052d9e225d5f5326a83cb20'
	},
	buildURL: function(record, suffix) {
		return this._super(record, suffix) + '.json';
	},

	ajaxOptions(url, type, options) {
    var hash = options || {};
    hash.url = url;
    hash.type = type;
    hash.dataType = 'jsonp';
    hash.context = this;

    if (hash.data && type !== 'GET') {
      hash.contentType = 'application/javascript; charset=utf-8';
      hash.data = JSON.stringify(hash.data);
    }

    var headers = get(this, 'headers');
    if (headers !== undefined) {
      hash.beforeSend = function (xhr) {
        Object.keys(headers).forEach((key) =>  xhr.setRequestHeader(key, headers[key]));
      };
    }

    return hash;
  }


});