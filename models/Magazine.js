const mongoose = require('mongoose');

const Magazine = mongoose.Schema({
	title: {
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
	publishedOn: {
		type: Date
	}
});

module.exports = magazine = mongoose.model('Magazine', Magazine);
