// server.js
// Punto de entrada del proyecto. Arranca el servidor Express en el puerto indicado.

const app = require('./src/app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor Casino Virtual Educativo corriendo en http://localhost:${PORT}`);
});