const books = require('./db');


const resolvers = {
  Query: {
    books: () => books,
  }
}

module.exports = resolvers;
