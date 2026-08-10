// src/middleware/logger.js
// Middleware de logging: registra cada peticion que llega al servidor.
// Se ejecuta ANTES de que la peticion llegue a las rutas, porque se registra
// con app.use() en app.js sin especificar una ruta concreta (aplica a todas).

function logger(req, res, next) {
  const method = req.method;       // GET, POST, PUT, PATCH, DELETE...
  const route = req.originalUrl;   // la ruta solicitada, ej: /api/games
  const timestamp = new Date().toISOString(); // momento exacto de la peticion

  console.log(`[${timestamp}] ${method} ${route}`);

  next(); // IMPORTANTE: pasa el control al siguiente middleware o ruta.
          // Si se omite next(), la peticion se queda "colgada" para siempre.
}

module.exports = logger;
