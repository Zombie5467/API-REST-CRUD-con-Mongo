
# API REST CRUD con Mongo

Práctica de un CRUD de libros utilizando **Node.js**, **Express** y **MongoDB**.  
Se probaron los endpoints con **Postman** y la base de datos se gestionó con **MongoDB Compass**.  
El proyecto incluye configuración para **Docker** y está desplegado en **Railway**.

## 🚀 Tecnologías usadas
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4ea94b?style=for-the-badge&logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

## 🌐 Despliegue
👉 [Ver la API en Railway](https://api-rest-crud-con-mongo-production.up.railway.app/books)


## 📖 Endpoints principales


### `GET /books` → Lista todos los libros
![GET /books en Postman](images/CRUD Books_GET_ALL.jpg)  
![GET /books en Postman](images/CRUD Books_GET_ALL_API.jpg)  
URL: [http://api-rest-crud-con-mongo-production.up.railway.app/books](http://api-rest-crud-con-mongo-production.up.railway.app/books)

---

### `POST /books` → Crea un libro
![POST /books en Postman](images/CRUD Books_POST.jpg)
![POST /books en Postman](images/CRUD Books_POST_API.jpg)
URL: [http://api-rest-crud-con-mongo-production.up.railway.app/books](http://api-rest-crud-con-mongo-production.up.railway.app/books)  

⚠️ Nota: Para crear un libro, todos los campos (`title`, `author`, `genre`, `year`) son obligatorios. Si falta alguno, la API devuelve un mensaje de error.

---


### `PATCH /books/:id` → Actualiza parcialmente
![PUT /books/:id en Postman](images/CRUD Books_PATCH_PARAMS.jpg) 
![PUT /books/:id en Postman](images/CRUD Books_PATCH_PARAMS_2.jpg) 
![PUT /books/:id en Postman](images/CRUD Books_PATCH_API.jpg)  
URL: [http://api-rest-crud-con-mongo-production.up.railway.app/books/:id](http://api-rest-crud-con-mongo-production.up.railway.app/books/:id)  

---

### `PUT /books/:id` → Actualiza un libro
![PUT /books/:id en Postman](images/put-books.png)  
URL: [http://api-rest-crud-con-mongo-production.up.railway.app/books/:id](http://api-rest-crud-con-mongo-production.up.railway.app/books/:id)  

⚠️ Nota: Reemplazar `:id` por un ID válido de un libro existente. Todos los campos deben enviarse completos para actualizar correctamente.  
Ejemplo: `3720490020394`

---
### `GET /books/:id` → Busca un libro
![PUT /books/:id en Postman](images/CRUD Books_GET_BY_ID.jpg)  
URL: [http://api-rest-crud-con-mongo-production.up.railway.app/books/:id](http://api-rest-crud-con-mongo-production.up.railway.app/books/:id)  

---

### `DELETE /books/:id` → Elimina un libro
![DELETE /books/:id en Postman](images/CRUD Books_DELETE.jpg)  
URL: [http://api-rest-crud-con-mongo-production.up.railway.app/books/:id](http://api-rest-crud-con-mongo-production.up.railway.app/books/:id)  

⚠️ Nota: Reemplazar `:id` por un ID válido de un libro existente. Si el `id` no existe, la API devolverá un error indicando que el libro no fue encontrado.
 

⚠️ Nota: Si el `id` no existe, la API devolverá un error indicando que el libro no fue encontrado.


## ⚙️ Instalación local
1. Clonar el repo  
   ```bash
   git clone https://github.com/Zombie5467/API-REST-CRUD-con-Mongo
   cd api-rest-crud-mongo


## 📝 Changelog

  

### v0.1 — 14/08/2025

- Corregido el error de Virtualization Al instalar Docker Desktop en mi pc.

  

- Corregida la importación de rutas: ahora se importa `router` desde `book.rutas.js` para evitar errores de middleware pero llame a la importación `bookRoutes` porque lo quise en plural porque pueden ser varias rutas.

- Corregida la conexión a MongoDB: se usa `MONGO_URL` del `.env` en lugar de `MONGO_DB_URL` para que Mongoose reciba la URI correcta.
 
[Ver detalles completos](./CHANGELOG.md)
