const mongoose = require('mongoose');

const Journal = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	editor: {
		type: String,
		required: true
	},
	edition: {
		type: String,
		required: true
	},
	publisher: {
		type: String
	},
	isbn: {
		type: String
	},
	source: {
		type: String
	},
	publishedOn: {
		type: Date
	}
});

module.exports = journal = mongoose.model('Journal', Journal);
