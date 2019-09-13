const Book = require('../models/Book');
const AudioVideo = require('../models/AudioVideo');
const Magazine = require('../models/Magazine');

// Provide resolver functions for your schema fields
const resolvers = {
	getBook: async ({ id }) => {
		try {
			return await Book.findById(id);
		} catch (error) {
			console.error(error.msg);
		}
	},
	getBooks: async ({ input }) => {
		try {
			if (input) {
				return await Book.find().filter(book =>
					input.includes(book.id)
				);
			} else {
				return await Book.find();
			}
		} catch (error) {
			console.error(error.msg);
		}
	},
	getAudioVideo: async ({ id }) => {
		try {
			if (id) {
				return await Book.findById(id);
			}
		} catch (error) {
			console.error(error.msg);
		}
	},
	getAudioVideos: async ({ input }) => {
		try {
			if (input) {
				return await AudioVideo.find().filter(av =>
					input.includes(av.id)
				);
			} else {
				return await AudioVideo.find();
			}
		} catch (error) {
			console.error(error.msg);
		}
	},
	getMagazine: async ({ id }) => {
		try {
			if (id) {
				return await Magazine.findById(id);
			}
		} catch (error) {
			console.error(error.msg);
		}
	},
	getMagazines: async ({ input }) => {
		try {
			if (input) {
				return await Magazine.find().filter(magazine =>
					input.includes(magazine.id)
				);
			} else {
				return await Magazine.find();
			}
		} catch (error) {
			console.error(error.msg);
		}
	},
	createBook: async ({ input }) => {
		try {
			const book = new Book(input);
			await book.save();
			return book;
		} catch (error) {
			console.error(error.msg);
		}
	},
	createAudioVideo: async ({ input }) => {
		try {
			const av = new AudioVideo(input);
			await av.save();
			return av;
		} catch (error) {
			console.error(error.msg);
		}
	},
	createMagazine: async ({ input }) => {
		try {
			const magazine = new Magazine(input);
			await magazine.save();
			return magazine;
		} catch (error) {
			console.error(error.msg);
		}
	}
};

module.exports = resolvers;
