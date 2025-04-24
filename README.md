# User API REST

Este proyecto es una API REST creada con **Node.js**, utilizando **Express** como framework y **Mongoose** para la conexión y manipulación de una base de datos **MongoDB**. Desarrollada en **TypeScript**, sigue una estructura modular y escalable.

---

## 🚀 Tecnologías utilizadas

    Node.js

    TypeScript

    Express

    Mongoose

    tsx (para entorno de desarrollo)

    MongoDB

---

## 📁 Estructura 
<pre>  
├── src/ 
│ ├── app.ts                                            # Configuración principal de la app 
│ ├── server/server.ts                                  # Inicio del servidor 
│ ├── config/mongodb.ts                                 # Conexión a la base de datos MongoDB 
│ ├── models/User.ts                                    # Modelo de Mongoose para usuarios 
│ ├── repositories/                                     # Lógica para acceso a datos 
│ │ └── userRepositories.ts 
│ ├── services/                                         # Lógica de negocio 
│ │ └── UserService.ts 
│ ├── routes/routes.ts                                  # Rutas de la API 
│ ├── types/                                            # Definiciones de tipos 
│ │ ├── RepositoryTypes.ts 
│ │ └── UserTypes.ts 
</pre>
---

## 📌 Endpoints disponibles

Estos endpoints se encuentran definidos en src/routes/routes.ts.
Usuarios

    GET /users → Obtener todos los usuarios

    GET /users/:id → Obtener un usuario por ID

    POST /users → Crear un nuevo usuario

    PUT /users/:id → Actualizar un usuario existente

    DELETE /users/:id → Eliminar un usuario

---

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/brunnoce/UserApiRest.git
cd UserApiRest

# Instala las dependencias
npm install

# Crea el archivo .env y añade tu URI de conexión a MongoDB
echo "MONGODB_URI=tu_conexion_a_mongo" > .env

# Ejecuta la app en modo desarrollo
npm run dev
```
