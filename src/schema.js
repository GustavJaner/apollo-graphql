const { gql } = require('apollo-server');

const typeDefs = gql`
  # The  special Query type lists all available Queries and what they return.
  # Of the type that is returned, the specific Fields of that type are specified
  type Query {
    books: [Book]
  }

  # the Book type defines queryable *fields* (title, author) for a book
  type Book {
    title: String
    author: String
  }
`;

module.exports = typeDefs;
