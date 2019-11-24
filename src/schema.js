const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {    # The  special Query type lists all available Queries and what they return.
    hello: String # Of the type that is returned, the specific Fields of that type are specified
    books: [Book!]!
  }

  type Mutation {
    addBook(title: String!, author: String!): Book
  }

  type Book { # the Book type defines queryable *fields* (title, author) for a book
    id: ID!
    title: String
    author: String
  }
`;

module.exports = typeDefs;
