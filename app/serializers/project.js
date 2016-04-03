/*
@ DATA Serializer
@ Author: Dominic Brause
@ TYPE: Serializer
@ -
@ This Serializer assists the project router to find nested data
*/

import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
	attrs: {
		parent: { embedded: 'always' }
	}

});
