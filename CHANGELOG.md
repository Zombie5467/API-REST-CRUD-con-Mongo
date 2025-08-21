## 🐛🛠 Historial de Bugs y Soluciones

  

### 🐳 Bug #1 — Docker Desktop

  

**Descripción:**

Docker Desktop no arrancaba y se quedaba congelado.

  

**Causa:**

Docker Desktop requiere que la **virtualización** esté activa en la BIOS para poder funcionar correctamente.

  

**Solución:**

Activé la virtualización desde la BIOS. Después de esto, Docker Desktop arrancó y funciona correctamente.

  

----------

  

### ⚡ Bug #2 — Require en vez de Import

  

**Descripción:**

El servidor arrojaba un error al intentar usar `bookRoutes` en `app.js`.

  

**Causa:**

**En modo ES Modules (`"type": "module"`)** → no se puede usar `require`, solo `import`.

  

**Solución:**

Usar `import bookRoutes from "./routes/book.rutas.js";` en vez de `const bookRoutes = require("./routes/book.rutas.js");`

  

----------

  

### 🍃 Bug #3 — Error de conexión a MongoDB (`uri` undefined)

  

**Descripción:**

Archivo" `app.js`

Al iniciar la aplicación, Mongoose lanzaba el error:

  

``MongooseError: The `uri` parameter to `openUri()` must be a string, got "undefined"``

  

Esto impedía que el servidor se conectara a la base de datos.

  

**Causa:**

En el código se usaba `process.env.MONGO_DB_URL`, pero en el archivo `.env` la variable se llamaba `MONGO_URL`.

Al no coincidir los nombres, `process.env.MONGO_DB_URL` era `undefined`.

  

**Solución:**

Actualizar el código para usar el nombre correcto de la variable:

  

Antes: `mongoose.connect(process.env.MONGO_DB_URL, { dbName: process.env.MONGO_DB_NAME });`

  

Después: `mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME });`

  

----------

  

### ✅ Estado actual: resueltos.

  

- Puedo usar Docker Desktop correctamente.

  

- Las rutas se importan correctamente usando el mismo nombre que el export en `book.rutas.js`.

- La conexión a MongoDB ahora recibe una URI válida desde `.env`.

  

----------

> Written with [StackEdit](https://stackedit.io/).