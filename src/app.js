// src/app.js
// Configuracion central de la aplicacion Express.
// Aqui se registran: middlewares globales y rutas.
// El servidor en si (server.js) solo levanta esta app en un puerto.

const express = require('express');
const logger = require('./middleware/logger');
const helloRoutes = require('./routes/hello');

const app = express();

// Middleware para poder leer JSON en el body de las peticiones (POST/PUT/PATCH)
app.use(express.json());

// Middleware de logging: se aplica a TODAS las rutas, por eso va antes
// de registrar cualquier ruta y sin especificar un path concreto.
app.use(logger);

// Rutas: todo bajo el prefijo /api
app.use('/api', helloRoutes);

// NOTA: las rutas de games, players, matches y scores se agregan en la Fase 5.

module.exports = app;
