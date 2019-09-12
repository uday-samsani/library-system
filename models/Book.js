const mongoose = require('mongoose');

const Book = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	price: {
		type: Number
	},
	publisher: {
		type: String
	},
	isbn: {
		type: String
	},
	copies: {
		type: Number,
		required: true
	},
	publishedOn: {
		type: Date
	}
});

module.exports = book = mongoose.model('Book', Book);
