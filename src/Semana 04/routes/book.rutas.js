import express from "express";
import Book from "../models/book.model.js";
const router = express.Router();

//----------------------------------------------------------------------------------

//Middleware
const getBook = async (req, res, next) => {
  let book;
  const { id } = req.params;
  // Expresión regular para validar el ID de MongoDB (24 caracteres, letras o números hexadecimales)
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ message: "ID de libro inválido" });
  }
  try {
    book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.book = book;
  next();
};

//----------------------------------------------------------------------------------

//[GET ALL] Obtener todos los libros
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    console.log("GET ALL BOOKS:", books);
    if (books.length === 0) {
      return res.status(204).json({ message: "No se encontraron Libros" });
    }
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//----------------------------------------------------------------------------------

//[POST] Crear un nuevo libro (o crear un recurso)
router.post("/", async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    year: req.body.year,
  });

  if (!book.title || !book.author || !book.genre || !book.year) {
    return res.status(400).json({ message: "Todos los campos son requeridos" });
  }

  try {
    const newBook = await book.save();
    console.log("POST NEW BOOK:", newBook);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//----------------------------------------------------------------------------------

// Get individual (book by ID)
router.get("/:id", getBook, async (req, res) => {
  res.json(res.book);
});

//----------------------------------------------------------------------------------

// PUT
router.put("/:id", getBook, async (req, res) => {
  try {
    const book = res.book;
    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author;
    book.genre = req.body.genre || book.genre;
    book.year = req.body.year || book.year;
    const updatedBook = await book.save();
    res.json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//----------------------------------------------------------------------------------

// PATCH
router.patch("/:id", getBook, async (req, res) => {
  if (
    !req.body.title &&
    !req.body.author &&
    !req.body.genre &&
    !req.body.year
  ) {
    return res
      .status(400)
      .json({ message: "Al menos un campo debe ser actualizado" });
  }

  try {
    const book = res.book;
    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author;
    book.genre = req.body.genre || book.genre;
    book.year = req.body.year || book.year;
    const updatedBook = await book.save();
    res.json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//----------------------------------------------------------------------------------

// DELETE
router.delete("/:id", getBook, async (req, res) => {
  try {
    const book = res.book;
    await book.deleteOne({
      _id: book._id,
      // remove() deprecado, usar deleteOne()
      // _id es como le decimos al método el id del libro que queremos eliminar
    });
    res.json({ message: `Libro ${book.title} eliminado` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//----------------------------------------------------------------------------------

export default router;

// NOTA PERSONAL:
/**
 * Aunque se exporta como router, se puede usar otro nombre.
 * En mi caso use 'bookRoutes' para mayor claridad. Pueden ser varias rutas, no solo una.
 * Al importar un default export, puedes usar cualquier nombre porque lo que importa es el valor que se exporta por defecto, no el nombre.
 * bookRoutes apunta exactamente al mismo objeto que exportaste por defecto (router).
 * Express solo necesita que pases un middleware/router, no le importa cómo se llama la variable en tu archivo que lo importa.
 */
