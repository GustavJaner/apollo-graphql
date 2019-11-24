const Book = require('../db/models/Book');


const Query = {
  hello: () => "hello world!",
  books: async () => await Book.find({}).exec(),
};

module.exports = Query;
