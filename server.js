const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const cors = require('cors');

const Schema = require('./graphql/schema');
const Resolvers = require('./graphql/resolver');

const connectDb = require('./config/db');
const app = express();

//Using BodyParser as Middleware
app.use(bodyParser.json());

//Allowing Cross Origin Routing between Client and Server
app.use(cors());

//Connecting to DataBase
connectDb();

//API EndPoint
app.use(
	'/api',
	graphqlHttp({
		schema: Schema,
		rootValue: Resolvers,
		graphiql: true
	})
);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`);
});
