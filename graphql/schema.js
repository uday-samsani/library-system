const { buildSchema } = require('graphql');
const Schema = buildSchema(`
	scalar Number
	scalar Date
	type Book {
		id: ID
		title: String!
		author: String!
		price: Number
		publisher: String
		isbn: String
		copies: Number!
		publishedOn: Date
	}
	type AudioVideo {
		id: ID
		title: String!
		duration: Date!
		copies: Number!
		price: Number!
	}
	input BookInput {
		title: String!
		author: String!
		price: Number
		publisher: String
		isbn: String
		copies: Number!
		publishedOn: Date
	}
	input AudioVideoInput {
		title: String!
		duration: Date
		copies: Number!
		price: Number
	}
	type Query {
		getBook(id: String!): Book
		getBooks(input: [String]): [Book]!

		getAudioVideo(id: String!): AudioVideo
		getAudioVideos(input: [String]): [AudioVideo]!
	}
	type Mutation {
		createBook(input: BookInput): Book!
		createAudioVideo(input: AudioVideoInput): AudioVideo!
	}
`);

module.exports = Schema;
