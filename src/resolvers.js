const Book = require('./db/models/book');


const resolvers = {
  Query: {
    hello: () => "hello world!",
    books: async () => await Book.find({}).exec(),
  },

  Mutation: {
    addBook: async (_, args) => {
      try {
        let response = await Book.create(args);
        return response;
      } catch(e) {
        return e.message;
      }
    }
  },
};

module.exports = resolvers;
