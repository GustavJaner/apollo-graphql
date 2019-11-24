const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const mongoDB = require('./db/config');


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
