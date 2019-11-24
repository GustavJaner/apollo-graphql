const Book = require('../db/models/Book');


const Mutation = {
  addBook: async (_, args) => {
    try {
      let response = await Book.create(args);
      return response;
    } catch(e) {
      return e.message;
    }
  }
};

module.exports = Mutation;
