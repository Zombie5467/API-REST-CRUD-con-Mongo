import express from "express";
import mongoose from "mongoose";
import bookRoutes from "./routes/book.rutas.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";

//----------------------------------------------------------------------------------

dotenv.config();

//----------------------------------------------------------------------------------

//usamos express para los middleware
const app = express();
app.use(bodyParser.json()); // Parseado de body
// app.use(bodyParser.urlencoded({ extended: true }));

//----------------------------------------------------------------------------------

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME })
const db = mongoose.connection;
// Antes: MONGO_URL_DB / Ahora: MONGO_URL, asi se resolvió el bug uri.
const port = process.env.PORT || 3000;



app.use('/books', bookRoutes);
//bookRoutes porque pueden ser varias rutas, no solo una.
//----------------------------------------------------------------------------------


app.listen(port, () => {
  console.log(`Futurama, En vivo desde el puerto ${port}!`);
});

//----------------------------------------------------------------------------------

// NOTA PERSONAL:
/**
 * si uso const bookRoutes = "./routes/book.rutas.js" en lugar de import bookRoutes from "./routes/book.rutas.js"
 * no funciona porque bookRoutes no es un middleware, es una ruta.
 * app.use('/books', bookRoutes) recibiría una cadena de texto plano en vez de un router.
 */