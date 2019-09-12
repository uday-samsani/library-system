const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolver');

const connectDb = require('./config/db');

//Connecting to DataBase
connectDb();

const { ApolloServer } = require('apollo-server-express');

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

//Using BodyParser as Middleware
app.use(bodyParser.json());

//Allowing Cross Origin Routing between Client and Server
app.use(cors());

app.listen({ port: 4000 }, () =>
	console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
