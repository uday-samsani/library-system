const Book = require('../models/Book');
const AudioVideo = require('../models/AudioVideo');

// Provide resolver functions for your schema fields
const resolvers = {
	Query: {
		getBook: async id => {
			try {
				return await Book.findById(id);
			} catch (error) {
				console.error(error.msg);
			}
		},
		getBooks: async input => {
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
		getAudioVideo: async id => {
			try {
				if (id) {
					return await Book.findById(id);
				}
			} catch (error) {
				console.error(error.msg);
			}
		},
		getAudioVideos: async input => {
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
		}
	},
	Mutation: {
		/* createBook: async input => {
			try {
				const book = new Book(input);
				await book.save();
				return book;
			} catch (error) {
				console.error(error.msg);
			}
		}, */
		createBook: async ({ input }) => {
			try {
				const book = new Book(input);
				await book.save();
				return book;
			} catch (error) {
				console.error(error.msg);
			}
		},
		createAudioVideo: async input => {
			try {
				const av = new AudioVideo(copies, title);
				await av.save();
				return av;
			} catch (error) {
				console.error(error.msg);
			}
		}
	}
};

module.exports = resolvers;
