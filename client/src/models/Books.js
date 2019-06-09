var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ScoreBoardSchema object
var BooksSchema = new Schema({
    // `title` - Title of the book from the Google Books API
    title: String,
    // `authors` - The books's author(s) as returned from the Google Books API  
    authors: String,
    // `description` - The book's description as returned from the Google Books API
    description: String,
    // `image` - The Book's thumbnail image as returned from the Google Books API 
    image: String,
    // `link` - The Book's information link as returned from the Google Books API
    link: String
    });

// This creates our model from the above schema, using mongoose's model method
var Books = mongoose.model("Books", BooksSchema);

// Export the Book model
module.exports = Books;
