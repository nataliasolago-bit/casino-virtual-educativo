// src/routes/hello.js
// Ruta de verificacion: confirma que el servidor esta vivo y respondiendo.
// Exigida por la guia como primer endpoint del esqueleto del proyecto.

const express = require('express');
const router = express.Router();

// GET /api/hello
router.get('/hello', (req, res) => {
  res.status(200).json({
    message: 'Hello API - Casino Virtual Educativo funcionando'
  });
});

module.exports = router;
