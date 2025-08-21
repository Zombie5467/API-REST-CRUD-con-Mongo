import mongoose from 'mongoose';


const bookSchema = new mongoose.Schema({
  title: { type: String }, //String con mayúscula porque es propio de mongoose 
  author: { type: String },
  genre: { type: String },
  year: { type: String }
  //required: true?
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
