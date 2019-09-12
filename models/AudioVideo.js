const mongoose = require('mongoose');

const AudioVideo = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	duration: {
		type: Date,
		required: true
	},
	price: {
		type: Number
	},
	copies: {
		type: Number,
		required: true
	}
});

module.exports = audioVideo = mongoose.model('AudioVideo', AudioVideo);
