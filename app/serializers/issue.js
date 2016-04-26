/*
@ DATA Serializer
@ Author: Dominic Brause
@ TYPE: Serializer
@ -
@ This Serializer assists the issue router to find nested data
*/

import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
	attrs: {
		project: { embedded: 'always' },
		journals: { embedded: 'always' },
		custom_fields: { embedded: 'always' },
		assigned_to: { embedded: 'always' },
		author: { embedded: 'always' }
	},

	extractMeta: function(store, typeClass, payload) {
    if (payload && payload._pagination) {
      store.setMetadataFor(typeClass, payload._pagination);
      delete payload._pagination;
    }
  }

});
