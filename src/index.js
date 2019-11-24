const { ApolloServer, gql } = require('apollo-server');
const mongoDB = require('./db/config');
const typeDefs = require('./schema');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');


const resolvers = {
  Query,
  Mutation,
};

const dataSources = () => ({
  mongoDB,
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources, // The data sources are added to the context
});

server.listen({ port: 4000 })
.then(({ url }) => console.log(`🚀 app running at ${url}`));
